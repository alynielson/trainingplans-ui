import React from 'react';
import './dayInMonth.css';
import Tag from 'react-bulma-components/lib/components/tag';

const DayInMonth = (props) => {
    return (
      <td className="cell">
          <div className="corner">{props.day === 0 ? null : props.day}</div>

            <Test day={props.day} />
      </td>  
    );
}

const Test = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Tag className="activity" color="primary">test</Tag>
        </li>
        <li>
        <Tag className="activity" color="warning">test 2</Tag>
        </li>
        <li>
          <Tag className="activity" color="primary">test</Tag>
        </li>
        <li>
        <Tag className="activity spacer"></Tag>
        </li>
        <li>
          <Tag className="activity" color="primary">test</Tag>
        </li>
        <li>
        <Tag className="activity" color="warning">test 2</Tag>
        </li>
        <li>
          <Tag className="activity" color="primary">test</Tag>
        </li>
        <li>
        <Tag className="activity" color="warning">test 2</Tag>
        </li>
      </ul>
    </div>
  );
}

export default DayInMonth;