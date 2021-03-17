import { flightDummyDataGenerator } from "../lib/flightDummyDataGenerator";

export const getInitialState = (numberOfFlights) => {
  const flightList = flightDummyDataGenerator(numberOfFlights);
  return {
    flights: flightList,
    openModal: undefined,
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "remove": {
      const newFlights = state.flights.filter(({ id }) => id !== action.id);
      return { ...state, flights: [...newFlights] };
    }
    case "edit": {
      const idx = state.flights.findIndex((f) => f.id === action.id);
      const newFlights = [...state.flights];
      newFlights[idx][status] = action.status;

      return { ...state, flights: [...newFlights] };
    }
    case "open": {
      return { ...state, openModal: action.id };
    }
    case "close": {
      return { ...state, openModal: undefined };
    }
    default:
      return state;
  }
};
