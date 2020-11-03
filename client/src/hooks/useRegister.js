import React from "react";
import axios from "axios";

const types = {
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_LOADING: "REGISTER_LOADING",
  REGISTER_ERROR: "REGISTER_ERROR",
};

const initState = {
  registerSuccess: false,
  registerLoading: false,
  registerError: false,
};

const registerReducer = (state, action) => {
  switch (action.type) {
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
    case types.REGISTER_ERROR: {
      return {
        ...state,
        registerError: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const creator = (type, payload) => {
  return {
    type,
    payload,
  };
};

function useRegister() {
  const [state, dispatch] = React.useReducer(registerReducer, initState);

  const registerAccount = (account) => {
    dispatch(creator(types.REGISTER_LOADING, true));
    axios({
      method: "post",
      baseURL: "http://localhost:3001/",
      url: "/api/users",
      data: {
        firstName: account.firstName,
        lastName: account.lastName,
        email: account.email,
        password: account.password,
      },
    })
      .then((data) => {
        console.log(data);
        dispatch(creator(types.REGISTER_SUCCESS, true));
        dispatch(creator(types.REGISTER_LOADING, false));
      })
      .catch((err) => {
        const errors = err.response.data.errors;
        dispatch(creator(types.REGISTER_ERROR, errors));
        dispatch(creator(types.REGISTER_LOADING, false));
      });
  };

  return {
    state,
    registerAccount,
  };
}

export default useRegister;
