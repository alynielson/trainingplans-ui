import React from 'react';
import './dayInMonth.css';
import Tag from 'react-bulma-components/lib/components/tag';

const PlannedDay = (props) => {
    const morningWorkouts = getSortedWorkoutsByTimeOfDay("Morning", props.workouts);
    const lunchWorkouts = getSortedWorkoutsByTimeOfDay("Lunch", props.workouts);
    const eveningWorkouts = getSortedWorkoutsByTimeOfDay("Evening", props.workouts);
    const anytimeWorkouts = getSortedWorkoutsByTimeOfDay("Any", props.workouts);
    return (
        <div>
          <ul>
            {morningWorkouts.map(w => {
                return (
                    <li>
                       <Tag className="activity" color="primary">{getWorkoutDisplayName(w)}</Tag> 
                    </li>
                );
            })}

            {getSpacer(morningWorkouts, [lunchWorkouts, eveningWorkouts, anytimeWorkouts])}

            {lunchWorkouts.map(w => {
                return (
                    <li>
                       <Tag className="activity" color="primary">{getWorkoutDisplayName(w)}</Tag> 
                    </li>
                );
            })}

            {getSpacer(lunchWorkouts, [eveningWorkouts, anytimeWorkouts])}

            {eveningWorkouts.map(w => {
                return (
                    <li>
                       <Tag className="activity" color="primary">{getWorkoutDisplayName(w)}</Tag> 
                    </li>
                );
            })}

            {getSpacer(eveningWorkouts, [anytimeWorkouts])}

            {anytimeWorkouts.map(w => {
                return (
                    <li>
                       <Tag className="activity" color="primary">{getWorkoutDisplayName(w)}</Tag> 
                    </li>
                );
            })}
          </ul>
        </div>
      );
}

const getSortedWorkoutsByTimeOfDay = (timeOfDay, workouts) => {
    return workouts === null 
        ? [] 
        : workouts.filter(x => x.timeOfDay === timeOfDay).sort((a, b) => a.order - b.order);
}

const getWorkoutDisplayName = (workout) => {
    let amount = workout.workoutSummary.totalDistanceQuantity > 0 ? 
        workout.workoutSummary.totalDistanceQuantity + " " + workout.workoutSummary.totalDistanceUom
        : workout.workoutSummary.totalTimeQuantity + " " + workout.workoutSummary.totalTimeUom;
    return `${workout.name}: ${amount}`;
}

const getSpacer = (earliestGroup, laterGroups) => {
    return earliestGroup.length > 0 && laterGroups.some(x => x.length > 0) ? 
    <li>
        <Tag className="activity spacer"></Tag>
    </li>
    : null;
}

export default PlannedDay;