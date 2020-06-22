import React from "react";
import PropTypes from "prop-types";
import Indicator from "../indicator/indicator";
import "./paremeter.scss";

const Parameter = ({ value, type, theme }) => {
  return (
    <div className={"ui-bp-parameter " + theme}>
      <div className="indicator">
        <Indicator theme={theme}></Indicator>
      </div>
      <div className={theme + " value"}>{value}</div>
      <div className="type">{type}</div>
    </div>
  );
};

Parameter.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

export default Parameter;
