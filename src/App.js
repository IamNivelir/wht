import React, { useReducer } from "react";
import "fontsource-roboto";

import { getInitialState, reducer } from "./reducer";
import StateContext from "./lib/StateContext";
import ArrivalFlightList from "./pages/ArrivalFlightList";
import GlobalModal from "./components/Modal";
import GlobalStyle from "./styles";

const App = () => {
  // Lets generate 10 items for the flight list
  const initialState = getInitialState(10);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <GlobalStyle />
      <StateContext.Provider value={{ state, dispatch }}>
        <ArrivalFlightList />
        <GlobalModal />
      </StateContext.Provider>
    </div>
  );
};

export default App;
