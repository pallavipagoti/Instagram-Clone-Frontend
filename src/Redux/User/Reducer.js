import {
  FOLLOW_USER,
  GET_USER_BY_USERNAME,
  REQ_USER,
  UNFOLLOW_USER,
  UPDATE_USER,
  SEARCH_USER,
  GET_USERS_BY_USER_IDS,
  POPULAR_USER,
} from "./ActionType";

const initialValue = {
  regUser: null,
  findByUsername: null,
  findUsersByUserIds: [],
  followUser: null,
  unfollowUser: null,
  searchUser: null,
  updatedUser: null,
  popularUser: [],
};

export const userReducer = (store = initialValue, { type, payload }) => {
  // console.log(store);
  if (type === REQ_USER) {
    return { ...store, regUser: payload };
  } else if (type === GET_USER_BY_USERNAME) {
    return { ...store, findByUsername: payload };
  } else if (type === GET_USERS_BY_USER_IDS) {
    return { ...store, findUsersByUserIds: payload };
  } else if (type === FOLLOW_USER) {
    return { ...store, followUser: payload };
  } else if (type === UNFOLLOW_USER) {
    return { ...store, unfollowUser: payload };
  } else if (type === SEARCH_USER) {
    return { ...store, searchUser: payload };
  } else if (type === UPDATE_USER) {
    return { ...store, updatedUser: payload };
  } else if (type === POPULAR_USER) {
    return { ...store, popularUser: payload };
  }
  return store;
};
