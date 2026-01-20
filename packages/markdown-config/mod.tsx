import { generateToc, type Toc } from "./toc.tsx";
import type { Element, HTMLElement, MdNode, Node } from "./types.ts";

function visit<T extends Node>(
  node: T,
  visitor: (node: T, parent?: T) => void,
  parent?: T,
) {
  visitor(node, parent);
  if (node.children) {
    for (const child of node.children) {
      visit(child as T, visitor, node);
    }
  }
}
function getText(node: Node): string {
  if (node.type === "text") return node.value || "";
  if (node.children) return node.children.map(getText).join("");
  return "";
}

// md->md ast transformer
export const remarkTransform = () => {
  return (root: MdNode) => {
    visit(root, (node) => {
      if (node.type !== "heading") return;
      if (typeof node.depth === "number") {
        // # -> h2, ## -> h3, etc.
        node.depth = Math.min(node.depth + 1, 6);
      }
    });
  };
};

// html -> html ast transformer
export const rehypeTransform = () => {
  return (root: HTMLElement) => {
    const toc: Toc[] = [];
    let tocNode: { node: Element; depth: number } | undefined;

    visit(root, (node, parent) => {
      if (!parent || !parent.children || node.type !== "element") {
        return;
      }
      const text = getText(node);
      // Handle Headings
      if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(node.tagName)) {
        let id = node.properties?.id as string || undefined;
        if (!id) {
          id = encodeURIComponent(text);
          node.properties ||= {};
          node.properties.id = id;
        }
        const content = node.children || [];
        const link = (
          <a href={"#" + id} class="header-anchor">{content}</a>
        ) as HTMLElement;
        node.children = [link];

        // Collect TOC data (h2-h6, excluding h1)
        if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(node.tagName!)) {
          const depth = parseInt(node.tagName!.substring(1));
          if (text === "TOC") {
            tocNode = { node, depth };
          } else if (tocNode && depth < tocNode.depth) {
            insertToc(parent, tocNode.node, toc);
            tocNode = undefined;
            toc.splice(0, toc.length);
          } else {
            toc.push({ depth, text, id });
          }
        }
      }

      // Handle Links
      if (
        node.tagName === "a" && node.properties &&
        typeof node.properties.href === "string"
      ) {
        const href = node.properties.href;
        if (href.startsWith("http://") || href.startsWith("https://")) {
          node.properties.target = "_blank";
          node.properties.rel = ["noopener", "noreferrer"];
        }
      }
    });
    if (tocNode) {
      insertToc(root, tocNode.node, toc);
    }
  };
};

function insertToc(parent: Element, tocPlaceholder: Element, toc: Toc[]) {
  const tocElement = generateToc(toc);
  const index = parent.children.indexOf(tocPlaceholder);
  if (index !== -1) {
    parent.children.splice(index, 1, tocElement);
  }
}
