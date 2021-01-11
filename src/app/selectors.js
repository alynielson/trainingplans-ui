import { allActivityTypes } from '../constants';

export const getUserDefaultsState = store => store.userDefaults;

export const selectMonthViewWorkouts = (store) => {
    let options = store.calendarView.options;
    let activities = getFilteredCalendarViewActivities(options);
    switch (store.calendarView.options.workoutCalendar) {
        case "planOnly":
            return store.calendarView.workouts.planned.filter(x => activities.includes(x.activityType));
        case "completedOnly":
            return [];
        case "comparison":
            return [];
        default:
            break;
    }
    return [];
}

export const getMainActivitiesInHeader = (options, maxTags) => {
    return options.activityTypes.slice(0, maxTags);
}

export const getActivitiesInHeaderDropdown = (options, mainActivities) => {
    return allActivityTypes.filter(t => !mainActivities.includes(t))
        .map(x => {
            return {
                selected: options.activityTypes.includes(x),
                value: x,
                id: x
            }
        });
}

const getFilteredCalendarViewActivities = options => {
    let singleSelectedActivity = options.singleSelectedActivity;
    if (singleSelectedActivity) {
        return [singleSelectedActivity];
    }
    return options.activityTypes;
}