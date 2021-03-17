import React, { useReducer } from "react";

import { getInitialState, reducer } from "./reducer";
import StateContext from "./lib/StateContext";
import ArrivalFlightList from "./pages/ArrivalFlightList";

const App = () => {
  const initialState = getInitialState();
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
