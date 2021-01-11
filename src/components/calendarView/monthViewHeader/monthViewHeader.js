import React from 'react';
import { connect } from 'react-redux';
import arrowleftthick from  '../../../icons/arrow_back-black-18dp.svg';
import arrowrightthick from '../../../icons/arrow_forward-black-18dp.svg';
import { months, workoutCalendarOptionTypes } from '../../../constants';
import './monthViewHeader.scss';
import ActivityHeader from '../activityHeader/activityHeader';
import Dropdown from '../../common/dropdown/dropdown';
import { decreaseMonthViewing, increaseMonthViewing, changeWorkoutCalendarView } from 'app/reducers/calendarView/actions';

const MonthViewHeader = (props) => {    
    return (
            <div className="container-test">
                <div className="inner-container-test --quarter">
                    <div className="month-selector">
                    <button className="arrow" onClick={props.decreaseMonthViewing}>
                        <img src={arrowleftthick} alt="left arrow" />
                    </button>
                    <div className="month-name">
                        {months[props.month]}
                    </div>
                    <button className="arrow" onClick={props.increaseMonthViewing}>
                        <img src={arrowrightthick} alt="right arrow"/>
                    </button>
                    <div className="year-name">{props.year}</div>
                    </div>
                </div>
                <div className="inner-container-test">
                    <Dropdown 
                        buttonText={workoutCalendarOptionTypes.find(x => x.value === props.workoutCalendar).text}
                        selectedValue={props.workoutCalendar}
                        values={workoutCalendarOptionTypes}
                        changeSelected={props.changeWorkoutCalendarView}
                        mainColor="green-main-color"
                        highlightColor="green-highlight"
                    />
                    <ActivityHeader 
                    />
                </div>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {
        month: state.calendarView.month,
        year: state.calendarView.year,
        workoutCalendar: state.calendarView.options.workoutCalendar,
        increaseMonthViewing,
        decreaseMonthViewing,
        changeWorkoutCalendarView
    }
}

export default connect(mapStateToProps,{ increaseMonthViewing, 
    decreaseMonthViewing, changeWorkoutCalendarView })(MonthViewHeader);