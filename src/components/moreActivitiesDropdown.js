import React from 'react';
import 'react-bulma-components/lib/components/dropdown';
import { Checkbox, Control } from 'react-bulma-components/lib/components/form';
import Tag from 'react-bulma-components/lib/components/tag';
import './activityDropdown.css';

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

export default MoreActivitiesDropdown;