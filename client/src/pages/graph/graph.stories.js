import React from "react";
import Graph from "./graph";

export default {
  title: "Pages/Graph",
  component: Graph,
};

export const topNav = () => <Graph></Graph>;

topNav.story = {
  name: "Graphs",
};
