import { rehypeTransform, remarkTransform } from "./mod.tsx";
import {
  // rehypeRaw,
  // rehypeSanitize,
  rehypeStringify,
  // remarkGfm,
  remarkParse,
  remarkRehype,
  unified,
} from "lume/deps/remark.ts";

import { assertStringIncludes } from "@std/assert";

function buildRemark() {
  const plugins = [];
  plugins.push(remarkParse);
  plugins.push(remarkTransform);
  plugins.push(remarkRehype);
  plugins.push(rehypeTransform);
  plugins.push(rehypeStringify);

  const engine = unified.unified();
  engine.use(plugins);
  return engine;
}
const remarkEngine = buildRemark();
function render(md: string): string {
  return remarkEngine.processSync({ value: md }).toString();
}

Deno.test("remarkTransform adds id and anchor to headings", () => {
  const md = `
# タイトル1
`;
  const html = render(md);
  const id = encodeURIComponent("タイトル1");
  assertStringIncludes(
    html,
    `<h2 id="${id}">`,
  );
  assertStringIncludes(
    html,
    `<a href="#${id}" class="header-anchor"`,
  );
});
Deno.test("remarkTransform generates TOC", () => {
  const md = `
# TOC
# セクション1
## サブセクション1.1
## サブセクション1.2
# セクション2
`;
  const html = render(md);
  assertStringIncludes(
    html,
    `<a href="#%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B31">セクション1</a>`,
    "Failed to include section 1 in TOC",
  );
  assertStringIncludes(
    html,
    `<a href="#%E3%82%B5%E3%83%96%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B31.1">サブセクション1.1</a>`,
    "Failed to include subsection 1.1 in TOC",
  );
  assertStringIncludes(
    html,
    `<a href="#%E3%82%B5%E3%83%96%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B31.2">サブセクション1.2</a>`,
    "Failed to include subsection 1.2 in TOC",
  );
  assertStringIncludes(
    html,
    `<a href="#%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B32">セクション2</a>`,
    "Failed to include section 2 in TOC",
  );
});
