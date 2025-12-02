import lume from "lume/mod.ts";
// import checkUrls from "lume/plugins/check_urls.ts";
import date from "lume/plugins/date.ts";
import favicon from "lume/plugins/favicon.ts";
import feed from "lume/plugins/feed.ts";
import inline from "lume/plugins/inline.ts";
import jsonLd from "lume/plugins/json_ld.ts";
import jsx from "lume/plugins/jsx.ts";
import metas from "lume/plugins/metas.ts";
import nav from "lume/plugins/nav.ts";
import pagefind from "lume/plugins/pagefind.ts";
import picture from "lume/plugins/picture.ts";
import sitemap from "lume/plugins/sitemap.ts";
import source_maps from "lume/plugins/source_maps.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import vento from "lume/plugins/vento.ts";
import compTag from "./lume-ext/vento_comp.ts";

const site = lume({
  prettyUrls: false,
  src: "src",
}, {
  markdown: { options: { breaks: false }, plugins: [] },
});

// site.use(checkUrls({ strict: true }));
site.use(date());
site.use(favicon({ input: "favicon.png" }));
site.use(jsonLd());
site.use(jsx());
site.use(tailwindcss());
site.use(source_maps());
site.use(picture());
site.use(inline());
site.use(feed({
  output: ["feed.rss", "feed.json"],
  query: "noindex!=true",
  info: {
    title: "=metas.site",
    description: "=description",
  },
}));
site.use(metas());
site.use(nav());
site.use(pagefind());
site.add("style/main.css");
site.use(sitemap({
  query: "noindex!=true",
}));
site.use(vento());
site.hooks.vento((v: { tags: unknown[] }) => v.tags.unshift(compTag));
site.add([".jpg", ".png", ".webp"]);

export default site;
