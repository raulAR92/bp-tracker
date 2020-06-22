import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { useLocation, useHistory } from "react-router-dom";

import "./bottomMenu.scss";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const BottomMenu = ({ buttons, value }) => {
  const location = useLocation();
  let history = useHistory();
  const classes = useStyles();
  const handleChange = (event, newRoute) => {
    history.push(newRoute);
  };
  const filteredButtons = buttons.filter((b) => b.show);
  return (
    <BottomNavigation
      value={`${location.pathname}`}
      onChange={handleChange}
      className={classes}
    >
      {filteredButtons &&
        filteredButtons.map((b) => (
          <BottomNavigationAction
            label={b.label}
            value={b.value}
            icon={b.icon}
          />
        ))}
    </BottomNavigation>
  );
};

BottomMenu.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
    })
  ),
  value: PropTypes.string,
};

export default BottomMenu;
