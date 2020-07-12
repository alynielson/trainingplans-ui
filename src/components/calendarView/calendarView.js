import React from 'react';
import { connect } from "react-redux";
import MonthView from "./monthView/monthView";
import MonthViewHeader from './monthViewHeader/monthViewHeader'
import Container from 'react-bulma-components/lib/components/container';
import { increaseMonthViewing, 
    decreaseMonthViewing, 
    changeWorkoutCalendarView, 
    addActivityType,
    removeActivityType,
    selectMultiActivity,
    selectSingleActivityDrilldown } from 'app/reducers/calendarView/actions';
import './calendarView.css';

const CalendarView = ({calendarView,
    increaseMonthViewing, 
    decreaseMonthViewing, 
    changeWorkoutCalendarView,
    addActivityType,
    removeActivityType,
    selectMultiActivity,
    selectSingleActivityDrilldown}) => {
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
                    selectMultiActivity={selectMultiActivity}
                    selectSingleActivityDrilldown={selectSingleActivityDrilldown}
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