import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { AuthReducer } from "../Redux/Auth/reducer";
import { thunk } from "redux-thunk";
import { userReducer } from "../Redux/User/Reducer";
import { postReducer } from "../Redux/Post/Reducer";
import { commentReducer } from "../Redux/Comment/Reducer";
import { storyReducer } from "../Redux/Story/Reducer";

const rootReducers = combineReducers({
  auth: AuthReducer,
  user: userReducer,
  post: postReducer,
  comment: commentReducer,
  story: storyReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
