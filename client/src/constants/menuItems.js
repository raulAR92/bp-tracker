import React from "react";
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import TimelineIcon from "@material-ui/icons/Timeline";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import SettingsIcon from "@material-ui/icons/Settings";

export const ROUTES = {
  home: "/",
  graph: "/graph",
  registers: "/registers",
  addNew: "/add/new",
  tips: "/tips",
};

const buttons = [
  {
    show: true,
    label: "Inicio",
    title: "Inicio",
    value: "/",
    icon: <HomeIcon />,
  },
  {
    show: true,
    label: "Gráfico",
    title: "Gráfico",
    value: "/graph",
    icon: <TimelineIcon />,
  },
  {
    show: true,
    label: "",
    title: "Nuevo Registro",
    value: "/add/new",
    icon: null,
  },
  {
    show: true,
    label: "Registros",
    title: "Registros",
    value: "/registers",
    icon: <FormatListBulletedIcon />,
  },
  {
    show: true,
    label: "Tips",
    title: "Tips",
    value: "/tips",
    icon: <EmojiObjectsOutlinedIcon />,
  },
  {
    show: false,
    label: "No encontrado",
    title: "No encontrado",
    value: "/404",
    icon: <EmojiObjectsOutlinedIcon />,
  },
];

export const buttonList = buttons;

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
        route: "/",
        icon: <HomeIcon />,
      },
      {
        text: "Grafica",
        route: "/graph",
        icon: <TimelineIcon />,
      },
      {
        text: "Registros",
        route: "/registers",
        icon: <FormatListBulletedIcon />,
      },
      {
        text: "Tips",
        route: "/tips",
        icon: <EmojiObjectsOutlinedIcon />,
      },
    ],
    addDivider: true,
  },
  {
    listElements: [
      {
        text: "Configuración",
        route: "/settings",
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
