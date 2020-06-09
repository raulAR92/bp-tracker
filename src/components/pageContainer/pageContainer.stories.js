import React from "react";
import PageContainer from "./pageContainer";
import TopNav from "../../components/topNav/topNav";
import Banner from "../../components/banner_v/banner2";

export default {
  title: "Page Container",
  component: PageContainer,
};

const topNav = <TopNav>Gráfica</TopNav>;

export const empty = () => <PageContainer></PageContainer>;

empty.story = {
  name: "Empty Page",
};

export const home = () => <PageContainer showBanner={true}>home</PageContainer>;

home.story = {
  name: "home",
};

export const pageGraph = () => (
  <PageContainer title="Graph">pageGraph</PageContainer>
);

pageGraph.story = {
  name: "Graph",
};
