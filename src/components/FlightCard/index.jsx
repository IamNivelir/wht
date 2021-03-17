import React from "react";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import { Card, VerticalDivider, Label } from "./styles";

const FlightCard = ({ data }) => {
  const {
    id,
    status,
    scheduledArrival,
    flightCode,
    sourcePortName,
    flightProvider,
  } = data;

  return (
    <Card>
      <Paper elevation={3}>
        <Grid container className="main-grid-wrapper">
          <Grid item xs>
            <Typography variant="body1">
              {scheduledArrival.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Typography>
          </Grid>
          <VerticalDivider orientation="vertical" flexItem />
          <Grid item container xs={5}>
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
              <Label status={status}>{status}</Label>
            </Grid>
          </Grid>
          <VerticalDivider orientation="vertical" flexItem />
          <Grid item container xs={5} justify="space-between">
            <Grid item xs={7}>
              <Typography variant="body1">Terminal 1</Typography>
            </Grid>
            <Grid item xs={5}>
              <Button color="primary" onClick={() => {}}>
                More details <ArrowForwardIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Card>
  );
};

export default FlightCard;
