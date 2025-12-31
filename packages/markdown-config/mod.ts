type Node = {
  children?: Node[];
  type: string;
  value?: string;
  tagName: string;
  properties: { [key: string]: string | string[] };
  data?: { hProperties?: { [key: string]: string } };
};

function visit(root: Node, type: string, visitor: (node: Node) => void) {
  if (root.type === type) {
    visitor(root);
  }
  if (root.children) {
    for (const child of root.children) {
      visit(child, type, visitor);
    }
  }
}

const remarkCustomHeaderId = () => {
  return (tree: Node) => {
    visit(tree, "heading", (node) => {
      const lastChild = node.children?.[node.children.length - 1];
      if (lastChild && lastChild.type === "text" && lastChild.value) {
        const match = lastChild.value.match(/\s*\{#([\w-]+)\}\s*$/);
        if (match) {
          const id = match[1];
          lastChild.value = lastChild.value.substring(0, match.index);
          if (!node.data) node.data = {};
          if (!node.data.hProperties) node.data.hProperties = {};
          node.data.hProperties.id = id;
        }
      }
    });
  };
};

const rehypeUnified = () => {
  return (tree: Node) => {
    visit(tree, "element", (node: Node) => {
      // Handle Headings
      if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(node.tagName)) {
        let id = node.properties.id;
        if (!id) {
          const text = getText(node);
          id = encodeURIComponent(text);
          node.properties.id = id;
        }

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

function getText(node: Node): string {
  if (node.type === "text") return node.value || "";
  if (node.children) return node.children.map(getText).join("");
  return "";
}

type Plugin = (options?: unknown) => (tree: Node) => void;
export const remarkPlugins: Plugin[] = [remarkCustomHeaderId];
export const rehypePlugins: Plugin[] = [rehypeUnified];
