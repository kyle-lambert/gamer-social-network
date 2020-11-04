import React from "react";
import { v4 as uuidv4 } from "uuid";

const AlertStateContext = React.createContext();
const AlertDispatchContext = React.createContext();

const initState = [];

const alertReducer = (state, action) => {
  switch (action.type) {
    case types.SET_ALERT: {
      return [...state, action.payload];
    }
    case types.REMOVE_ALERT: {
      return state.filter((alert) => alert.id !== action.payload);
    }
    default: {
      return state;
    }
  }
};

const types = {
  SET_ALERT: "SET_ALERT",
  REMOVE_ALERT: "REMOVE_ALERT",
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

const creator = (type, payload) => {
  return {
    type,
    payload,
  };
};

function useAlertContext() {
  const state = React.useContext(AlertStateContext);
  const dispatch = React.useContext(AlertDispatchContext);

  const setAlert = ({ msg, type, timeout }) => {
    if (typeof msg === "string") {
      const alert = {
        id: uuidv4(),
        type,
        msg,
      };
      dispatch(creator(types.SET_ALERT, alert));
      setTimeout(() => {
        dispatch(creator(types.REMOVE_ALERT, alert.id));
      }, timeout);
    } else {
      console.log("Alert type is not a string.");
    }
  };

  return {
    alerts: state,
    setAlert,
  };
}

export { AlertContextProvider, useAlertContext };
