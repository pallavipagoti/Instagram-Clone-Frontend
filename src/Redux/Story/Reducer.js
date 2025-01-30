import { CREATE_STORY, GET_STORY_BY_ID } from "./ActionType";

const initialValues = {
  createdStory: null,
  storyById: null,
};

export const storyReducer = (store = initialValues, { type, payload }) => {
  if (type === CREATE_STORY) {
    return { ...store, createdStory: payload };
  } else if (type === GET_STORY_BY_ID) {
    return { ...store, storyById: payload };
  }
  return store;
};
