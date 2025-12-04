// copied from https://github.com/lumeland/lume/blob/main/plugins/vento.ts
// changed `content` to ``
import { SourceError } from "lume/deps/vento.ts";
import type { Environment, Token } from "lume/deps/vento.ts";

/** Vento tag to render a component */
const COMP_TAG = /^comp\s+([\w.]+)(?:\s+([\s\S]+[^/]))?(?:\s+(\/))?$/;

export default function compTag(
  env: Environment,
  token: Token,
  output: string,
  tokens: Token[],
): string | undefined {
  const [, code, position] = token;

  // Components are always async
  // so convert automatically {{ comp.whatever }} to {{ await comp.whatever }}
  if (code.startsWith("comp.")) {
    const value = `await ${code}`;
    const val = env.compileFilters(tokens, value, env.options.autoescape);
    return `${output} += ${val};`;
  }

  if (!code.startsWith("comp ")) {
    return;
  }

  const match = code?.match(COMP_TAG);
  if (!match) {
    throw new SourceError("Invalid comp tag", position);
  }

  const [_, comp, args, closed] = match;

  if (closed) {
    return `${output} += await comp.${comp}(${args || ""});`;
  }

  const compiledFilters = env.compileFilters(tokens, "__slots.children");
  const { dataVarname } = env.options;
  const ret = `${output} += (await (async () => {
    const __slots = { children: "" };
    ${env.compileTokens(tokens, "__slots.children", "/comp").join("\n")}
    __slots.children = __env.utils.safeString(${compiledFilters});

    return await comp.${comp}({
      ...${dataVarname},
      ...__slots,
      ...${args || "{}"}
    });
  })());`;
  return ret;
}
