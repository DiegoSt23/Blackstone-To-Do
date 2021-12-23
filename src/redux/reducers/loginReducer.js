import { types } from "../types/types";

const initialState = {
  isLoggedIn: false,
  errorMessage: "",
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        isLoggedIn: action.payload.isLoggedIn,
        errorMessage: action.payload.errorMessage,
      };
    case types.logout:
      return {
        isLoggedIn: action.payload.isLoggedIn,
        errorMessage: action.payload.errorMessage,
      };
    default:
      return state;
  }
};
