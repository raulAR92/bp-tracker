import React from "react";
import Indicator from "./indicator";
import pt from "../../constants/parameterThemes";

export default {
  title: "Indicator",
  component: Indicator,
};
console.log(pt);

export const blue = () => <Indicator theme={pt[0]}></Indicator>;
blue.story = {
  name: pt[0],
};

export const green = () => <Indicator theme={pt[1]}></Indicator>;
green.story = {
  name: pt[1],
};

export const yellow = () => <Indicator theme={pt[2]}></Indicator>;
yellow.story = {
  name: pt[2],
};

export const orange = () => <Indicator theme={pt[3]}></Indicator>;
orange.story = {
  name: pt[3],
};

export const red = () => <Indicator theme={pt[4]}></Indicator>;
red.story = {
  name: pt[4],
};
