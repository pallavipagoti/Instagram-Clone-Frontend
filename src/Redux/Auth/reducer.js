import { SIGN_IN, SIGN_UP, LOGOUT } from "./ActionType";

const initialValue = {
  signup: null,
  signin: null,
};

export const AuthReducer = (store = initialValue, { type, payload }) => {
  // console.log(store);

  if (type === SIGN_IN) {
    return { ...store, signin: payload };
  } else if (type === SIGN_UP) {
    return { ...store, signup: payload };
  } else if (type === LOGOUT) {
    console.log(store);
    return { ...store, signin: null };
  }
  return store;
};
