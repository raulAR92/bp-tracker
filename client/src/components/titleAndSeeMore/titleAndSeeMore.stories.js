import React from "react";
import TitleAndSeeMore from "./titleAndSeeMore";
import { Container } from "react-bootstrap";

export default {
  title: "Title and link",
  component: TitleAndSeeMore,
};

export const noExtra = () => {
  const link = {
    text: "Ver Más",
    href: "https://google.com",
  };
  return (
    <Container>
      <TitleAndSeeMore title="Registros de Mayo" link={link}></TitleAndSeeMore>
    </Container>
  );
};
noExtra.story = {
  name: "default",
};

export const withExtra = () => {
  const link = {
    text: "Ver Más",
    href: "https://google.com",
  };
  return (
    <Container>
      <TitleAndSeeMore
        title="Registros de Mayo"
        extraData="registrado el 13 de mayo del 2020"
        link={link}
      ></TitleAndSeeMore>
    </Container>
  );
};
withExtra.story = {
  name: "con extra",
};
