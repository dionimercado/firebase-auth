import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import Context from "./context";
import reducer from "./reducers/user";
import App from "./App";

const Root = () => {
  const initialState = useContext(Context);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <App />
    </Context.Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
