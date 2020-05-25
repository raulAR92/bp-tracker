import React from "react";
import Parameter from "./parameter";

export default {
  title: "Parameter",
  component: Parameter,
};

export const blue = () => (
  <Parameter value="120" type="Systonic" theme="blue"></Parameter>
);

blue.story = {
  name: "blue",
};

export const green = () => (
  <Parameter value="120" type="Systonic" theme="green"></Parameter>
);

green.story = {
  name: "green",
};

export const yellow = () => (
  <Parameter value="120" type="Systonic" theme="yellow"></Parameter>
);

yellow.story = {
  name: "yellow",
};

export const orange = () => (
  <Parameter value="120" type="Systonic" theme="orange"></Parameter>
);

orange.story = {
  name: "orange",
};

export const red = () => (
  <Parameter value="120" type="Systonic" theme="red"></Parameter>
);

red.story = {
  name: "red",
};

export const dangerRed = () => (
  <Parameter value="120" type="Systonic" theme="danger_red"></Parameter>
);

dangerRed.story = {
  name: "danger_red",
};

export const none = () => (
  <Parameter value="120" type="Systonic" theme="none"></Parameter>
);

none.story = {
  name: "none",
};
