import { combineReducers } from "redux";
import calendarView from "./calendarView";
import userDefaults from "./userDefaults";

export default combineReducers({ calendarView, userDefaults });
