import React, { useState } from "react";
import TitleAndSeeMore from "../../components/titleAndSeeMore/titleAndSeeMore";
import LastCheck from "../../components/lastCheck/lastCheck";
import PageContainer from "../../components/pageContainer/pageContainer";
import Spacer from "../../components/spacer/spacer";
import Chart from "../../components/rechartExample/chart";
import WidgetCard from "../../components/widgetCard/widgetCard";
import Menu from "../../components/menu/menu";
import { Grid, Grow } from "@material-ui/core";
import { getData } from "../../utils/chartDataGenerator";

import { lists, user, ROUTES } from "../../constants/menuItems";

import "./home.scss";

const Home = () => {
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
  const registersLink = {
    href: ROUTES.registers,
    text: "ver registros",
  };
  const graphLink = {
    href: ROUTES.graph,
    text: "ver registros",
  };
  const data = getData();
  return (
    <Grow in={true}>
      <div className="ui-bpt-page_background">
        <Spacer size={50}></Spacer>
        <Menu
          lists={lists}
          user={user}
          currentRute="home"
          toggleDrawer={toggleDrawer}
          state={state}
        ></Menu>
        <Grid container spacing={3} className="ui-bptracker-main_container">
          <Grid item xs={12}>
            <TitleAndSeeMore
              title="Último registro"
              extraData="registrado el 13 de mayo del 2020"
              link={registersLink}
            ></TitleAndSeeMore>
          </Grid>
          <Grid item xs={12}>
            <LastCheck systolic={120} diastolic={80} pulse={80}></LastCheck>
            <Spacer size={50}></Spacer>
          </Grid>
          <Grid item xs={12}>
            <TitleAndSeeMore
              title="Últimos 7 días"
              link={graphLink}
            ></TitleAndSeeMore>
          </Grid>
          <Grid item xs={12}>
            <WidgetCard>
              <Chart data={data.slice(0, 14)}> </Chart>
            </WidgetCard>
            <Spacer size={85}></Spacer>
          </Grid>
        </Grid>
      </div>
    </Grow>
  );
};

export default Home;
