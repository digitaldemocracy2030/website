import type { Element, JSXElement } from "hastx/jsx-runtime";

export type { Element, JSXElement };

export interface HTMLElement extends Element {
  type: "element";
  tagName: string;
  children: HTMLElement[];
}

export interface Node {
  type: string;
  children?: Node[];
  value?: string;
}
export interface ParentNode extends Node {
  children: Node[];
}
export interface MdNode extends Node {
  depth?: number;
  children?: (MdNode | MdLinkNode)[];
  data?: { hProperties?: { [key: string]: string } };
}
export interface MdLinkNode extends MdNode {
  type: "link";
  url: string;
}
