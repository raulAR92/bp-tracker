import React from "react";
import Button from "@material-ui/core/Button";
import FilterDate from "./filterDate";

const FilterDateForStory = () => {
  const [state, setState] = React.useState({
    from: new Date(),
    to: new Date(),
    open: false,
  });

  const handleDateChange = (date, element) => {
    let currentDates = { ...state };
    currentDates[element] = date;
    setState(currentDates);
  };

  const handleOpen = (state, applyFilter) => {
    let newState = { ...state };
    newState.open = state;
    setState(newState);
    if (applyFilter) {
      console.log("refilter");
    }
  };

  return (
    <div className="ui-bpt-date_filter">
      <Button
        variant="outlined"
        color="primary"
        onClick={() => handleOpen(true)}
      >
        Open full-screen dialog
      </Button>
      <FilterDate
        handleDateChange={handleDateChange}
        dates={state}
        handleOpen={handleOpen}
      ></FilterDate>
    </div>
  );
};

export default FilterDateForStory;
