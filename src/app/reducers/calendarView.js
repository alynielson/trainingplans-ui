import { INCREASE_MONTH_VIEWING, DECREASE_MONTH_VIEWING } from "../actionTypes";
import moment from 'moment';

const initialState = {
  dateViewing: moment({year: 2020, month: 5, day: 1}),
  month: moment({year: 2020, month: 5, day: 1}).month(),
  year: moment({year: 2020, month: 5, day: 1}).year()
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