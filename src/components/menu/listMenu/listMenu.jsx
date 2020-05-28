import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";

const ListMenu = ({ lists, handleToggle, currentRute }) => {
  return (
    <div
      role="presentation"
      onClick={handleToggle(false)}
      onKeyDown={handleToggle(false)}
    >
      {lists &&
        lists.map((list, i) => (
          <React.Fragment>
            <List key={i}>
              {list.listElements &&
                list.listElements.map((listElement, index) => (
                  <ListItem
                    button
                    key={index}
                    selected={currentRute === listElement.route}
                  >
                    <ListItemIcon>{listElement.icon}</ListItemIcon>
                    <ListItemText primary={listElement.text} />
                  </ListItem>
                ))}
            </List>
            {list.addDivider && <Divider />}
          </React.Fragment>
        ))}
    </div>
  );
};

ListMenu.propTypes = {
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

export default ListMenu;
