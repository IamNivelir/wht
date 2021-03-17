import React, { useContext } from "react";

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
    <div>
      <h3>List Of Arrivals</h3>
      <div>{flightList}</div>
    </div>
  );
};

export default ArrivalFlightList;
