import { types } from "../types/types";

const credentials = {
  user: "blackstone",
  password: "password",
};

export const login =
  ({ user, password }) =>
  (dispatch) => {
    if (user === credentials.user && password === credentials.password) {
      dispatch(setIsLoggedIn({ isLoggedIn: true, errorMessage: "" }));
    } else {
      dispatch(
        setIsLoggedIn({
          isLoggedIn: false,
          errorMessage: "Invalid credentials",
        })
      );
    }
  };

export const logout = () => (dispatch) => {
  dispatch(setIsLoggedIn({ isLoggedIn: false, errorMessage: "" }));
};

const setIsLoggedIn = (payload) => ({
  type: types.login,
  payload,
});
