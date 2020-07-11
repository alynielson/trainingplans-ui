import React from 'react';
import Icon from 'react-bulma-components/lib/components/icon';
import 'react-bulma-components/lib/components/heading';
import Button from 'react-bulma-components/lib/components/button';
import arrowleftthick from '../icons/arrow-left-thick.png';
import arrowrightthick from '../icons/arrow-right-thick.png';
import { months, workoutCalendarOptionTypes } from '../constants';
import './monthViewHeader.css';
import Dropdown from 'react-bulma-components/lib/components/dropdown';
import ActivityDropdown from './activityDropdown';

const MonthViewHeader = (props) => {
    const month = props.calendarView.month;
    const year = props.calendarView.year;
    const viewOptions = props.calendarView.options;
    return (
        <div className="title" id="monthViewHeader">
            <div className="header">
                <Button color="white" onClick={props.decrementMonth}>
                    <Icon>
                        <img src={arrowleftthick} alt="left arrow" />
                    </Icon>
                </Button>
                <div className="monthName">
                    {months[month]}
                </div>
                <Button color="white" onClick={props.incrementMonth}>
                <Icon>
                    <img src={arrowrightthick} alt="right arrow"/>
                </Icon>
                </Button>
                {year}
            </div>
            <div className="headerOptions">
                <Dropdown hoverable 
                    value={viewOptions.workoutCalendar}
                    onChange={props.changeWorkoutCalendarView}>
                    {workoutCalendarOptionTypes.map((t) => {
                        return (
                        <Dropdown.Item 
                            key={t.id} 
                            value={t.value}
                        >
                            {t.text}
                        </Dropdown.Item>
                        )
                    })}
                </Dropdown>
                <ActivityDropdown 
                    activityTypes={viewOptions.activityTypes}
                    addActivityType={props.addActivityType}
                    removeActivityType={props.removeActivityType}
                    />
            </div>
        </div>
    );
}

export default MonthViewHeader;