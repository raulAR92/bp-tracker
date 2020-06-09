import React, { useState } from "react";
import Menu from "../../components/menu/menu";
import BottomNav from "../../components/bottomNav/bottomNav";
import Spacer from "../spacer/spacer";
import Banner from "../banner_v/banner2";
import TopNav from "../../components/topNav/topNav";
import { Container } from "@material-ui/core";
import { options, lists, user } from "../../constants/menuItems";
import PropTypes from "prop-types";
import MenuIcon from "@material-ui/icons/Menu";

import "./pageContainer.scss";

const PageContainer = ({ children, showBanner = false, title }) => {
  let optionsUpdated = { ...options };
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };
  const menuButton = {
    icon: <MenuIcon />,
    handleClick: toggleDrawer,
  };

  return (
    <div className="ui-bptracker-main_container ui-bpt-grap_page">
      {showBanner && (
        <Banner message="Cómo te sientes hoy?" menuButton={menuButton}></Banner>
      )}
      {title && !showBanner && <TopNav>{title}</TopNav>}
      {title && !showBanner && <Spacer size={86} />}
      <Menu
        lists={lists}
        user={user}
        currentRute="home"
        toggleDrawer={toggleDrawer}
        state={state}
      ></Menu>
      <Container maxWidth="lg">{children}</Container>
      <BottomNav {...optionsUpdated}></BottomNav>
    </div>
  );
};

PageContainer.propTypes = {
  children: PropTypes.object,
  showBanner: PropTypes.bool,
  title: PropTypes.string,
};

export default PageContainer;
