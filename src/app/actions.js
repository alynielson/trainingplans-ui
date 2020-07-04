import { INCREASE_MONTH_VIEWING, DECREASE_MONTH_VIEWING, CHANGE_WORKOUT_CALENDAR_VIEW } from "./actionTypes";

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
