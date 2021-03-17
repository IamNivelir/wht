import React, { useContext } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import StateContext from "../lib/StateContext";
import FlightCard from "../components/FlightCard";

const ArrivalFlightList = () => {
  const {
    state: { flights },
  } = useContext(StateContext);

  const getFlightList = () => {
    return flights
      .sort((a, b) => {
        return new Date(a.scheduledArrival) - new Date(b.scheduledArrival);
      })
      .map((flightData) => (
        <FlightCard data={flightData} key={flightData.id} />
      ));
  };
  const flightList = getFlightList();

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="h4" style={{ marginBottom: "40px" }}>
          List Of Arrivals
        </Typography>
      </Grid>
      <div>{flightList}</div>
    </>
  );
};

export default ArrivalFlightList;
