import React from 'react';
import 'react-bulma-components/lib/components/dropdown';
import { allActivityTypes, colors } from '../constants';
import Tag from 'react-bulma-components/lib/components/tag';
import MoreActivitiesDropdown from './moreActivitiesDropdown';
import './activityDropdown.css';

const ActivityHeader = (props) => {
    const maxTags = 3;
    const firstThreeSelectedTypes = props.activityTypes.slice(0, maxTags);
    const canRemoveSelectedTypes = firstThreeSelectedTypes.length > 1;
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
                            <Tag color={colors[i]} className="is-small" onClick={() => console.log("test")}>{type}</Tag>
                            <Tag className="is-small" 
                                remove={true} 
                                color={colors[i]}
                                onClick={canRemoveSelectedTypes 
                                    ? () => props.removeActivityType(type)
                                    : null}/>
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

export default ActivityHeader;