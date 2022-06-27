import { generalReducer } from "./../store/reducer/reducer";
import { getGraphData } from "./../store/actionCreators/actionCreators";
import React, { useRef, useState } from "react";
import * as d3 from "d3";
import { SimulationLinkDatum, SimulationNodeDatum } from "d3";
import { useAppDispatch, useAppSelector } from "./useAppHooks";
import {
  auxGraphData,
  INodesGraphProps,
} from "../components/NodesGraph/NodesGraph.interfaces";
import store from "../store/store";

export const useD3 = ({ idDevice }: INodesGraphProps) => {
  const dispatch = useAppDispatch();
  const [chartIsRendered, setChartIsRendered] = useState<boolean>(false);
  const [renderCount, setRenderCount] = useState<number>(0);
  const [noEnough, setNoEnough] = useState<boolean>(false);
  const { graphData = { nodes: [], links: [] }, isLoading = false } =
    useAppSelector((store) => store.generalReducer!);

  const renderChart = (graphData: auxGraphData) => {
    var graphDataExtensible: auxGraphData = {
      nodes: graphData.nodes.map((node) => ({ ...node })),
      links: graphData.links.map((link) => ({ ...link })),
    };

    var width = 700;
    var height = 700;

    var margin = {
      top: 50,
      bottom: 50,
      left: 50,
      right: 50,
    };

    // create an svg to draw in
    var svg = d3
      .select(".canva")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + margin.top + "," + margin.left + ")");

    width = width - margin.left - margin.right;
    height = height - margin.top - margin.bottom;

    var linkWidthScale = d3.scaleLinear().range([1, 15]);
    var linkStrengthScale = d3.scaleLinear().range([0, 0.45]);

    var simulation = d3
      .forceSimulation()
      // pull nodes together based on the links between them
      .force(
        "link",
        d3
          .forceLink()
          .id(function (d) {
            // @ts-ignore
            return d.id;
          })
          .strength(function (d: SimulationLinkDatum<SimulationNodeDatum>) {
            // @ts-ignore
            return linkStrengthScale(d.value);
          })
      )
      // push nodes apart to space them out
      .force("charge", d3.forceManyBody().strength(-200))
      // add some collision detection so they don't overlap
      .force("collide", d3.forceCollide().radius(30))
      // and draw them around the centre of the space
      .force("center", d3.forceCenter(width / 2, height / 2));

    // load the graph
    // set the nodes
    var nodes = graphDataExtensible.nodes;
    // links between nodes
    var links = graphDataExtensible.links;

    linkWidthScale.domain(
      // @ts-ignore
      d3.extent(links, function (d) {
        return d.value;
      })
    );
    linkStrengthScale.domain(
      // @ts-ignore
      d3.extent(links, function (d) {
        return d.value;
      })
    );

    // add the curved links to our graphic
    var link = svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("stroke", function (d) {
        return "#dddddd";
      })
      .attr("stroke-width", function (d) {
        return linkWidthScale(d.value);
      })
      .attr("fill", () => "none");

    // add the nodes to the graphic
    var node = svg.selectAll(".node").data(nodes).enter().append("g");

    // a circle to represent the node
    node
      .append("circle")
      .attr("class", "node")
      .attr("r", 8)
      .attr("fill", function (d) {
        return d.colour;
      })
      .on("mouseover", mouseOver(0.1))
      .on("mouseout", mouseOut);

    // hover text for the node
    node.append("title").text(function (d) {
      // @ts-ignore
      return d.mail;
    });

    // add a label to each node
    node
      .append("text")
      .attr("dx", 12)
      .attr("dy", ".35em")
      .text(function (d) {
        return d.name;
      })
      .style("stroke", "black")
      .style("stroke-width", 0.5)
      .style("fill", function (d) {
        return d.colour;
      });

    // add the nodes to the simulation and
    // tell it what to do on each tick
    // @ts-ignore
    simulation.nodes(nodes).on("tick", ticked);

    // add the links to the simulation
    // @ts-ignore
    simulation.force("link").links(links);

    // on each tick, update node and link positions
    function ticked() {
      link.attr("d", positionLink);
      node.attr("transform", positionNode);
    }

    // links are drawn as curved paths between nodes,
    // through the intermediate nodes
    // @ts-ignore
    function positionLink(d: any) {
      var offset = 30;

      var midpoint_x = (d.source.x + d.target.x) / 2;
      var midpoint_y = (d.source.y + d.target.y) / 2;

      var dx = d.target.x - d.source.x;
      var dy = d.target.y - d.source.y;

      var normalise = Math.sqrt(dx * dx + dy * dy);

      /*
       *  -> This is to get curves on links
       *
       * */
      var offSetX = midpoint_x + offset * (dy / normalise);
      var offSetY = midpoint_y - offset * (dx / normalise);

      //var offSetX = midpoint_x;
      //var offSetY = midpoint_y;

      var linkLine =
        "M" +
        d.source.x +
        "," +
        d.source.y +
        "S" +
        offSetX +
        "," +
        offSetY +
        " " +
        d.target.x +
        "," +
        d.target.y;

      return linkLine;
    }

    // move the node based on forces calculations
    function positionNode(d: any) {
      // keep the node within the boundaries of the svg
      if (d.x < 0) {
        d.x = 0;
      }
      if (d.y < 0) {
        d.y = 0;
      }
      if (d.x > width) {
        d.x = width;
      }
      if (d.y > height) {
        d.y = height;
      }
      return "translate(" + d.x + "," + d.y + ")";
    }

    // build a dictionary of nodes that are linked
    var linkedByIndex = {};

    links.forEach(function (d) {
      // @ts-ignore
      linkedByIndex[d.source.index + "," + d.target.index] = 1;
    });

    // check the dictionary to see if nodes are linked
    function isConnected(a: any, b: any) {
      return (
        // @ts-ignore
        linkedByIndex[a.index + "," + b.index] ||
        // @ts-ignore
        linkedByIndex[b.index + "," + a.index] ||
        a.index == b.index
      );
    }

    // fade nodes on hover
    function mouseOver(opacity: any) {
      return function (mouseEvent: any) {
        const d = mouseEvent.target.__data__;

        // check all other nodes to see if they're connected
        // to this one. if so, keep the opacity at 1, otherwise
        // fade
        node.style("stroke-opacity", function (o) {
          return isConnected(d, o) ? 1 : opacity;
        });
        node.style("fill-opacity", function (o) {
          return isConnected(d, o) ? 1 : opacity;
        });
        // also style link accordingly
        link.style("stroke-opacity", function (o) {
          return o.source === d || o.target === d ? 1 : opacity;
        });
        link.style("stroke", function (o) {
          // @ts-ignore
          return o.source === d || o.target === d ? o.source.colour : "#ddd";
        });
      };
    }

    function mouseOut() {
      node.style("stroke-opacity", 1);
      node.style("fill-opacity", 1);
      link.style("stroke-opacity", 1);
      link.style("stroke", "#ddd");
    }
  };

  React.useEffect(() => {
    console.log("Render count is: ", renderCount);
    if (graphData.links.length === 0 && renderCount > 0) {
      setNoEnough(true);
      return () => {};
    }

    if (chartIsRendered === false) {
      dispatch(getGraphData(idDevice));
      setChartIsRendered(true);
      setRenderCount((prevVal) => prevVal + 1);
      return () => {};
    }

    if (chartIsRendered && graphData.links.length !== 0 && renderCount < 2) {
      renderChart(graphData);
      setRenderCount((prevVal) => prevVal + 1);
      return () => {};
    }
  }, [graphData]);

  return { chartIsRendered, isLoading, noEnough };
};
