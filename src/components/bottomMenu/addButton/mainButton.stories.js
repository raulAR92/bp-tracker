import React from "react";
import MainButton from "./mainButton";
import AddIcon from "@material-ui/icons/Add";

export default {
  title: "Main Button",
  component: MainButton,
};

export const addEnable = () => (
  <MainButton icon={<AddIcon />} state={true}></MainButton>
);
addEnable.story = {
  name: "add button enabled",
};

export const addDisable = () => (
  <MainButton icon={<AddIcon />} state={false}></MainButton>
);
addDisable.story = {
  name: "add button disabled",
};
