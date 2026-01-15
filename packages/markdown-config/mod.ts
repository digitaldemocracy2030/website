interface Node {
  type: string;
  children?: Node[];
  value?: string;
  data?: { hProperties?: { [key: string]: string } };
}
interface MdNode extends Node {
  depth?: number;
}
interface HtmlNode extends Node {
  tagName: string;
  properties: { [key: string]: string | string[] };
}

function visit<T extends Node>(
  root: T,
  type: string,
  visitor: (node: T) => void,
) {
  if (root.type === type) {
    visitor(root);
  }
  if (root.children) {
    for (const child of root.children) {
      visit(child as T, type, visitor);
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
  return (tree: MdNode) => {
    visit(tree, "heading", (node) => {
      // # -> h2, ## -> h3, etc.
      if (typeof node.depth === "number") {
        node.depth = Math.min(node.depth + 1, 6);
      }

      // Generate ID from text content
      const text = getText(node);
      const id = encodeURIComponent(text);
      node.data ||= {};
      node.data.hProperties ||= {};
      node.data.hProperties.id = id;
    });
  };
};

// html -> html ast transformer
export const rehypeTransform = () => {
  return (tree: HtmlNode) => {
    visit(tree, "element", (node) => {
      // Handle Headings
      if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(node.tagName)) {
        const id = node.properties.id;
        const content = node.children || [];
        const link = {
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + id,
            class: "header-anchor",
          },
          children: content,
        };
        node.children = [link];
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
  };
};
