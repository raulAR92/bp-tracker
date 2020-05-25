import React from "react";
import Parameter from "../parameter/parameter";
import PropTypes from "prop-types";
import { getDiastolicStatus, getSystolicStatus } from "../../utils/getStatus";
import categoryThemes from "../../constants/categoryThemes";
import "./lastCheck.scss";

const LastCheck = ({ systolic, diastolic, pulse }) => {
  const { value: systolicStatus } = getSystolicStatus(systolic);
  const { value: diastolicStatus } = getDiastolicStatus(diastolic);
  return (
    <div className="ui-bp-lastcheck-container_br">
      <div className="ui-bp-lastcheck-container">
        <Parameter
          value={systolic}
          type="Sistolica"
          theme={categoryThemes[systolicStatus]}
        ></Parameter>
        <Parameter
          value={systolic}
          type="Diastolica"
          theme={categoryThemes[diastolicStatus]}
        ></Parameter>
        <Parameter value={pulse} type="Pulso" theme={"none"}></Parameter>
      </div>
    </div>
  );
};

LastCheck.propTypes = {
  systolic: PropTypes.number.isRequired,
  diastolic: PropTypes.number.isRequired,
  pulse: PropTypes.number.isRequired,
};

export default LastCheck;
