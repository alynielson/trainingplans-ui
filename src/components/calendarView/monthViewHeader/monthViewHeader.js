import React from 'react';
import arrowleftthick from  '../../../icons/arrow_back-black-18dp.svg';
import arrowrightthick from '../../../icons/arrow_forward-black-18dp.svg';

import { months, workoutCalendarOptionTypes } from '../../../constants';
import './monthViewHeader.scss';
import ActivityHeader from '../activityHeader/activityHeader';
import Dropdown from '../../common/dropdown/dropdown';

const MonthViewHeader = (props) => {
    const month = props.calendarView.month;
    const year = props.calendarView.year;
    const viewOptions = props.calendarView.options;
    
    return (
            <div className="container-test">
                <div className="inner-container-test --quarter">
                    <div className="month-selector">
                    <button className="arrow" onClick={props.decrementMonth}>
                        <img src={arrowleftthick} alt="left arrow" />
                    </button>
                    <div className="month-name">
                        {months[month]}
                    </div>
                    <button className="arrow" onClick={props.incrementMonth}>
                        <img src={arrowrightthick} alt="right arrow"/>
                    </button>
                    <div className="year-name">{year}</div>
                    </div>
                </div>
                <div className="inner-container-test">
                    <Dropdown 
                        buttonText={workoutCalendarOptionTypes.find(x => x.value === viewOptions.workoutCalendar).text}
                        selectedValue={viewOptions.workoutCalendar}
                        values={workoutCalendarOptionTypes}
                        changeSelected={props.changeWorkoutCalendarView}
                        mainColor="green-main-color"
                        highlightColor="green-highlight"
                    />
                    <ActivityHeader 
                        activityTypes={viewOptions.activityTypes}
                        singleSelectedActivity={viewOptions.singleSelectedActivity}
                        typeTotalViews={viewOptions.totalDisplay}
                        addActivityType={props.addActivityType}
                        removeActivityType={props.removeActivityType}
                        selectSingleActivityDrilldown={props.selectSingleActivityDrilldown}
                        selectMultiActivity={props.selectMultiActivity}
                        changeTypeTotalView={props.changeTypeTotalView}
                />
                </div>
            </div>
    );
}

export default MonthViewHeader;