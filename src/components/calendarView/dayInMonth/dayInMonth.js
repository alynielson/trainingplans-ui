import React from 'react';
import './dayInMonth.scss';
import PlannedDay from './plannedDay';

const DayInMonth = (props) => {
    return (
      <td>
          <div className="corner">{props.day === 0 ? null : props.day}</div>
            <PlannedDay day={props.day} workouts={props.workouts}/>
      </td>  
    );
}

export default DayInMonth;