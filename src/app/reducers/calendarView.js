import { INCREASE_MONTH_VIEWING, DECREASE_MONTH_VIEWING } from "../actionTypes";
import moment from 'moment';
import { workouts } from "hypotheticalData";

const initialDateViewing = new moment();
const initialState = {
  dateViewing: initialDateViewing,
  month: initialDateViewing.month(),
  year: initialDateViewing.year(),
  options: {
    workoutCalendar: "planOnly",
    workoutTypes: ["Bike", "Swim", "Run"],
    granularity: "all"
  },
  workouts: workouts
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREASE_MONTH_VIEWING: {
      let month = state.month + 1;
      let year = state.year;
      if (month > 11) {
        month = 0;
        year++;
      }
      return createMonthYearState(state, month, year);
    }
    case DECREASE_MONTH_VIEWING: {
      let month = state.month - 1;
      let year = state.year;
      if (month < 0) {
        month = 11;
        year--;
      }
      return createMonthYearState(state, month, year);
    }
    default:
      return state;
  }
}

const createMonthYearState = (state, newMonth, newYear) => {
  var dateViewing = moment({ year: newYear, month: newMonth, day: 1 });
  return {
    ...state,
    dateViewing,
    month: dateViewing.month(),
    year: dateViewing.year()
  };
}