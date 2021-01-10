import React from 'react';
import { allActivityTypes, activityColorMap } from '../../../constants';
import Tag from '../../common/tag/tag';
import TagDropdown from '../../common/dropdown/tagDropdown'

const ActivityHeader = (props) => {
    if (props.singleSelectedActivity) {
        return (
                    <Tag color={activityColorMap[props.singleSelectedActivity]} 
                        onClick={() => props.selectMultiActivity()}
                        value={props.singleSelectedActivity}
                        remove={false}
                    />
        );
    }

    const maxTags = 3;
    const firstThreeSelectedTypes = props.activityTypes.slice(0, maxTags);
    const canRemoveSelectedTypes = firstThreeSelectedTypes.length > 1;
    const moreActivitiesDropdownTypes = allActivityTypes.filter(t => !firstThreeSelectedTypes.includes(t))
        .map(x => {
            return {
                selected: props.activityTypes.includes(x), 
                value: x,
                id: x
            }});

    return (
        <>
            {firstThreeSelectedTypes.map(type => {
                return (
                        <Tag
                            key={type}
                            onClick={props.selectSingleActivityDrilldown}
                            value={type}
                            color={activityColorMap[type]}
                            remove={canRemoveSelectedTypes}
                            onRemove={props.removeActivityType}
                        />
                );
            })} 
            {moreActivitiesDropdownTypes.length > 0 ? 
            <TagDropdown
                selectValue={props.addActivityType}
                deselectValue={props.removeActivityType}
                values={moreActivitiesDropdownTypes}
                tagText="More"
                tagColor="default-grey"
                remove={false}
            /> : null}
        </>
    );
}

export default ActivityHeader;