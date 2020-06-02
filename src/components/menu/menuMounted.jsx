import React, { useState } from "react";
import { lists, user } from "../../constants/menuItems";
import Menu from "./menu";

const MenuMounted = () => {
  console.log("list: ", lists);
  console.log("user: ", user);
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };
  return (
    <React.Fragment>
      <Menu
        lists={lists}
        user={user}
        currentRute="home"
        toggleDrawer={toggleDrawer}
        state={state}
      ></Menu>
      <button onClick={toggleDrawer(true)}>open</button>
    </React.Fragment>
  );
};

export default MenuMounted;
