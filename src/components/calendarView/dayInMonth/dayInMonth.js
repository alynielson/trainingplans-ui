import React from 'react';
import './dayInMonth.css';

const DayInMonth = (props) => {
    return (
      <td className="cell">
          <div className="corner">{props.day === 0 ? null : props.day}</div>

            <Test day={props.day} />
      </td>  
    );
}

const Test = (props) => {
  if (props.day !== 6) {
    return null;
  }
  return (
    <div className="cell-contents">
      <ul>
        <li>test</li>
        <li>t2</li>
      </ul>
    </div>
  );
}

export default DayInMonth;