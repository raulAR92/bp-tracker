import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "moment/locale/es";
import "./filterDate.scss";
moment.locale("es");

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FilterDate = ({ handleDateChange, dates, handleOpen }) => {
  const classes = useStyles();

  let { from, to, open } = dates;

  return (
    <div className="ui-bpt-date_filter">
      <Dialog
        fullScreen
        open={open}
        onClose={() => handleOpen(false)}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => handleOpen(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Fechas
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={() => handleOpen(false, true)}
            >
              Aplicar
            </Button>
          </Toolbar>
        </AppBar>
        <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog-from"
              label="Desde"
              format="DD/MM/yyyy"
              value={from}
              onChange={(date) => handleDateChange(date, "from")}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog-to"
              label="Hasta"
              format="DD/MM/yyyy"
              value={to}
              onChange={(date) => handleDateChange(date, "to")}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </Dialog>
    </div>
  );
};

export default FilterDate;
