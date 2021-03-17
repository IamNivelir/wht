import React, { useContext } from "react";
import Modal from "@material-ui/core/Modal";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import StateContext from "../../lib/StateContext";
import {
  STATUS_LANDED,
  STATUS_ON_SCHEDULE,
  STATUS_DELAYED,
} from "../../lib/constants";
import { ModalBody } from "./styles";

const GlobalModal = () => {
  const { state, dispatch } = useContext(StateContext);
  const { openModal, flights } = state;

  const handleClose = () => {
    dispatch({ type: "close" });
  };

  const handleChange = (event) => {
    const newStatus = event.target.value;
    dispatch({ type: "edit", id: openModal, status: newStatus });
  };

  const getBody = () => {
    const selectedFlight = flights.find(({ id }) => id === openModal);

    if (!showModal && !selectedFlight) {
      return <div></div>;
    } else {
      const {
        status,
        scheduledArrival,
        sourcePortName,
        flightCode,
        flightProvider,
      } = selectedFlight;
      return (
        <ModalBody elevation={3}>
          <Grid item container justify="center">
            <Typography variant="h5" style={{ marginBottom: 20 }}>
              Change flight status
            </Typography>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <Typography variant="body1">
                {scheduledArrival.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>
            </Grid>
            <Grid item container xs>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{ fontWeight: 700 }}
                >
                  {sourcePortName}
                </Typography>
                <Typography variant="body1">
                  {flightCode} {flightProvider}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <FormControl>
                  <InputLabel id="status-label">Status</InputLabel>
                  <Select
                    labelId="status-label"
                    id="select-filled"
                    value={status}
                    onChange={handleChange}
                  >
                    <MenuItem value={STATUS_LANDED}>LANDED</MenuItem>
                    <MenuItem value={STATUS_ON_SCHEDULE}>ON SCHEDULE</MenuItem>
                    <MenuItem value={STATUS_DELAYED}>DELAYED</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </ModalBody>
      );
    }
  };
  const body = getBody();

  const showModal = typeof openModal !== "undefined";

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );
};

export default GlobalModal;
