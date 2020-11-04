import React from "react";

const ProfileStateContext = React.createContext();
const ProfileDispatchContext = React.createContext();

const types = {
  GET_PROFILE_REQUEST: "GET_PROFILE_REQUEST",
  GET_PROFILE_SUCCESS: "GET_PROFILE_SUCCESS",
  GET_PROFILE_FAILURE: "GET_PROFILE_FAILURE",
};

const initState = {
  profile: null,
  profiles: [],
  friends: [],
  loading: false,
};

const profileReducer = (state, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

function ProfileContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(profileReducer, initState);
  return (
    <ProfileStateContext.Provider value={state}>
      <ProfileDispatchContext value={dispatch}>
        {children}
      </ProfileDispatchContext>
    </ProfileStateContext.Provider>
  );
}

function useProfileContext() {
  const state = React.useContext(ProfileStateContext);
  const dispatch = React.useContext(ProfileDispatchContext);

  return {
    state,
  };
}

export { ProfileContextProvider, useProfileContext };
