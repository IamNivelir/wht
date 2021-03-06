import React, { useContext, useMemo } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import StateContext from "../lib/StateContext";
import FlightCard from "../components/FlightCard";

const ArrivalFlightList = () => {
  const {
    state: { flights },
  } = useContext(StateContext);

  const getFlightList = () => {
    if (flights.length == 0) return <span>No items to show</span>;
    return flights
      .sort((a, b) => {
        return new Date(a.scheduledArrival) - new Date(b.scheduledArrival);
      })
      .map((flightData) => (
        <FlightCard data={flightData} key={flightData.id} />
      ));
  };
  const flightList = useMemo(() => {
    return getFlightList();
  }, [flights]);

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
