import React, { useState } from "react";
import { formatDate } from "../../utils/dateUtils";
import TopNav from "../../components/topNav/topNav";
import Spacer from "../../components/spacer/spacer";
import TitleAndSeeMore from "../../components/titleAndSeeMore/titleAndSeeMore";
import LastCheck from "../../components/lastCheck/lastCheck";
import WidgetCard from "../../components/widgetCard/widgetCard";
import FullSizeChart from "../../components/rechartExample/fullSizeChart";
import { Container, Grid } from "@material-ui/core";
import BottomNav from "../../components/bottomNav/bottomNav";
import { options, lists, user } from "../../constants/menuItems";
import { getUpdatedData as getData } from "../../utils/chartDataGenerator";
import Menu from "../../components/menu/menu";
import FilterDate from "../../components/filterDate/filterDate";
import moment from "moment";

import "./graph.scss";

const formatMessage = (from, to) => {
  const formatFrom = formatDate(from);
  const formatTo = formatDate(to);
  return `registros de entre el ${formatFrom} al ${formatTo}`;
};

const valueTo = moment();
let valueFrom = moment();
valueFrom.subtract(7, "d");

const Graph = () => {
  const data = getData();

  let optionsUpdated = { ...options };
  optionsUpdated.menuOptions.value = "graph";
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

  const [dates, setDates] = React.useState({
    from: valueFrom,
    to: valueTo,
    open: false,
  });
  const { from, to } = dates;
  const handleDateChange = (date, element) => {
    let currentDates = { ...dates };
    currentDates[element] = date;
    setDates(currentDates);
  };

  const handleOpen = (openState, applyFilter) => {
    let newState = { ...dates };
    newState.open = openState;
    setDates(newState);
    if (applyFilter) {
      console.log("refilter");
    }
  };

  return (
    <div className="ui-bptracker-main_container ui-bpt-grap_page">
      <FilterDate
        handleDateChange={handleDateChange}
        dates={dates}
        handleOpen={handleOpen}
      ></FilterDate>
      <TopNav>Gráfica</TopNav>
      <Menu
        lists={lists}
        user={user}
        currentRute="home"
        toggleDrawer={toggleDrawer}
        state={state}
      ></Menu>
      <Container maxWidth="lg">
        <Grid item xs={12}>
          <Spacer size={86} />
          <TitleAndSeeMore
            className="average"
            title="Promedio"
            extraData={formatMessage(from.toDate(), to.toDate())}
            button={{
              text: "cambiar fechas",
              handleClick: () => handleOpen(true),
            }}
          ></TitleAndSeeMore>
        </Grid>
        <Grid item xs={12}>
          <LastCheck systolic={122} diastolic={80} pulse={75}></LastCheck>
        </Grid>
        <Grid item xs={12}>
          <WidgetCard>
            <FullSizeChart data={data.slice(0, 14)}> </FullSizeChart>
          </WidgetCard>
          <Spacer size={85}></Spacer>
        </Grid>
      </Container>
      <BottomNav {...optionsUpdated}></BottomNav>
    </div>
  );
};

export default Graph;
