const initialState = {
  user: null,
  isAuth: false,
  signupdone: false,
  token: null,
  blogs: [],
};

export const blogreducer = (state = initialState, action) => {
  if (action.type == "SIGN_UP_SUCCESS") {
    return { ...state, signupdone: true };
  }
  if (action.type == "SIGN_IN_SUCCESS") {
    return {
      ...state,
      isAuth: true,
      user: action.payload.username,
      token: action.payload.token,
    };
  }
  return state;
};
