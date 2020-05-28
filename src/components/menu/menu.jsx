import React, { useState } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListMenu from "./listMenu/listMenu";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import "./menu.scss";

const Menu = ({ lists, user, currentRute }) => {
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
  return (
    <div className="ui-bpt-menu">
      <Button onClick={toggleDrawer(true)}>left</Button>
      {
        <React.Fragment>
          <SwipeableDrawer
            anchor="left"
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <ListMenu
              lists={lists}
              handleToggle={toggleDrawer}
              currentRute={currentRute}
            ></ListMenu>
            <div className="footer">
              <Avatar
                alt={user.name}
                src={user.profilePicture}
                className="avatar"
              />
              <div className="logo"></div>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      }
    </div>
  );
};

Menu.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      listElements: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          icon: PropTypes.object,
        })
      ),
    })
  ),
};

export default Menu;
