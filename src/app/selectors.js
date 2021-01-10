
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

const getFilteredCalendarViewActivities = options => {
    let singleSelectedActivity = options.singleSelectedActivity;
    if (singleSelectedActivity) {
        return [singleSelectedActivity];
    }
    return options.activityTypes;
}