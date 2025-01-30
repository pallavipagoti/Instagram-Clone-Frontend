import { CREATE_STORY, GET_STORY_BY_ID } from "./ActionType";

const BASE_URL = "https://insta-clone-deployment.onrender.com/api";
export const createStoryAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/stories/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
      body: JSON.stringify(data.data),
    });
    const story = await res.json();
    dispatch({ type: CREATE_STORY, payload: story });
  } catch (error) {
    console.log(error);
  }
};

export const findUserStoryAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/stories/${data.userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const story = await res.json();
    dispatch({ type: GET_STORY_BY_ID, payload: story });
  } catch (error) {
    console.log(error);
  }
};
