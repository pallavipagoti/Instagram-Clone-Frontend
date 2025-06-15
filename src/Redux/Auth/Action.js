import { LOGOUT, SIGN_IN, SIGN_UP } from "./ActionType";

export const signinAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(
      "https://insta-clone-deployment.onrender.com/signin",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + btoa(data.email + ":" + data.password),
        },
      }
    );

    const token = res.headers.get("Authorization");
    localStorage.setItem("token", token);
    // console.log("token", localStorage.getItem("token"));

    dispatch({ type: SIGN_IN, payload: token });

    // console.log("signin user token: ", token);
  } catch (error) {
    console.log(error);
  }
};

export const signupAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(
      "https://insta-clone-deployment.onrender.com/signup",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const user = await res.json();

    console.log("signup user: ", user);
    if (!res.ok) {
      throw new Error(user.message);
    }

    dispatch({ type: SIGN_UP, payload: user });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const spinAction = () => async (dispatch) => {
  try {
    const res = await fetch(
      "https://insta-clone-deployment.onrender.com/spin",
      {
        method: "GET",
        // headers: {
        //   "Content-Type": "application/json",
        // },
      }
    );

    // dispatch({ type: SIGN_IN, payload: token });

    const body = await res.text();
    // console.log("messsage: ", body);
  } catch (error) {
    console.log(error);
  }
};

export const logoutAction = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");
    console.log(localStorage.getItem("token"));
    dispatch({ type: LOGOUT, payload: null });
  } catch (error) {
    console.log(error);
  }
};
