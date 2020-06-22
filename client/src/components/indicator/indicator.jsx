import React from "react";
import "./indicator.scss";

const Parameter = ({ theme }) => {
  return (
    <div className={"ui-bp-indicator " + theme}>
      <div className={`ui-bp-indicator_small b-${theme}`}></div>
    </div>
  );
};

export default Parameter;
