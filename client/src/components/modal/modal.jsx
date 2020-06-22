import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import "./modal.scss";

const Modal = ({
  handleClose,
  title,
  children,
  buttonAcceptText,
  buttonDenyText,
  state,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Dialog
      fullScreen={fullScreen}
      open={state}
      onClose={() => handleClose(false)}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {buttonDenyText && (
          <Button onClick={() => handleClose(false)} color="primary">
            {buttonDenyText}
          </Button>
        )}
        {buttonAcceptText && (
          <Button onClick={() => handleClose(true)} color="primary">
            {buttonAcceptText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  title: PropTypes.string.isRequired,
  buttonAcceptText: PropTypes.string,
  buttonDenyText: PropTypes.string,
  state: PropTypes.bool,
};

export default Modal;
