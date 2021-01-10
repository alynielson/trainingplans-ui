import React from 'react';
import { connect } from "react-redux";
import MonthView from "./monthView/monthView";
import MonthViewHeader from './monthViewHeader/monthViewHeader'
import { increaseMonthViewing, 
    decreaseMonthViewing, 
    changeWorkoutCalendarView, 
    addActivityType,
    removeActivityType,
    selectMultiActivity,
    selectSingleActivityDrilldown } from 'app/reducers/calendarView/actions';
import './calendarView.css';
import { selectMonthViewWorkouts } from 'app/selectors';

const CalendarView = ({calendarView,
    workouts,
    increaseMonthViewing, 
    decreaseMonthViewing, 
    changeWorkoutCalendarView,
    addActivityType,
    removeActivityType,
    selectMultiActivity,
    selectSingleActivityDrilldown}) => {
    return (
        <>
                <MonthViewHeader
                    calendarView={calendarView}
                    incrementMonth={increaseMonthViewing}
                    decrementMonth={decreaseMonthViewing}
                    changeWorkoutCalendarView={changeWorkoutCalendarView}
                    addActivityType={addActivityType}
                    removeActivityType={removeActivityType}
                    selectMultiActivity={selectMultiActivity}
                    selectSingleActivityDrilldown={selectSingleActivityDrilldown}
                    />
                <MonthView 
                    workouts={workouts}
                    calendarView={calendarView}
                    />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        calendarView: state.calendarView,
        workouts: selectMonthViewWorkouts(state),
        increaseMonthViewing,
        decreaseMonthViewing,
        changeWorkoutCalendarView ,
        addActivityType,
        removeActivityType,
        selectMultiActivity,
        selectSingleActivityDrilldown
    };
}

export default connect(mapStateToProps, 
    { increaseMonthViewing, 
        decreaseMonthViewing, 
        changeWorkoutCalendarView,
        addActivityType,
        removeActivityType,
        selectMultiActivity,
        selectSingleActivityDrilldown
    })(CalendarView);