import { combineReducers } from "redux";
import routinesReducer from "./routinesReducer.js";

const allReducers = combineReducers({
  routines: routinesReducer,
});

export default allReducers;
