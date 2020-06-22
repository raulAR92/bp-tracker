import React from "react";
import BottomMenu from "../bottomMenu/bottomMenu";
import MainButton from "../bottomMenu/addButton/mainButton";
import PropTypes from "prop-types";

import "./bottomNav.scss";

const BottomNav = ({ buttonOptions, menuOptions }) => {
  return (
    <div className="ui-bpt-bottom-nav">
      {buttonOptions && <MainButton {...buttonOptions}></MainButton>}
      <BottomMenu {...menuOptions}></BottomMenu>
    </div>
  );
};

BottomNav.propTypes = {
  buttonOptions: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    icon: PropTypes.object.isRequired,
  }),
  menuOptions: PropTypes.shape({
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        icon: PropTypes.object.isRequired,
      })
    ),
    value: PropTypes.string,
  }),
};

export default BottomNav;
