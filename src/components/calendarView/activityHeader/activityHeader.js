import React from 'react';
import { activityColorMap, activityTotalViewOptions } from '../../../constants';
import Tag from '../../common/tag/tag';
import Dropdown from '../../common/dropdown/dropdown';
import { connect } from 'react-redux';
import { 
    addActivityType,
    removeActivityType,
    selectMultiActivity,
    selectSingleActivityDrilldown,
    changeTypeTotalView } from 'app/reducers/calendarView/actions';
import TagDropdownChecklist from '../../common/dropdown/tagDropdownChecklist'
import { getActivitiesInHeaderDropdown, getMainActivitiesInHeader } from 'app/selectors';

const maxTags = 3;

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

    const canRemoveSelectedTypes = props.firstThreeSelectedTypes.length > 1;

    return (
        <>
            {props.firstThreeSelectedTypes.map(type => {
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
            {props.moreActivitiesDropdownTypes.length > 0 ? 
            <TagDropdownChecklist
                selectValue={props.addActivityType}
                deselectValue={props.removeActivityType}
                values={props.moreActivitiesDropdownTypes}
                tagText="More"
                tagColor="default-grey"
                remove={false}
            /> : null}
        </>
    );
}

const mapStateToProps = (state) => {
    const viewOptions = state.calendarView.options;
    const singleSelectedActivity = viewOptions.singleSelectedActivity;
    const typeTotalViews = viewOptions.totalDisplay;
    const firstThreeSelectedTypes = getMainActivitiesInHeader(viewOptions, maxTags);
    const moreActivitiesDropdownTypes = getActivitiesInHeaderDropdown(viewOptions, firstThreeSelectedTypes);
    return {
        firstThreeSelectedTypes,
        singleSelectedActivity,
        typeTotalViews,
        moreActivitiesDropdownTypes,
        addActivityType,
        removeActivityType,
        selectMultiActivity,
        selectSingleActivityDrilldown,
        changeTypeTotalView
    };
}

export default connect(mapStateToProps, { addActivityType,
    removeActivityType,
    selectMultiActivity,
    selectSingleActivityDrilldown,
    changeTypeTotalView })(ActivityHeader);