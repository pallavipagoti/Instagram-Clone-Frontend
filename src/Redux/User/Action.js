import {
  FOLLOW_USER,
  GET_USER_BY_USERNAME,
  GET_USERS_BY_USER_IDS,
  REQ_USER,
  SEARCH_USER,
  UNFOLLOW_USER,
  UPDATE_USER,
  POPULAR_USER,
} from "./ActionType";
const BASE_URL = "https://insta-clone-deployment.onrender.com/api";

export const getUserProfileAction = (jwt) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/users/req`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwt,
      },
    });
    const regUser = await res.json();

    dispatch({ type: REQ_USER, payload: regUser });
  } catch (error) {
    console.log(error);
  }
};

export const findUserByUserNameAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/users/username/${data.username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const user = await res.json();

    dispatch({ type: GET_USER_BY_USERNAME, payload: user });
  } catch (error) {
    console.log(error);
  }
};

export const findUsersByUserIdsAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/users/m/${data.userids}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const users = await res.json();
    console.log("find by userIds user: ", users);

    dispatch({ type: GET_USERS_BY_USER_IDS, payload: users });
  } catch (error) {
    console.log(error);
  }
};

export const followUserAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/users/follow/${data.userid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const user = await res.json();
    console.log("follow user: ", user);

    dispatch({ type: FOLLOW_USER, payload: user });
  } catch (error) {
    console.log(error);
  }
};

export const unFollowUserAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/users/unfollow/${data.userid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const user = await res.json();
    console.log("un follow user: ", user);

    dispatch({ type: UNFOLLOW_USER, payload: user });
  } catch (error) {
    console.log(error);
  }
};

export const searchUserAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/users/search?q=${data.query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const user = await res.json();
    console.log("Search user: ", user);

    dispatch({ type: SEARCH_USER, payload: user });
  } catch (error) {
    console.log(error);
  }
};

export const updateUserAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/users/account/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
      body: JSON.stringify(data.data),
    });
    const user = await res.json();
    // console.log("Update user: ", user);

    dispatch({ type: UPDATE_USER, payload: user });
  } catch (error) {
    console.log(error);
  }
};

export const getPopularUserAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/users/popular`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data,
      },
    });
    const user = await res.json();

    dispatch({ type: POPULAR_USER, payload: user });
  } catch (error) {
    console.log(error);
  }
};
