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
    selectSingleActivityDrilldown,
    changeTypeTotalView } from 'app/reducers/calendarView/actions';
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
    selectSingleActivityDrilldown,
    changeTypeTotalView}) => {
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
                    changeTypeTotalView={changeTypeTotalView}
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
        selectSingleActivityDrilldown,
        changeTypeTotalView
    };
}

export default connect(mapStateToProps, 
    { increaseMonthViewing, 
        decreaseMonthViewing, 
        changeWorkoutCalendarView,
        addActivityType,
        removeActivityType,
        selectMultiActivity,
        selectSingleActivityDrilldown,
        changeTypeTotalView
    })(CalendarView);