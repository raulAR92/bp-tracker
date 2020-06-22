import React from "react";
/*import Menu from "./menu";
import HomeIcon from "@material-ui/icons/Home";
import TimelineIcon from "@material-ui/icons/Timeline";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import SettingsIcon from "@material-ui/icons/Settings";*/
import MenuMounted from "./menuMounted";

export default {
  title: "Menu",
  component: MenuMounted,
};
/*
const lists = [
  {
    listElements: [
      {
        text: "Inicio",
        route: "home",
        icon: <HomeIcon></HomeIcon>,
      },
      {
        text: "Grafica",
        route: "graph",
        icon: <TimelineIcon />,
      },
      {
        text: "Registros",
        route: "registers",
        icon: <FormatListBulletedIcon />,
      },
      {
        text: "Tips",
        route: "Tips",
        icon: <EmojiObjectsOutlinedIcon />,
      },
    ],
    addDivider: true,
  },
  {
    listElements: [
      {
        text: "Configuración",
        route: "settings",
        icon: <SettingsIcon />,
      },
    ],
    addDivider: false,
  },
];

const user = {
  name: "Raul Ar",
  profilePicture:
    "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",
};*/

export const blue = () => {
  return <MenuMounted></MenuMounted>;
};

blue.story = {
  name: "Left",
};
