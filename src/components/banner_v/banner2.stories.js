import React from "react";
import Banner from "./banner2";
import MenuIcon from "@material-ui/icons/Menu";

export default {
  title: "Banner 2",
  component: Banner,
};

const menuButton = {
  icon: <MenuIcon></MenuIcon>,
  handleClick: () => {},
};

export const banner = () => (
  <Banner message="Cómo te sientes hoy?" menuButton={menuButton}></Banner>
);

banner.story = {
  name: "banner 2",
};
