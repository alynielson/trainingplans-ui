import React from 'react';
import './dayInMonth.css';

const DayInMonth = (props) => {
    return (
      <td className="cell">
          <div className="corner">{props.day === 0 ? null : props.day}</div>
      </td>  
    );
}

export default DayInMonth;