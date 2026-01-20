import type { Element, JSXElement } from "./types.ts";

export type Toc = {
  depth: number;
  text: string;
  id: string;
};

const buildNestedList = (
  items: Toc[],
  startIndex: number,
  currentDepth: number,
): [JSXElement[], number] => {
  const children: JSXElement[] = [];
  let i = startIndex;

  while (i < items.length) {
    const item = items[i];

    if (item.depth < currentDepth) {
      // 深さが浅くなったら、上のレベルに戻る
      break;
    } else if (item.depth === currentDepth) {
      // 同じ深さの項目を追加
      const [nestedChildren, nextIndex] = buildNestedList(
        items,
        i + 1,
        currentDepth + 1,
      );
      children.push(
        <li>
          <a href={`#${item.id}`}>{item.text}</a>
          {nestedChildren.length > 0 && <ul>{nestedChildren}</ul>}
        </li>,
      );
      i = nextIndex;
    } else {
      // item.depth > currentDepth の場合はスキップ（次のイテレーションで処理される）
      break;
    }
  }

  return [children, i];
};
function collapse(subj: string, children: JSXElement): Element {
  return (
    <details class="collapse collapse-arrow bg-base-100 border-base-300 border">
      <summary class="collapse-title font-semibold">{subj}</summary>
      <div class="collapse-content text-sm">
        {children}
      </div>
    </details>
  ) as Element;
}
export function generateToc(toc: Toc[]): Element {
  const minDepth = Math.min(...toc.map((item) => item.depth));
  const [children] = buildNestedList(toc, 0, minDepth);

  return collapse("目次", <ul class="toc">{children}</ul>);
}
