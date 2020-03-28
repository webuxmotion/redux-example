import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";
import { counterReducer } from "./counterReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})