import { flightDummyDataGenerator } from "../lib/flightDummyDataGenerator";

export const getInitialState = (numberOfFlights) => {
  const flightList = flightDummyDataGenerator(numberOfFlights);
  return {
    flights: flightList,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "remove": {
      const newFlights = state.flights.filter(({ id }) => id !== action.id);
      return {
        cards: [...newFlights],
      };
    }
    case "edit": {
      const idx = state.flights.findIndex((f) => f.id === action.id);
      const newFlights = [...state.flights];
      newFlights[idx][status] = action.status;

      return {
        cards: [...newFlights],
      };
    }
    default:
      return state;
  }
};
