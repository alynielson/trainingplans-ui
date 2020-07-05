import React from 'react';
import 'react-bulma-components/lib/components/dropdown';
import { allActivityTypes } from '../constants';
import { Checkbox, Control } from 'react-bulma-components/lib/components/form';
import Tag from 'react-bulma-components/lib/components/tag';
import './activityDropdown.css';

const ActivityDropdown = (props) => {
    const selectedWorkoutTypes = props.activityTypes;
    const unselectedWorkoutTypes = allActivityTypes.filter(x => !selectedWorkoutTypes.includes(x));
    const firstSelected = selectedWorkoutTypes[0];
    const selectedWithoutFirst = selectedWorkoutTypes.filter(x => x != firstSelected);
    return (
        <div className="activity-wrapper">
            <div className="dropdown is-hoverable">
                <div className="dropdown-trigger" role="presentation">
                    <button className="button">
                        <Tag.Group gapless>
                            <Tag className="is-small">{firstSelected}</Tag>
                            <Tag className="is-small" remove={true} />
                        </Tag.Group>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        {unselectedWorkoutTypes.map((type, i) => {
                            return (
                                <div key={i} className="dropdown-item" role="presentation">
                                    <div className="control">
                                        <Checkbox />
                                        <label className="dropdownText">{type}</label>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            {selectedWithoutFirst.map((type, i) => {
                return (
                    <button className="button activity-dropdown">
                        <Tag.Group gapless key={i}>
                            <Tag className="is-small">{type}</Tag>
                            <Tag className="is-small" remove={true} />
                        </Tag.Group>
                    </button>
                );
            })} 
        </div>
    );
}

export default ActivityDropdown;