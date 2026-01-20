import { dd2030Config } from "./_dd2030config.ts";
import pagefind from "lume/plugins/pagefind.ts";
import lume from "lume/mod.ts";

const site = lume({
  prettyUrls: false,
  src: "src",
});

site.use(dd2030Config);
site.use(pagefind());

export default site;
