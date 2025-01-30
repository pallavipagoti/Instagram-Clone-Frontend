import {
  CREATE_NEW_POST,
  DELETE_POST,
  GET_SINGLE_POST,
  GET_USER_POST,
  LIKE_POST,
  REQ_USER_POST,
  SAVE_POST,
  UNLIKE_POST,
  UNSAVE_POST,
} from "./ActionType";

const initialValue = {
  createdPost: null,
  postsByUserId: [],
  likedPost: null,
  unlikedPost: null,
  savedPost: null,
  unsavedPost: null,
  deleteMessage: "",
  postsByUserIds: [],
  postByPostId: null,
};
export const postReducer = (store = initialValue, { type, payload }) => {
  if (type === CREATE_NEW_POST) {
    return { ...store, createdPost: payload };
  } else if (type === GET_USER_POST) {
    return { ...store, postsByUserId: payload };
  } else if (type === LIKE_POST) {
    return { ...store, likedPost: payload };
  } else if (type === UNLIKE_POST) {
    return { ...store, unlikedPost: payload };
  } else if (type === SAVE_POST) {
    return { ...store, savedPost: payload };
  } else if (type === UNSAVE_POST) {
    return { ...store, unsavedPost: payload };
  } else if (type === REQ_USER_POST) {
    return { ...store, postsByUserIds: payload };
  } else if (type === GET_SINGLE_POST) {
    return { ...store, postByPostId: payload };
  } else if (type === DELETE_POST) {
    return { ...store, deleteMessage: payload };
  }
  return store;
};

//export const CREATE_NEW_POST = "CREATE_NEW_POST";
// export const GET_USER_POST = "GET_USER_POST";
// export const DELETE_POST = "DELETE_POST";
// export const LIKE_POST = "LIKE_POST";
// export const UNLIKE_POST = "UNLIKE_POST";
// export const SAVE_POST = "SAVE_POST";
// export const UNSAVE_POST = "UNSAVE_POST";
// export const REQ_USER_POST = "REQ_USER_POST";
// export const GET_SINGLE_POST = "GET_SINGLE_POST";
