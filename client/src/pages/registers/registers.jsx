import React from "react";
import { Grid, Grow } from "@material-ui/core";
import Spacer from "../../components/spacer/spacer";
import PageContainer from "../../components/pageContainer/pageContainer";
import subtitleFormatter from "../../utils/subtitleFormatter";
import FilterDate from "../../components/filterDate/filterDate";
import WidgetCard from "../../components/widgetCard/widgetCard";
import DataTable from "../../components/dataTable/dataTable";
import TitleAndSeeMore from "../../components/titleAndSeeMore/titleAndSeeMore";
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import { getUpdatedData as getData } from "../../utils/chartDataGenerator";
import moment from "moment";

import "./registers.scss";
const valueTo = moment();
let valueFrom = moment();
valueFrom.subtract(7, "d");

const Registers = () => {
  const data = getData();

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

  function createData(title, date, systolic, diastolic, pulse) {
    return {
      title,
      date,
      systolic,
      diastolic,
      pulse,
      history: [
        { date: "2020-01-05", systolic: 120, diastolic: 80, pulse: 65 },
        { date: "2020-01-05", systolic: 120, diastolic: 80, pulse: 65 },
        { date: "2020-01-05", systolic: 120, diastolic: 80, pulse: 65 },
      ],
    };
  }

  const rows = [
    createData("Manana", "2020-01-05", 120, 80, 65),
    createData("Noche", "2020-01-05", 120, 80, 65),
    createData("m", "2020-01-05", 120, 80, 65),
    createData("n", "2020-01-05", 120, 80, 65),
    createData("m2", "2020-01-05", 120, 80, 65),
  ];

  return (
    <Grow in={true}>
      <div className="ui-bpt-page_background">
        <FilterDate
          handleDateChange={handleDateChange}
          dates={dates}
          handleOpen={handleOpen}
        ></FilterDate>
        <Grid item xs={12}>
          <TitleAndSeeMore
            className="average"
            title="Promedio"
            extraData={subtitleFormatter(
              from.toDate(),
              to.toDate(),
              "registros"
            )}
            button={{
              text: "cambiar fechas",
              handleClick: () => handleOpen(true),
            }}
          ></TitleAndSeeMore>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth={true}
            color="inherit"
            onClick={() => console.log("clicked")}
            startIcon={<CloudDownloadOutlinedIcon></CloudDownloadOutlinedIcon>}
            className="ui-bpt-button"
          >
            Descargar
          </Button>
        </Grid>
        <Grid item xs={12}>
          <WidgetCard>
            <DataTable rows={rows}></DataTable>
          </WidgetCard>
          <Spacer size={85}></Spacer>
        </Grid>
      </div>
    </Grow>
  );
};

export default Registers;
