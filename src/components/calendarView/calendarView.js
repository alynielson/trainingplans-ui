import React from 'react';
import MonthView from "./monthView/monthView";
import MonthViewHeader from './monthViewHeader/monthViewHeader'
import './calendarView.css';

const CalendarView = () => {
    return (
        <>
            <MonthViewHeader />
            <MonthView />
        </>
    );
}

export default CalendarView;