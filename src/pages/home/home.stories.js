import React from "react";
import Home from "./home";
import { makeStyles } from "@material-ui/core/styles";

export default {
  title: "Pages/Home",
  component: Home,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const banner = () => {
  return <Home useStyles={useStyles}></Home>;
};

banner.story = {
  name: "home page",
};
