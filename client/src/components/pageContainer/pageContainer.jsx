import { Container } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import React, { useState } from "react";
import BottomNav from "../../components/bottomNav/bottomNav";
import Menu from "../../components/menu/menu";
import TopNav from "../../components/topNav/topNav";
import { lists, options, user, ROUTES } from "../../constants/menuItems";
import Banner from "../banner_v/banner2";
import Spacer from "../spacer/spacer";
import { useLocation } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

import "./pageContainer.scss";

const PageContainer = ({
  children,
  showBanner = false,
  title,
  bottomNavOptions = { ...options },
}) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#63A8E9",
        main: "#3382CC",
        dark: "#1F6AAF",
        contrastText: "#fff",
      },
    },
  });
  const location = useLocation();
  if (bottomNavOptions.buttonOptions) {
    bottomNavOptions.buttonOptions.state = true;
  }

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
    <ThemeProvider theme={theme}>
      <div className="ui-bptracker-main_container ui-bpt-grap_page">
        {showBanner && (
          <Collapse in={true}>
            <Banner
              message="Cómo te sientes hoy?"
              menuButton={menuButton}
            ></Banner>
          </Collapse>
        )}
        {title && !showBanner && (
          <Collapse in={true}>
            <TopNav>{title}</TopNav>
          </Collapse>
        )}
        {title && !showBanner && <Spacer size={86} />}
        <Menu
          lists={lists}
          user={user}
          currentRute="home"
          toggleDrawer={toggleDrawer}
          state={state}
        ></Menu>
        <Container maxWidth="lg">{children}</Container>
        {location.pathname !== ROUTES.addNew && (
          <BottomNav {...bottomNavOptions}></BottomNav>
        )}
      </div>
    </ThemeProvider>
  );
};

PageContainer.propTypes = {
  children: PropTypes.object,
  showBanner: PropTypes.bool,
  title: PropTypes.string,
  bottomNavOptions: PropTypes.object,
};

export default PageContainer;
