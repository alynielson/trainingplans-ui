import React from 'react';
import { connect } from "react-redux";
import MonthView from "./monthView";
import MonthViewHeader from './monthViewHeader'
import { getCalendarViewState } from 'app/selectors';
import Container from 'react-bulma-components/lib/components/container';
import { increaseMonthViewing, decreaseMonthViewing } from 'app/actions';

const CalendarView = ({calendarView, increaseMonthViewing, decreaseMonthViewing}) => {
    return (
        <div>
            <Container fluid>
            <MonthViewHeader 
                month={calendarView.month} 
                year={calendarView.year}
                incrementMonth={increaseMonthViewing}
                decrementMonth={decreaseMonthViewing}
                />
            <MonthView />
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => {
    const calendarView = getCalendarViewState(state);
    return { 
        increaseMonthViewing,
        decreaseMonthViewing,
        calendarView  
    };
}

export default connect(mapStateToProps, { increaseMonthViewing, decreaseMonthViewing })(CalendarView);