type Node = {
  children?: Node[];
  type: string;
  value?: string;
  tagName: string;
  properties: { [key: string]: string | string[] };
  data?: { hProperties?: { [key: string]: string } };
  depth?: number;
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
function getText(node: Node): string {
  if (node.type === "text") return node.value || "";
  if (node.children) return node.children.map(getText).join("");
  return "";
}

// md->md ast transformer
const remarkTransform = () => {
  return (tree: Node) => {
    visit(tree, "heading", (node) => {
      // # -> h2, ## -> h3, etc.
      node.depth!++;

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
const rehypeTransform = () => {
  return (tree: Node) => {
    visit(tree, "element", (node: Node) => {
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

type Plugin = (options?: unknown) => (tree: Node) => void;
export const remarkPlugins: Plugin[] = [remarkTransform];
export const rehypePlugins: Plugin[] = [rehypeTransform];
