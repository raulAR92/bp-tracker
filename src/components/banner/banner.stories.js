import React from "react";
import Banner from "./banner";

export default {
  title: "Banner",
  component: Banner,
};

export const ToStorybook = () => (
  <Banner message="Cómo te sientes hoy?"></Banner>
);

ToStorybook.story = {
  name: "banner",
  parameters: {
    viewport: {
      defaultViewport: "iphonex",
    },
  },
};
