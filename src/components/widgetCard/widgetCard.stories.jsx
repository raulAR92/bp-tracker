import React from "react";
import WidgetCard from "./widgetCard";

export default {
  title: "WidgetCard",
  component: WidgetCard,
};

export const withExtra = () => {
  return <WidgetCard>hello</WidgetCard>;
};
