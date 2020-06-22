import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import "./mainButton.scss";

const ButtonAdd = ({ state, icon, redirectTo = "/add/new" }) => {
  let history = useHistory();
  const handleCLick = () => {
    history.push(redirectTo);
  };

  return (
    <div className={`ui-bpt-main_button`}>
      <button
        className={state ? " enabled" : " disabled"}
        onClick={handleCLick}
      >
        {icon}
      </button>
    </div>
  );
};

ButtonAdd.propTypes = {
  state: PropTypes.bool.isRequired,
  icon: PropTypes.object.isRequired,
};

export default ButtonAdd;
