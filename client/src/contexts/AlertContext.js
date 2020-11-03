import React from "react";

const AlertStateContext = React.createContext();
const AlertDispatchContext = React.createContext();

const initState = {
  alerts: [],
};

const alertReducer = (state, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

function AlertContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(alertReducer, initState);

  return (
    <AlertStateContext.Provider value={state}>
      <AlertDispatchContext.Provider value={dispatch}>
        {children}
      </AlertDispatchContext.Provider>
    </AlertStateContext.Provider>
  );
}

function useAlertContext() {
  const state = React.useContext(AlertStateContext);
  const dispatch = React.useContext(AlertDispatchContext);

  const setAlert = (alert) => {};

  return {
    state,
  };
}

export { AlertContextProvider, useAlertContext };
