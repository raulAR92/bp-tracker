import React from "react";
import BottomNav from "./bottomNav";
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import TimelineIcon from "@material-ui/icons/Timeline";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";

export default {
  title: "Bottom Nav",
  component: BottomNav,
};

const buttons = [
  {
    label: "Inicio",
    value: "home",
    icon: <HomeIcon />,
  },
  {
    label: "Gráfico",
    value: "graph",
    icon: <TimelineIcon />,
  },
  {
    label: "",
    value: "add",
    icon: null,
  },
  {
    label: "Registros",
    value: "registers",
    icon: <FormatListBulletedIcon />,
  },
  {
    label: "Tips",
    value: "tips",
    icon: <EmojiObjectsOutlinedIcon />,
  },
];

const options = {
  buttonOptions: {
    state: true,
    icon: <AddIcon />,
  },
  menuOptions: {
    buttons,
    value: "home",
  },
};

export const addEnable = () => <BottomNav {...options}></BottomNav>;
addEnable.story = {
  name: "enabled",
};

const options2 = {
  buttonOptions: {
    state: false,
    icon: <AddIcon />,
  },
  menuOptions: {
    buttons,
    value: "home",
  },
};

export const addDisabled = () => <BottomNav {...options2}></BottomNav>;
addDisabled.story = {
  name: "disabled",
};
