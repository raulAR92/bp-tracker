import React from "react";
import Registers from "./registers";

export default {
  title: "Pages/Registers",
  component: Registers,
};

export const pageRegisters = () => <Registers></Registers>;

pageRegisters.story = {
  name: "Registers",
};
