import React from "react";

const PostStateContext = React.createContext();
const PostDispatchContext = React.createContext();

const types = {
  GET_POST_REQUEST: "GET_POST_REQUEST",
  GET_POST_SUCCESS: "GET_POST_SUCCESS",
  GET_POST_FAILURE: "GET_POST_FAILURE",
  GET_POSTS_REQUEST: "GET_POSTS_REQUEST",
  GET_POSTS_SUCCESS: "GET_POSTS_SUCCESS",
  GET_POSTS_FAILURE: "GET_POSTS_FAILURE",
};

const initState = {
  post: null,
  posts: [],
  comments: [],
  likes: [],
  loading: false,
};

const postReducer = (state, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

function PostContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(postReducer, initState);
  return (
    <PostStateContext.Provider value={state}>
      <PostDispatchContext value={dispatch}>{children}</PostDispatchContext>
    </PostStateContext.Provider>
  );
}

function usePostContext() {
  const state = React.useContext(PostStateContext);
  const dispatch = React.useContext(PostDispatchContext);

  return {
    state,
  };
}

export { PostContextProvider, usePostContext };
