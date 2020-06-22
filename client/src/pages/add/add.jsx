import React from "react";
import { Grid } from "@material-ui/core";
import Spacer from "../../components/spacer/spacer";
import Modal from "../../components/modal/modal";
import TitleAndSeeMore from "../../components/titleAndSeeMore/titleAndSeeMore";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grow from "@material-ui/core/Grow";
import { addForm } from "../../constants/validateRules";
import Validator from "validatorjs";
import { options } from "../../constants/menuItems";

import "./add.scss";

const Registers = () => {
  const [state, setState] = React.useState({
    entry: {
      systolic: null,
      diastolic: null,
      pulse: null,
      isSet: false,
      setTitle: "",
    },
    showModal: true,
    isSaveEnable: false,
    errors: {
      systolic: null,
      diastolic: null,
      pulse: null,
      setTitle: null,
      showModal: true,
    },
  });

  const { systolic, diastolic, pulse, isSet, setTitle } = state.entry;

  const validateField = (field) => {
    let validation = new Validator(state.entry, addForm);
    const enableButton = validation.passes();
    const errors = validation.errors.get(field);
    setState((currentState) => {
      const newState = { ...currentState };
      if (errors.length > 0) newState.errors[field] = errors;
      else newState.errors[field] = null;
      newState.isSaveEnable = enableButton;
      return newState;
    });
  };

  const handleModalClose = (newSet) => {
    let newState = { ...state };
    newState.showModal = false;
    if (newSet) newState.isSet = true;
    setState(newState);
  };

  const handleChange = (event, element) => {
    let newState = { ...state };
    newState.entry[element] = event.target.value;
    setState(newState);
  };

  const handleChangeSwitch = (event) => {
    let newState = { ...state };
    newState.entry.isSet = event.target.checked;
    setState(newState);
  };

  let bottomNavOptions = { ...options };
  bottomNavOptions.buttonOptions = null;

  const { errors } = state;

  return (
    <Grow in={true}>
      <div className="ui-bpt-page_background">
        <Modal
          title="Iniciar un nuevo set?"
          handleClose={handleModalClose}
          buttonDenyText="Agregar Lectura"
          buttonAcceptText="Nuevo Set"
          state={state.showModal}
        >
          Si inicias un nuevo set, no podrás agregar nuevas lecturas al set
          pasado.
        </Modal>
        <form autoComplete={false}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {isSet && (
                <TitleAndSeeMore
                  className="average"
                  title={`Nuevo Set`}
                ></TitleAndSeeMore>
              )}
              {!isSet && (
                <TitleAndSeeMore
                  className="average"
                  title="Nueva lectura"
                  extraData={`La lectura se agregará al set ${setTitle}`}
                ></TitleAndSeeMore>
              )}
            </Grid>
            <Grid item sm={12} xs={12}>
              {isSet && (
                <TextField
                  label="Nombre del Set"
                  error={errors.setTitle}
                  value={setTitle}
                  onBlur={() => {
                    validateField("setTitle");
                  }}
                  helperText={errors.setTitle}
                  fullWidth
                  onChange={(event) => handleChange(event, "setTitle")}
                  variant="filled"
                />
              )}
            </Grid>
            <Grid item sm={5} xs={12} justify="center" alignItems="center">
              <TextField
                id="outlined-error-helper-text"
                label="Sistólica/mmHg"
                error={errors.systolic}
                value={systolic}
                onBlur={() => {
                  validateField("systolic");
                }}
                helperText={errors.systolic}
                fullWidth
                onChange={(event) => handleChange(event, "systolic")}
                endAdornment={
                  <InputAdornment position="end">mmHg</InputAdornment>
                }
                variant="filled"
              />
            </Grid>
            <Grid item sm={2} xs={12} justify="center" alignItems="center">
              <Box
                display={{
                  xs: "none",
                  lg: "block",
                  md: "block",
                  xl: "block",
                  sm: "block",
                }}
                m={1}
              >
                <div className="separator">/</div>
              </Box>
            </Grid>
            <Grid item sm={5} xs={12}>
              <TextField
                label="Diastólica/mmHg"
                error={errors.diastolic}
                value={diastolic}
                helperText={errors.diastolic}
                fullWidth
                onBlur={() => {
                  validateField("diastolic");
                }}
                onChange={(event) => handleChange(event, "diastolic")}
                variant="filled"
              />
            </Grid>
            <Grid item sm={8} xs={12}>
              <TextField
                label="Pulso"
                error={errors.pulse}
                value={pulse}
                helperText={errors.diastolic}
                onBlur={() => {
                  validateField("pulse");
                }}
                fullWidth
                onChange={(event) => handleChange(event, "pulse")}
                variant="filled"
              />
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
              <Button
                fullWidth={true}
                color="inherit"
                onClick={() => console.log("clicked")}
                startIcon={<SaveOutlinedIcon></SaveOutlinedIcon>}
                className="ui-bpt-button"
                disabled={!state.isSaveEnable}
              >
                Guardar
              </Button>
              <Spacer size={85}></Spacer>
            </Grid>
          </Grid>
        </form>
      </div>
    </Grow>
  );
};

export default Registers;
