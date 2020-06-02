import React from "react";
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import TimelineIcon from "@material-ui/icons/Timeline";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import SettingsIcon from "@material-ui/icons/Settings";

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

export const options = {
  buttonOptions: {
    state: true,
    icon: <AddIcon />,
  },
  menuOptions: {
    buttons,
    value: "home",
  },
};

export const lists = [
  {
    listElements: [
      {
        text: "Inicio",
        route: "home",
        icon: <HomeIcon />,
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

export const user = {
  name: "Raul Ar",
  profilePicture:
    "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",
};
