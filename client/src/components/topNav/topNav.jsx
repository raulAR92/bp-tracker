import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "./topNav.scss";

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const TopNav = (props) => {
  const { children } = props;
  let history = useHistory();
  return (
    <HideOnScroll {...props}>
      <AppBar className="ui-bpn-top_nav">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => history.push("/")}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h6" className="font">
            {children}
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default TopNav;
