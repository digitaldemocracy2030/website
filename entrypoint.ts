// deno deploy entrypoint 用
// dest を切り替えて別の lume Site インスタンスを作り、そこで cms を立ち上げる。
// topics と admin/ 以下を cms に任せ、その他のパスは _site から静的ファイルを返す。

import { dd2030Config } from "./_dd2030config.ts";
import cms from "./_cms.ts";

import lume from "lume/mod.ts";
import { log } from "lume/core/utils/log.ts";
import { localIp } from "lume/core/utils/net.ts";
import { setEnv } from "lume/core/utils/env.ts";
import { SiteWatcher } from "lume/core/watcher.ts";
import noCache from "lume/middlewares/no_cache.ts";
import noCors from "lume/middlewares/no_cors.ts";
import reload from "lume/middlewares/reload.ts";
import lumeCMS from "lume/plugins/lume_cms.ts";
import { serveDir } from "@std/http/file-server";

console.log(
  `Starting Lume CMS entrypoint (pid: ${Deno.pid}, ppid: ${Deno.ppid})`,
);

export default {
  fetch(req, info) {
    const path = new URL(req.url).pathname;
    if (
      path.startsWith("/admin") || path.startsWith("/topics/") ||
      req.headers.get("upgrade") === "websocket"
    ) {
      return handleCmsRequest(req, info);
      // return server.handle(req, info);
    }
    return serveDir(req, {
      fsRoot: "./_site",
    });
  },
} satisfies Deno.ServeDefaultExport;

setEnv("LUME_LIVE_RELOAD", "true");
setEnv("LUME_DRAFTS", "true");
const site = lume({
  prettyUrls: false,
  src: "src",
  dest: "_cms",
});
site.use(dd2030Config);
site.ignore((path) => {
  if (path.endsWith(".css")) return true;
  return !path.startsWith("/topics");
});
site.use(lumeCMS({
  cms,
  protectSite: true,
}));
const server = site.getServer();
let built = false;
let buildPromise: Promise<void> | null = null;
async function handleCmsRequest(req: Request, info: Deno.ServeHandlerInfo) {
  if (!buildPromise) {
    buildPromise = site.build().catch((error) => {
      log.error("Error during the site build:", error);
    }).finally(() => {
      built = true;
    });
  }
  if (!built) {
    if (req.headers.get("X-Lume-Reload-Check") !== "true") {
      return createWaitResponse(req.url);
    }
    await buildPromise;
  }
  const response = await server.handle(req, info);
  // Reload if the response header tells us to
  if (response.headers.get("X-Lume-CMS") === "reload") {
    log.info("Reloading the site...");
    const url = response.headers.get("Location") || req.url;
    built = false;
    buildPromise = site.build().catch((error) => {
      log.error("Error during the site build:", error);
    }).finally(() => {
      built = true;
    });
    return createWaitResponse(url);
  }

  return response;
}

server.addEventListener("start", () => {
  const ipAddr = localIp();
  const { port, hostname } = site.options.server;

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
  site.dispatchEvent({ type: "afterStartServer" });
});
// Add the reload middleware

server.useFirst(
  reload({
    watcher: new SiteWatcher(site),
    basepath: site.options.location.pathname,
  }),
  noCache(),
  noCors(),
);
server.dispatchEvent({ type: "start" });

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
        } catch(e) {
          if (e instanceof TypeError) {
            document.location = "${url}";
            break;
          }
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
