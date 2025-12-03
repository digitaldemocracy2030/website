import site from "./_config.ts";
import cms from "./_cms.ts";

import { log } from "lume/core/utils/log.ts";
import { localIp } from "lume/core/utils/net.ts";
import { env, setEnv } from "lume/core/utils/env.ts";
import { SiteWatcher } from "lume/core/watcher.ts";
import logger from "lume/middlewares/logger.ts";
import noCache from "lume/middlewares/no_cache.ts";
import noCors from "lume/middlewares/no_cors.ts";
import reload from "lume/middlewares/reload.ts";
import lumeCMS from "lume/plugins/lume_cms.ts";

function build() {
  // Set the live reload environment variable to add hash to the URLs in the module loader
  setEnv("LUME_LIVE_RELOAD", "true");

  // Show draft pages in development mode (if not set already)
  const showDrafts = env<boolean | undefined>("LUME_DRAFTS");
  if (showDrafts === undefined) {
    setEnv("LUME_DRAFTS", "true");
  }

  // Setup LumeCMS
  {
    const isProduction = env<boolean>("LUME_PROXIED");
    site.use(lumeCMS({
      cms,
      protectSite: isProduction,
    }));
  }

  // try {
  //   await buildSite(site);
  // } catch (error) {
  //   console.error(Deno.inspect(error, { colors: true }));
  // }

  // Start the watcher
  const watcher = site.getWatcher();

  watcher.addEventListener("change", (event) => {
    const files = event.files!;

    log.info("Changes detected:");
    files.forEach((file) => {
      log.info(`- <gray>${file}</gray>`);
    });

    return site.update(files);
  });

  watcher.addEventListener("error", (event) => {
    console.error(Deno.inspect(event.error, { colors: true }));
  });

  watcher.start();

  // Start the local server
  const server = site.getServer();
  const { port, hostname } = site.options.server;

  server.addEventListener("start", () => {
    {
      const ipAddr = localIp();

      log.info("\n  Server started at:");
      log.info(`  <green>http://${hostname}:${port}/</green> (local)`);

      if (ipAddr) {
        log.info(`  <green>http://${ipAddr}:${port}/</green> (network)`);
      }

      if (cms) {
        log.info("\n  LumeCMS started at:");
        const { basePath } = cms.options;
        log.info(
          `  <green>http://${hostname}:${port}${basePath}</green> (local)`,
        );

        if (ipAddr) {
          log.info(
            `  <green>http://${ipAddr}:${port}${basePath}</green> (network)`,
          );
        }
      }
    }

    site.dispatchEvent({ type: "afterStartServer" });
  });

  if (log.level < 5) {
    server.use(logger());
  }

  // Add the reload middleware
  server.addEventListener("start", () => {
    server.useFirst(async (request, next) => {
      const response = await next(request);

      // Reload if the response header tells us to
      if (response.headers.get("X-Lume-CMS") === "reload") {
        log.info("Reloading the site...");
        const url = response.headers.get("Location") || request.url;
        await site.build();
        return createWaitResponse(url);
      }

      return response;
    });
  }, { once: true });

  server.useFirst(
    reload({
      watcher: new SiteWatcher(site),
      basepath: site.options.location.pathname,
    }),
    noCache(),
    noCors(),
  );

  server.start();
}

function createWaitResponse(url: string): Response {
  return new Response(
    `<html>
    <head>
      <meta charset="utf-8">
      <title>Agarde…</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
      body {
        font-family: system-ui, sans-serif;
        margin: 0;
        padding: 2rem;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: minmax(0, 800px);
        align-content: center;
        justify-content: center;
        min-height: 100vh
      }
      </style>
    </head>
    <body>
    <pre><samp>Please wait…\n</samp></pre>
    <script type="module">
      const samp = document.querySelector("samp");
      const timeout = 1000;
      while (true) {
        try {
          await fetch("${url}");
          document.location = "${url}";
          break;
        } catch {
          samp.textContent += ".";
          await new Promise((resolve) => setTimeout(resolve, timeout));
        }
      }
    </script>
    </body>
    </html>`,
    {
      status: 200,
      headers: {
        "Content-Type": "text/html",
        "X-Lume-CMS": "reload",
        "X-Lume-Location": url,
      },
    },
  );
}
build();
