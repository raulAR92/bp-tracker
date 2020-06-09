import React from "react";
import { Grid } from "@material-ui/core";
import Spacer from "../../components/spacer/spacer";
import PageContainer from "../../components/pageContainer/pageContainer";
import TitleAndSeeMore from "../../components/titleAndSeeMore/titleAndSeeMore";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FormControl from "@material-ui/core/FormControl";
import moment from "moment";

import "./add.scss";

const Registers = () => {
  const [state, setState] = React.useState({
    systolic: null,
    diastolic: null,
    pulse: null,
    isSet: false,
    setTitle: "",
  });

  const { systolic, diastolic, pulse, isSet, setTitle } = state;

  const handleChange = (event, element) => {
    console.log(event);
    let newState = { ...state };
    newState[element] = event.target.value;
    setState(newState);
  };

  const handleChangeSwitch = (event) => {
    console.log(event);
    let newState = { ...state };
    newState.isSet = event.target.checked;
    setState(newState);
  };

  return (
    <PageContainer showBanner={false} title="Nueva Lectura">
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {isSet && (
              <TitleAndSeeMore
                className="average"
                title="Nuevo registro"
                extraData={`Agregar al set ${setTitle}`}
              ></TitleAndSeeMore>
            )}
          </Grid>
          <Grid item sm={5} xs={12} justify="center" alignItems="center">
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">
                Sistólica
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-systolic"
                value={systolic}
                onChange={(event) => handleChange(event, "systolic")}
                endAdornment={
                  <InputAdornment position="end">mmHg</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
          </Grid>
          <Grid item sm={2} xs={12} justify="center" alignItems="center">
            <div className="separator">/</div>
          </Grid>
          <Grid item sm={5} xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">
                Diastólica
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-diastolic"
                value={diastolic}
                onChange={(event) => handleChange(event, "diastolic")}
                endAdornment={
                  <InputAdornment position="end">mmHg</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
          </Grid>
          <Grid item sm={8} xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Pulso</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={pulse}
                onChange={(event) => handleChange(event, "pulse")}
                endAdornment={
                  <InputAdornment position="end">por minuto</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
          </Grid>
          <Grid item sm={4} xs={12}>
            <FormControlLabel
              control={
                <Switch
                  color="primary"
                  checked={isSet}
                  onChange={(event) => handleChangeSwitch(event)}
                />
              }
              label="Es un set?"
              labelPlacement="start"
            />
          </Grid>
          <Grid item sm={12} xs={12}>
            {isSet && (
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Nombre
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  value={setTitle}
                  onChange={(event) => handleChange(event, "setTitle")}
                  labelWidth={60}
                />
              </FormControl>
            )}
            <Spacer size={85}></Spacer>
          </Grid>
        </Grid>
      </form>
    </PageContainer>
  );
};

export default Registers;
