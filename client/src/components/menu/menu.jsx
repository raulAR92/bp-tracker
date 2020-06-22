import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListMenu from "./listMenu/listMenu";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";

import "./menu.scss";

const Menu = ({ lists, user, currentRute, toggleDrawer, state }) => {
  return (
    <div className="ui-bpt-menu">
      {
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
