import React, { useState } from "react";
import Banner from "../../components/banner_v/banner2";
import TitleAndSeeMore from "../../components/titleAndSeeMore/titleAndSeeMore";
import LastCheck from "../../components/lastCheck/lastCheck";
import Spacer from "../../components/spacer/spacer";
import Chart from "../../components/rechartExample/chart";
import WidgetCard from "../../components/widgetCard/widgetCard";
import BottomNav from "../../components/bottomNav/bottomNav";
import Menu from "../../components/menu/menu";
import { Container, Paper, Grid } from "@material-ui/core";
import { getData } from "../../utils/chartDataGenerator";
import MenuIcon from "@material-ui/icons/Menu";
import { options, lists, user } from "../../constants/menuItems";

import "./home.scss";

const Home = ({ useStyles }) => {
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
  const menuButton = {
    icon: <MenuIcon />,
    handleClick: toggleDrawer,
  };
  const link = {
    href: "#",
    text: "ver registros",
  };
  const data = getData();
  return (
    <div className="ui-bptracker-main_container">
      <Banner message="Cómo te sientes hoy?" menuButton={menuButton}></Banner>
      <Spacer size={50}></Spacer>
      <Menu
        lists={lists}
        user={user}
        currentRute="home"
        toggleDrawer={toggleDrawer}
        state={state}
      ></Menu>
      <Container maxWidth="lg">
        <Grid container spacing={3} className="ui-bptracker-main_container">
          <Grid item xs={12}>
            <TitleAndSeeMore
              title="Último registro"
              extraData="registrado el 13 de mayo del 2020"
              link={link}
            ></TitleAndSeeMore>
          </Grid>
          <Grid item xs={12}>
            <LastCheck systolic={120} diastolic={80} pulse={80}></LastCheck>
            <Spacer size={50}></Spacer>
          </Grid>
          <Grid item xs={12}>
            <TitleAndSeeMore
              title="Últimos 7 días"
              link={link}
            ></TitleAndSeeMore>
          </Grid>
          <Grid item xs={12}>
            <WidgetCard>
              <Chart data={data.slice(0, 14)}> </Chart>
            </WidgetCard>
            <Spacer size={85}></Spacer>
          </Grid>
        </Grid>
      </Container>
      <BottomNav {...options}></BottomNav>
    </div>
  );
};

export default Home;
