import {
  CREATE_NEW_POST,
  GET_SINGLE_POST,
  GET_USER_POST,
  LIKE_POST,
  REQ_USER_POST,
  SAVE_POST,
  UNLIKE_POST,
  UNSAVE_POST,
} from "./ActionType";

const BASE_URL = "https://insta-clone-deployment.onrender.com/api";

export const createPostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
      body: JSON.stringify(data.data),
    });
    const post = await res.json();
    console.log("createdpost", post);

    dispatch({ type: CREATE_NEW_POST, payload: post });
  } catch (error) {
    console.log(error);
  }
};

export const findPostsByUserIdAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/all/${data.userid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });

    const postsById = await res.json();

    dispatch({ type: GET_USER_POST, payload: postsById });
  } catch (error) {
    console.log(error);
  }
};

export const findAllPostsByUserIdsAction = (data) => async (dispatch) => {
  // console.log("find all posts action", data);

  try {
    const res = await fetch(`${BASE_URL}/posts/following/${data.userids}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const postsByIds = await res.json();
    dispatch({ type: REQ_USER_POST, payload: postsByIds });
  } catch (error) {
    console.log(error);
  }
};
export const findPostByPostIdAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/${data.postid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const postByPostId = await res.json();
    // console.log("postByPostId", postByPostId);

    dispatch({ type: GET_SINGLE_POST, payload: postByPostId });
  } catch (error) {
    console.log(error);
  }
};

export const likePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/like/${data.postid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const postLiked = await res.json();
    console.log(postLiked);

    dispatch({ type: LIKE_POST, payload: postLiked });
  } catch (error) {
    console.log(error);
  }
};

export const unlikePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/unlike/${data.postid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const postUnliked = await res.json();
    dispatch({ type: UNLIKE_POST, payload: postUnliked });
  } catch (error) {
    console.log(error);
  }
};

export const savePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/save_post/${data.postid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const postSaved = await res.json();
    dispatch({ type: SAVE_POST, payload: postSaved });
  } catch (error) {
    console.log(error);
  }
};

export const unSavePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/unsave_post/${data.postid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const postUnsaved = await res.json();
    dispatch({ type: UNSAVE_POST, payload: postUnsaved });
  } catch (error) {
    console.log(error);
  }
};

export const deletePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/delete/${data.postid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const message = await res;
    dispatch({ type: UNSAVE_POST, payload: message });
  } catch (error) {
    console.log(error);
  }
};
