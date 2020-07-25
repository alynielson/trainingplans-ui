import React from 'react';
import './dayInMonth.css';
import PlannedDay from './plannedDay';

const DayInMonth = (props) => {
    return (
      <td className="cell">
          <div className="corner">{props.day === 0 ? null : props.day}</div>
            <PlannedDay day={props.day} workouts={props.workouts}/>
      </td>  
    );
}

export default DayInMonth;