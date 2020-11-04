import React from "react";
import api from "../utils/api";

import { useAlertContext } from "../contexts/AlertContext";

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

const initState = {
  user: null,
  token: null,
  loading: false,
};

const types = {
  REGISTER_USER_REQUEST: "REGISTER_USER_REQUEST",
  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
  REGISTER_USER_FAILURE: "REGISTER_USER_FAILURE",
  LOGIN_USER_REQUEST: "LOGIN_USER_REQUEST",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  LOGIN_USER_FAILURE: "LOGIN_USER_FAILURE",
  LOGOUT_USER: "LOGIN_USER",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case types.LOGIN_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    }
    case types.LOGIN_USER_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case types.REGISTER_USER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.REGISTER_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case types.REGISTER_USER_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    case types.LOGOUT_USER: {
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
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

function useAuthContext() {
  const state = React.useContext(AuthStateContext);
  const dispatch = React.useContext(AuthDispatchContext);
  const { setAlert } = useAlertContext();

  const registerUser = ({ firstName, lastName, email, password }) => {
    dispatch({ type: types.REGISTER_USER_REQUEST });
    api
      .post("/users", {
        data: {
          firstName,
          lastName,
          email,
          password,
        },
      })
      .then(() => {
        setAlert({
          msg: "Account has been created",
          type: "success",
          timeout: 5000,
        });
        dispatch({ type: types.REGISTER_USER_SUCCESS });
      })
      .catch((err) => {
        const errors = err.response.data.errors;
        if (Array.isArray(errors)) {
          errors.forEach((msg) => {
            setAlert({ msg, type: "error", timeout: 5000 });
          });
        }
        dispatch({ type: types.REGISTER_USER_FAILURE });
      });
  };

  const loginUser = ({ email, password }) => {
    dispatch({ type: types.LOGIN_USER_REQUEST });
    api
      .post("/auth", {
        data: {
          email,
          password,
        },
      })
      .then((data) => {
        const { token, user } = data.data;
        setAlert({ msg: "User logged in", type: "success", timeout: 5000 });
        dispatch({
          type: types.LOGIN_USER_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      })
      .catch((err) => {
        const errors = err.response.data.errors;
        if (Array.isArray(errors)) {
          errors.forEach((msg) => {
            setAlert({ msg, type: "error", timeout: 5000 });
          });
        }
        dispatch({ type: types.LOGIN_USER_FAILURE });
      });
  };

  const logoutUser = React.useCallback(() => {
    setAlert({ msg: "User logged out", type: "success", timeout: 5000 });
    dispatch({ type: types.LOGOUT_USER });
  }, [dispatch, setAlert]);

  return {
    state,
    registerUser,
    loginUser,
    logoutUser,
  };
}

export { AuthContextProvider, useAuthContext };
