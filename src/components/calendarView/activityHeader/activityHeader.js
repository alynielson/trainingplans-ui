import React from 'react';
import { allActivityTypes, activityColorMap, activityTotalViewOptions } from '../../../constants';
import Tag from '../../common/tag/tag';
import Dropdown from '../../common/dropdown/dropdown';
import TagDropdownChecklist from '../../common/dropdown/tagDropdownChecklist'

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
                        <Dropdown
                            key={type}
                            useTag={true}
                            noMargin={true}
                            clickTag={props.selectSingleActivityDrilldown}
                            buttonText={type}
                            mainColor={activityColorMap[type]}
                            removeTag={canRemoveSelectedTypes}
                            onRemoveTag={props.removeActivityType}
                            values={activityTotalViewOptions[type]}
                            changeSelected={(val) => props.changeTypeTotalView(type, val)}
                            selectedValue={props.typeTotalViews[type]}
                            highlightColor={activityColorMap[type]}
                        />
                );
            })} 
            {moreActivitiesDropdownTypes.length > 0 ? 
            <TagDropdownChecklist
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