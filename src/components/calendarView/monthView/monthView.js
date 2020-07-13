import React from 'react';
import Table from 'react-bulma-components/lib/components/table';
import { connect } from "react-redux";
import { getUserDefaultsState } from 'app/selectors';
import { weekDays } from '../../../constants';
import DayInMonth from '../dayInMonth/dayInMonth';
import '../calendarView.css'

const MonthView = (props) => {
  const month = props.calendarView.month;
  const year = props.calendarView.year;
  const workouts = props.calendarView.workouts;
  return (
    <div>
        <Table>
            <thead>
                <tr>
                    {mapWeekDayOrder(props.firstDayOfWeek)}
                </tr>
            </thead>
            <tbody>
                {getMonthLayout(month, year, props.firstDayOfWeek).map((week, weekIndex) => {
                    return (
                        <tr className="week" key={weekIndex}>
                            {week.map((day, dayIndex) => {
                                return (<DayInMonth day={day} key={dayIndex}/>);
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    </div>
  );
}

const mapWeekDayOrder = (firstDayOfWeek) => {
    if (firstDayOfWeek === 0) {
        return weekDays.map((day, index) => (<th key={index}>{day}</th>));
    }
    // if desired first day is not 0 (Sunday), need to move days over
    var shiftedWeekDays = [];
    for (var i = 0; i < 7; i++) {
        shiftedWeekDays.push(weekDays[getDayAtShiftedIndex(i, firstDayOfWeek)]);
    }
    return shiftedWeekDays.map((day, index) => (<th key={index}>{day}</th>));
}

const getDayAtShiftedIndex = (index, desiredFirstDayOfWeek) => {
    return (index < 7 - desiredFirstDayOfWeek)
        ? index + desiredFirstDayOfWeek
        : index - (7 - desiredFirstDayOfWeek);
}

const getIndexAtShiftedDay = (day, desiredFirstDayOfWeek) => {
    return day >= desiredFirstDayOfWeek 
        ? day - desiredFirstDayOfWeek
        : day + (7-desiredFirstDayOfWeek);
}

const mapStateToProps = (state) => {
    const userDefaults = getUserDefaultsState(state); 
    return { 
        firstDayOfWeek: userDefaults.firstDayOfWeek
    };
}

const getTotalDaysInMonth = (month, year) => new Date(year, month, 0).getDate();
const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

const getMonthLayout = (month, year, desiredFirstDayOfWeek) => {
    var totalDays = getTotalDaysInMonth(month, year);
    var firstDayFixed = getIndexAtShiftedDay(getFirstDayOfMonth(month, year), desiredFirstDayOfWeek);
    var daysAdded = 0;
    var calendar = [];
    while (daysAdded < totalDays) {
        let week = [];
        if (daysAdded === 0) {
            while (week.length < firstDayFixed) {
                week.push(0)
            }
        }
        while (week.length < 7) {
            week.push(++daysAdded);
            if (daysAdded === totalDays) {
                break;
            }
        }
        calendar.push(week);
    }
    return calendar;
};

export default connect(mapStateToProps)(MonthView);
