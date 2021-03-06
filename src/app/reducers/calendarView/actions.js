import { 
  INCREASE_MONTH_VIEWING, 
  DECREASE_MONTH_VIEWING, 
  CHANGE_WORKOUT_CALENDAR_VIEW,
  ADD_ACTIVITY_TYPE, 
  REMOVE_ACTIVITY_TYPE,
  SELECT_SINGLE_ACTIVITY_DRILLDOWN,
  SELECT_MULTI_ACTIVITY,
  CHANGE_TYPE_TOTAL_VIEW } from "./actionTypes";

export const increaseMonthViewing = () => ({
  type: INCREASE_MONTH_VIEWING
});

export const decreaseMonthViewing = () => ({
  type: DECREASE_MONTH_VIEWING
});

export const changeWorkoutCalendarView = (view) => ({
  type: CHANGE_WORKOUT_CALENDAR_VIEW,
  payload: view
});

export const addActivityType = (activityType) => ({
  type: ADD_ACTIVITY_TYPE,
  payload: activityType
});

export const removeActivityType = (activityType) => ({
  type: REMOVE_ACTIVITY_TYPE,
  payload: activityType
});

export const selectSingleActivityDrilldown = (activityType) => ({
  type: SELECT_SINGLE_ACTIVITY_DRILLDOWN,
  payload: activityType
});

export const selectMultiActivity = () => ({
  type: SELECT_MULTI_ACTIVITY
});

export const changeTypeTotalView = (activityType, totalView) => ({
  type: CHANGE_TYPE_TOTAL_VIEW,
  payload: {
    activityType,
    totalView
  }
});