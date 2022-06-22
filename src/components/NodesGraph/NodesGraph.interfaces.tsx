export interface INodesGraphProps {
  idDevice: string;
}

export interface ILinkToGraph {
  value: number;
  source: string;
  target: string;
}

export interface INode {
  mail: string;
  name: string;
  id: string;
  colour: string;
}

export interface IGraphData {
  nodes: INode[];
  links: ILinkToGraph[];
  [k: string]: any;
}

export interface auxGraphData {
  nodes: {
    mail: string;
    name: string;
    id: string;
    colour: string;
  }[];
  links: {
    value: number;
    source: string;
    target: string;
  }[];
}
