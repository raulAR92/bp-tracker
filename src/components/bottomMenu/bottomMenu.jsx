import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import PropTypes from "prop-types";

import "./bottomMenu.scss";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

const BottomMenu = ({ buttons, value }) => {
  const [currentRoute, setCurrentRoute] = useState(value);
  const classes = useStyles();
  const handleChange = (event, newRoute) => {
    setCurrentRoute(newRoute);
  };
  return (
    <BottomNavigation
      value={currentRoute}
      onChange={handleChange}
      className={classes}
    >
      {buttons &&
        buttons.map((b) => (
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
