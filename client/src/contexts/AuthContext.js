import React from "react";
import api from "../utils/api";

import { useAlertContext } from "../contexts/AlertContext";

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

const initState = {
  user: null,
  token: null,
  registerSuccess: false,
  registerLoading: false,
  loginSuccess: false,
  loginLoading: false,
};

const types = {
  SET_TOKEN: "SET_TOKEN",
  SET_USER: "SET_USER",
  REGISTER_SUCCESS: "SET_REGISTER_SUCCESS",
  REGISTER_LOADING: "SET_REGISTER_LOADING",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_LOADING: "LOGIN_LOADING",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case types.SET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    case types.SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case types.REGISTER_SUCCESS: {
      return {
        ...state,
        registerSuccess: action.payload,
      };
    }
    case types.REGISTER_LOADING: {
      return {
        ...state,
        registerLoading: action.payload,
      };
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        loginSuccess: action.payload,
      };
    }
    case types.LOGIN_LOADING: {
      return {
        ...state,
        loginLoading: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

function AuthContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(authReducer, initState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

const creator = (type, payload) => {
  return {
    type,
    payload,
  };
};

function useAuthContext() {
  const state = React.useContext(AuthStateContext);
  const dispatch = React.useContext(AuthDispatchContext);
  const { setAlert } = useAlertContext();

  const registerNewAccount = (form) => {
    dispatch(creator(types.REGISTER_LOADING, true));
    api
      .post("/users", {
        data: {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
        },
      })
      .then(() => {
        setAlert({
          msg: "Account has been created",
          type: "success",
          timeout: 10000,
        });
        dispatch(creator(types.REGISTER_SUCCESS, true));
        dispatch(creator(types.REGISTER_LOADING, false));
      })
      .catch((err) => {
        const errors = err.response.data.errors;
        if (Array.isArray(errors)) {
          errors.forEach((msg) => {
            setAlert({ msg, type: "error", timeout: 10000 });
          });
        }
        dispatch(creator(types.REGISTER_LOADING, false));
      });
  };

  const loginUser = ({ email, password }) => {
    dispatch(creator(types.LOGIN_LOADING, true));
    api
      .post("/auth", {
        data: {
          email,
          password,
        },
      })
      .then((data) => {
        const { token, user } = data.data;
        setAlert({ msg: "User logged in", type: "success", timeout: 10000 });
        dispatch(creator(types.SET_USER, user));
        dispatch(creator(types.SET_TOKEN, token));
        dispatch(creator(types.LOGIN_LOADING, false));
      })
      .catch((err) => {
        const errors = err.response.data.errors;
        if (Array.isArray(errors)) {
          errors.forEach((msg) => {
            setAlert({ msg, type: "error", timeout: 10000 });
          });
        }
        dispatch(creator(types.LOGIN_LOADING, false));
      });
  };

  return {
    state,
    registerNewAccount,
    loginUser,
  };
}

export { AuthContextProvider, useAuthContext };
