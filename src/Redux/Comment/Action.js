import {
  CREATE_COMMENT,
  LIKE_COMMENT,
  GET_POST_COMMENT,
  UNLIKE_COMMENT,
} from "./ActionType";

const BASE_URL = "https://insta-clone-deployment.onrender.com/api";

export const createCommentAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/comments/create/${data.postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
      body: JSON.stringify(data.data),
    });
    const comment = await res.json();

    dispatch({ type: CREATE_COMMENT, payload: comment });
  } catch (error) {
    console.log(error);
  }
};

export const findPostCommentAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/comments/${data.postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const comment = await res.json();

    dispatch({ type: GET_POST_COMMENT, payload: comment });
  } catch (error) {
    console.log(error);
  }
};

export const likeCommentAction = (data) => async (dispatch) => {
  console.log(data);

  try {
    const res = await fetch(`${BASE_URL}/comments/like/${data.commentid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const commentLiked = await res.json();
    console.log(commentLiked);

    dispatch({ type: LIKE_COMMENT, payload: commentLiked });
  } catch (error) {
    console.log(error);
  }
};

export const unlikeCommentAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/comments/unlike/${data.commentid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const commentUnliked = await res.json();
    console.log("commentUnliked", commentUnliked);

    dispatch({ type: UNLIKE_COMMENT, payload: commentUnliked });
  } catch (error) {
    console.log(error);
  }
};
