import React from "react";
import BottomMenu from "./bottomMenu";
import HomeIcon from "@material-ui/icons/Home";
import TimelineIcon from "@material-ui/icons/Timeline";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";

export default {
  title: "bottom menu",
  component: BottomMenu,
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

export const primary = () => (
  <BottomMenu buttons={buttons} value="home"></BottomMenu>
);
primary.story = {
  name: "primary",
};
