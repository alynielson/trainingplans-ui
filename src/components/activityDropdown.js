import React from 'react';
import 'react-bulma-components/lib/components/dropdown';
import { allActivityTypes } from '../constants';
import { Checkbox, Control } from 'react-bulma-components/lib/components/form';
import Tag from 'react-bulma-components/lib/components/tag';
import './activityDropdown.css';

const ActivityDropdown = (props) => {
    const maxTags = 3;
    const firstThreeSelectedTypes = props.activityTypes.slice(0, maxTags);
    const moreActivitiesDropdownTypes = allActivityTypes.filter(t => !firstThreeSelectedTypes.includes(t))
        .map(x => {
            return {
                selected: props.activityTypes.includes(x), 
                type: x
            }});
    return (
        <div className="activity-wrapper">
            {firstThreeSelectedTypes.map((type, i) => {
                return (
                    <button key={i} className="button activity-dropdown">
                        <Tag.Group gapless>
                            <Tag className="is-small">{type}</Tag>
                            <Tag className="is-small" remove={true} onClick={() => props.removeActivityType(type)}/>
                        </Tag.Group>
                    </button>
                );
            })} 
            {moreActivitiesDropdownTypes.length > 0 ? 
            <MoreActivitiesDropdown 
                addActivityType={props.addActivityType}
                removeActivityType={props.removeActivityType}
                moreActivitiesWorkoutTypes={moreActivitiesDropdownTypes} />
            : null}
        </div>
    );
}

const MoreActivitiesDropdown = (props) => {
    return (
        <div className="dropdown is-hoverable">
            <div className="dropdown-trigger" role="presentation">
                <button className="button">
                    <Tag.Group gapless>
                        <Tag className="is-small">More</Tag>
                    </Tag.Group>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    {props.moreActivitiesWorkoutTypes.map((t, i) => {
                        return (
                            <div key={i} className="dropdown-item" role="presentation">
                                <Checkbox checked={t.selected} 
                                    onChange={t.selected 
                                        ? () => props.removeActivityType(t.type) 
                                        : () => props.addActivityType(t.type)}/>
                                <label className="dropdownText">{t.type}</label>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ActivityDropdown;