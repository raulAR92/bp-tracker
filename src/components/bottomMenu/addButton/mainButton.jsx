import React from "react";
import PropTypes from "prop-types";

import "./mainButton.scss";

const ButtonAdd = ({ state, icon }) => {
  return (
    <div className={`ui-bpt-main_button`}>
      <button className={state ? " enabled" : " disabled"}>{icon}</button>
    </div>
  );
};

ButtonAdd.propTypes = {
  state: PropTypes.bool.isRequired,
  icon: PropTypes.object.isRequired,
};

export default ButtonAdd;
