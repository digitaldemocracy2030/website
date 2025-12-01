import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import favicon from "lume/plugins/favicon.ts";
import feed from "lume/plugins/feed.ts";
import inline from "lume/plugins/inline.ts";
import jsx from "lume/plugins/jsx.ts";
import jsonLd from "lume/plugins/json_ld.ts";
import metas from "lume/plugins/metas.ts";
import nav from "lume/plugins/nav.ts";
import pagefind from "lume/plugins/pagefind.ts";
import picture from "lume/plugins/picture.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import sitemap from "lume/plugins/sitemap.ts";
import source_maps from "lume/plugins/source_maps.ts";
import transformImages from "lume/plugins/transform_images.ts";
import vento from "lume/plugins/vento.ts";

const site = lume({
  prettyUrls: false,
  src: "src",
}, {
  markdown: { options: { breaks: true }, plugins: [] },
});

site.use(date());
site.use(favicon());
site.use(jsonLd());
site.use(jsx());
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
site.use(tailwindcss());
site.add("style/main.css");
site.use(source_maps());
site.use(picture());
site.use(transformImages());
site.add("/news/files");
site.use(inline());
site.use(sitemap({
  query: "noindex!=true",
}));
site.use(vento());

export default site;
