import React from "react";
import Add from "./add";

export default {
  title: "Pages/Add",
  component: Add,
};

export const newRegister = () => {
  return <Add></Add>;
};

newRegister.story = {
  name: "Nuevo",
};

export const addToSet = () => {
  return <Add></Add>;
};

addToSet.story = {
  name: "Add to set",
};
