import React from "react";
import TopNav from "./topNav";

export default {
  title: "Top Nav",
  component: TopNav,
};

export const topNav = () => <TopNav>Graficas</TopNav>;

topNav.story = {
  name: "top nav",
};
