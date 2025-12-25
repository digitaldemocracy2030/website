// deno deploy entrypoint 用
// CMS を起動し、 drafts も render します
// 現在の CMS のアーキテクチャ上、 CMS の編集画面で preview をする際に
// 実際に render されたページを使うので、 drafts も render することになる。
// prod 環境 https://dd2030.org は github pages を使い、 CMS 機能を持たない
// draft のページはスキップされる

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

const pid = Deno.pid;
const ppid = Deno.ppid;
console.log(`Starting Lume CMS entrypoint (pid: ${pid}, ppid: ${ppid})`);

site.ignore((path) => {
  return !path.startsWith("/topics");
});

async function build() {
  // Set the live reload environment variable to add hash to the URLs in the module loader
  setEnv("LUME_LIVE_RELOAD", "true");

  // Show draft pages in development mode (if not set already)
  const showDrafts = env<boolean | undefined>("LUME_DRAFTS");
  if (showDrafts === undefined) {
    setEnv("LUME_DRAFTS", "true");
  }

  // Setup LumeCMS
  {
    site.use(lumeCMS({
      cms,
      protectSite: true,
    }));
  }

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
    let built = false;
    const buildPromise = site.build().catch((error) => {
      log.error("Error during the site build:", error);
    }).finally(() => {
      built = true;
    });
    server.useFirst(async (request, next) => {
      if (!built) {
        if (request.headers.get("X-Lume-Reload-Check") !== "true") {
          return createWaitResponse(request.url);
        }
        await buildPromise;
      }
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
      <title>Wait a moment</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
      body {
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
          await fetch("${url}", { method: "HEAD", cache: "no-store", headers: { "X-Lume-Reload-Check": "true" } });
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
await build();
