import React from 'react';
import { connect } from "react-redux";
import MonthView from "./monthView";
import MonthViewHeader from './monthViewHeader'
import Container from 'react-bulma-components/lib/components/container';
import { increaseMonthViewing, 
    decreaseMonthViewing, 
    changeWorkoutCalendarView, 
    addActivityType,
    removeActivityType } from 'app/actions';
import './monthView.css';

const CalendarView = ({calendarView,
    increaseMonthViewing, 
    decreaseMonthViewing, 
    changeWorkoutCalendarView,
    addActivityType,
    removeActivityType}) => {
    return (
        <div>
            <Container fluid>
                <MonthViewHeader
                    calendarView={calendarView}
                    incrementMonth={increaseMonthViewing}
                    decrementMonth={decreaseMonthViewing}
                    changeWorkoutCalendarView={changeWorkoutCalendarView}
                    addActivityType={addActivityType}
                    removeActivityType={removeActivityType}
                    />
                <MonthView 
                    calendarView={calendarView}
                    />
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        calendarView: state.calendarView,
        increaseMonthViewing,
        decreaseMonthViewing,
        changeWorkoutCalendarView ,
        addActivityType,
        removeActivityType
    };
}

export default connect(mapStateToProps, 
    { increaseMonthViewing, 
        decreaseMonthViewing, 
        changeWorkoutCalendarView,
        addActivityType,
        removeActivityType
    })(CalendarView);