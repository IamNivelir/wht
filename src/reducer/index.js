export const initialState = {
  flights: [],
};

export const getInitialState = () => {
  return initialState;
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
