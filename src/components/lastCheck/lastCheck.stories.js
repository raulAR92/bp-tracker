import React from "react";
import LastCheck from "./lastCheck";

export default {
  title: "Last Check",
  component: LastCheck,
};

export const blue = () => (
  <LastCheck systolic={120} diastolic={80} pulse={85}></LastCheck>
);

blue.story = {
  name: "correcta",
};
