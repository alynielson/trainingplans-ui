import React from 'react';
import './dayInMonth.scss';
import Tag from '../../common/tag/tag';
import { activityColorMap } from '../../../constants';

const PlannedDay = (props) => {
    const morningWorkouts = getSortedWorkoutsByTimeOfDay("Morning", props.workouts);
    const afternoonWorkouts = getSortedWorkoutsByTimeOfDay("Afternoon", props.workouts);
    const anytimeWorkouts = getSortedWorkoutsByTimeOfDay("Any", props.workouts);

    const morningWorkoutDisplay = getWorkoutElements(morningWorkouts);
    const afternoonWorkoutDisplay = getWorkoutElements(afternoonWorkouts);
    const anytimeWorkoutDisplay = getWorkoutElements(anytimeWorkouts);

    return (
        <div>
          <ul>
            { morningWorkoutDisplay && morningWorkoutDisplay.length > 0 ? 
            <li className="time-label">Morning</li> : null}
            {morningWorkoutDisplay}
            
            { afternoonWorkoutDisplay && afternoonWorkoutDisplay.length > 0 ? 
            <li className="time-label">Afternoon</li> : null}
            {afternoonWorkoutDisplay}

            { anytimeWorkoutDisplay && anytimeWorkoutDisplay.length > 0 ? 
            <li className="time-label">Any</li> : null}
            {anytimeWorkoutDisplay}
          </ul>
        </div>
      );
}

const getWorkoutElements = (workouts) => {
    return workouts.map(w => {
        return (
            <li key={w.id}>
               <Tag 
               customClass="tag-activity"
               color={activityColorMap[w.activityType]}
               value={getWorkoutDisplayName(w)}
               remove={false}></Tag> 
            </li>
        );
    })
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

export default PlannedDay;