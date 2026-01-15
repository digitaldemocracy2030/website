import lume from "lume/mod.ts";
import { dd2030Config } from "./_dd2030config.ts";
const site = lume({
  prettyUrls: false,
  src: "src",
});

site.use(dd2030Config);

export default site;
