import { SankeyGraph } from 'd3-sankey';
import * as d3Sankey from 'd3-sankey';
import { select, Selection } from 'd3-selection';
import { Link } from 'd3-shape';

export interface Node {
  id: number;
  name: string;
  type: string;
}

export interface CustomLink {
  source: number;
  target: number;
  value: number;
}
export interface ISankeyChartComponent {
    title?: string;
    //data: SankeyGraph<{},{}>;
    //data: SankeyGraph<[{}],[{}]>;
    data: SankeyGraph<Node[],CustomLink[]>;
    // enumColors?: any;
    width?: number;
    height?: number;
    // showTooltip?: boolean;
    // showLegend?: boolean;
    // margin?: {
    //     top?: number;
    //     right?: number;
    //     bottom?: number;
    //     left?: number;
    //   };
}

export interface INodeSankey {
    name: string;
    x0?: number | undefined;
    x1?: number | undefined;
    y0?: number | undefined;
    y1?: number | undefined;
    color: string;
}

export interface ILinkSankey {
  // link: {};
  // link: {
  //   index: number,
  //   source: {id: number, name: string, type: string, index: number, sourceLinks: any }
  //   target: {id: number, name: string, type: string, index: number, sourceLinks: any }
  //   value: number;
  //   width: number;
  //   y0: number;
  //   y1: number;
  // };
  link: any;
  color: string;
  mouseOverLink: any,
  mouseMoveLink: any,
  mouseOutLink: any,
}
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/d3-sankey/d3-sankey-tests.ts
