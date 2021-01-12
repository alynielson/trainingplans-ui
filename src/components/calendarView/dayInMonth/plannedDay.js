import React from 'react';
import './dayInMonth.scss';
import { connect } from 'react-redux'
import Tag from '../../common/tag/tag';
import { activityColorMap } from '../../../constants';

const PlannedDay = (props) => {
    const morningWorkouts = getSortedWorkoutsByTimeOfDay("Morning", props.workouts);
    const afternoonWorkouts = getSortedWorkoutsByTimeOfDay("Afternoon", props.workouts);
    const anytimeWorkouts = getSortedWorkoutsByTimeOfDay("Any", props.workouts);

    const morningWorkoutDisplay = getWorkoutElements(morningWorkouts, props.activityAmountDisplay);
    const afternoonWorkoutDisplay = getWorkoutElements(afternoonWorkouts, props.activityAmountDisplay);
    const anytimeWorkoutDisplay = getWorkoutElements(anytimeWorkouts, props.activityAmountDisplay);

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

const getWorkoutElements = (workouts, activityAmountDisplay) => {
    return workouts.map(w => {
        return (
            <li key={w.id}>
               <Tag 
               customClass="tag-activity"
               color={activityColorMap[w.activityType]}
               value={getWorkoutDisplayName(w, activityAmountDisplay[w.activityType])}
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

const getWorkoutDisplayName = (workout, activityAmountDisplay) => {
    let qtyUom;

    switch (activityAmountDisplay) {
        case "Distance":
            qtyUom = workout.workoutSummary.totalDistanceQuantity 
              ? `${workout.workoutSummary.totalDistanceQuantity} ${workout.workoutSummary.totalDistanceUom}` 
              : `${workout.workoutSummary.totalTimeQuantity} ${workout.workoutSummary.totalTimeUom}`; 
            break;
        case "Time":
            qtyUom = workout.workoutSummary.totalTimeQuantity 
              ? `${workout.workoutSummary.totalTimeQuantity} ${workout.workoutSummary.totalTimeUom}` 
              : `${workout.workoutSummary.totalDistanceQuantity} ${workout.workoutSummary.totalDistanceUom}`;
            break;
        default:
            qtyUom = "--"
            break;
    }

    return `${workout.name}: ${qtyUom}`;
}

const mapStateToProps = (state) => {
    return {
        activityAmountDisplay: state.calendarView.options.totalDisplay
    }
}

export default connect(mapStateToProps)(PlannedDay);