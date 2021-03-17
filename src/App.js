import React, { useReducer } from "react";

import { getInitialState, reducer } from "./reducer";
import StateContext from "./lib/StateContext";
import ArrivalFlightList from "./pages/ArrivalFlightList";

const App = () => {
  // Lets generate 10 items for the flight list
  const initialState = getInitialState(10);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <StateContext.Provider value={{ state, dispatch }}>
        <ArrivalFlightList />
      </StateContext.Provider>
    </div>
  );
};

export default App;
