//BOTTOM TO TOP APPROACH

export interface Metadata {
  title: string;
}

export interface Style2 {
  "background-color": string;
  padding: string;
}

export interface Style {
  "background-color": string;
}

export interface Content2 {
  kind: string;
  body: string;
}

export interface Object {
  kind: string;
  content: Content2;
  style: Style;
}

export interface Content {
  kind: string;
  elements: Object[];
}

export interface Elements {
  kind: string;
  content: Content;
  style: Style2;
}

export interface Spec {
  elements: Elements[];
  metadata: Metadata;
}

export interface Root {
  spec: Spec;
}
