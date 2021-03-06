import React from 'react';
import { connect } from "react-redux";
import { getUserDefaultsState } from 'app/selectors';
import { weekDays } from '../../../constants';
import './monthView.scss'
import WeekView from './weekInMonthView';

const MonthView = (props) => {

  return (
    <div className="container-test">
        <table>
            <thead>
                <tr>
                    {mapWeekDayOrder(props.firstDayOfWeek)}
                </tr>
            </thead>
            <tbody>
                {getMonthLayout(props.month, props.year, props.firstDayOfWeek).map((week, weekIndex) => {
                    return (<WeekView 
                        key={weekIndex}
                        weekDays={week}
                    />);
                })}
            </tbody>
        </table>
    </div>
  );
}

const mapWeekDayOrder = (firstDayOfWeek) => {
    if (firstDayOfWeek === 0) {
        return weekDays.map((day, index) => (<th key={index}>{day}</th>));
    }
    // if desired first day is not 0 (Sunday), need to move days over
    let startOfWeek = weekDays.slice(firstDayOfWeek);
    let endOfWeek = weekDays.slice(0, firstDayOfWeek);

    return startOfWeek.concat(endOfWeek).map((day, index) => (<th key={index}>{day}</th>));
}

const getIndexAtShiftedDay = (day, desiredFirstDayOfWeek) => {
    return day >= desiredFirstDayOfWeek 
        ? day - desiredFirstDayOfWeek
        : day + (7-desiredFirstDayOfWeek);
}

const mapStateToProps = (state) => {
    const userDefaults = getUserDefaultsState(state); 
    return { 
        firstDayOfWeek: userDefaults.firstDayOfWeek,
        month: state.calendarView.month,
        year: state.calendarView.year
    };
}

// The below looks weird. First function only works if you add 1 to month, but not the second method.
const getTotalDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
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
