import React from 'react';
import { connect } from "react-redux";
import { getUserDefaultsState, selectMonthViewWorkouts } from 'app/selectors';
import { activityColorMap, uomConversions } from '../../../constants';
import DayInMonth from '../dayInMonth/dayInMonth';
import './monthView.scss'
import Tag from 'components/common/tag/tag';

const WeekView = (props) => {
  let workoutsPerType = {};
  const weekDisplay = props.weekDays.map((day, dayIndex) => {
      const dayWorkouts = day === 0 ? null : getWorkoutsForDay(day, props.month, props.year, props.workouts);
      if (dayWorkouts) {
          dayWorkouts.forEach(w => {
              let workoutsForType = workoutsPerType[w.activityType];
              workoutsForType ? workoutsForType.push(w) : workoutsPerType[w.activityType] = [ w ];
          });
      }
      return (<DayInMonth 
        day={day} 
        key={dayIndex} 
        workouts={dayWorkouts}
        />);
  });

  const totals = Object.entries(workoutsPerType).map(x => { 
      const value = getWeekTotals(x[1], props.typeDefaults[x[0]], props.totalDisplay[x[0]]);
      return value ? 
      <Tag 
        key={x[0]}
        customClass="tag-activity"
        remove={false}
        color={activityColorMap[x[0]]}
        value={value}
      /> : null;}
    );

  return (
    <tr>
        {weekDisplay}
        <td>{totals}</td>
    </tr>
  );
}

const getWeekTotals = (workouts, typeDefaults, totalDisplay) => {
    if (!totalDisplay) {
        totalDisplay = "Distance";
    }

    let uom = totalDisplay === "Time" ? typeDefaults.timeUom : typeDefaults.distanceUom

    if (!workouts || workouts.length === 0 || workouts.some(w => !w.workoutSummary)) {
        return `0 ${uom}`;
    }

    let isEstimate = false;
    let total;

    switch (totalDisplay) {
        case "Time":
            total = workouts.map(x => {
                if (x.workoutSummary.totalTimeQuantity) {
                    return convertActivityUom(x.workoutSummary.totalTimeQuantity, x.workoutSummary.totalTimeUom, typeDefaults.timeUom);
                }
                if (x.workoutSummary.totalDistanceQuantity) {
                    isEstimate = true;
                    return estimateTime(x.workoutSummary.totalDistanceQuantity, x.workoutSummary.totalDistanceUom, typeDefaults)
                }
                isEstimate = true;
                return 0;
            }).reduce((prev, curr) => prev + curr, 0);
            break;
        case "Distance":
            total = workouts.map(x => {
                if (x.workoutSummary.totalDistanceQuantity) {
                    return convertActivityUom(x.workoutSummary.totalDistanceQuantity, x.workoutSummary.totalDistanceUom, typeDefaults.distanceUom);
                }
                if (x.workoutSummary.totalTimeQuantity) {
                    isEstimate = true;
                    return estimateDistance(x.workoutSummary.totalTimeQuantity, x.workoutSummary.totalTimeUom, typeDefaults)
                }
                isEstimate = true;
                return 0;
            }).reduce((prev, curr) => prev + curr, 0);
            break;
        default:
            return null;
    }

    if (isEstimate) {
        uom = uom + " (estimate)";
    }

    let result = total >= 1000 ? Math.round(total).toString() : total.toFixed(1);
    if (result.endsWith(".0")) {
        result = result.slice(0, -2);
    }

    return `${result} ${uom}`;
}

const estimateTime = (distanceQuantity, distanceUom, typeDefaults) => {
    return convertActivityUom(distanceQuantity, distanceUom, typeDefaults.distanceUom) * typeDefaults.timePerDistance;
}

const estimateDistance = (timeQuantity, timeUom, typeDefaults) => {
    return convertActivityUom(timeQuantity, timeUom, typeDefaults.timeUom) / typeDefaults.timePerDistance;
}

const convertActivityUom = (quantity, currentUom, desiredUom) => {
    if (currentUom === desiredUom) {
        return quantity;
    }

    return quantity * uomConversions[currentUom][desiredUom];
}

const formatDateString = (value) => value < 10 ? `0${value}` : value;

const getWorkoutsForDay = (day, month, year, workouts) => {
    const monthFormatted = formatDateString(month + 1);
    const dayFormatted = formatDateString(day);
    return workouts.filter(x => x.scheduledDate === `${monthFormatted}/${dayFormatted}/${year}`);
}

const mapStateToProps = (state) => {
    const userDefaults = getUserDefaultsState(state); 
    const calendarView = state.calendarView;
    return { 
        typeDefaults: userDefaults.typeDefaults,
        month: calendarView.month,
        year: calendarView.year,
        workouts: selectMonthViewWorkouts(state),
        totalDisplay: calendarView.options.totalDisplay       
    };
}

export default connect(mapStateToProps)(WeekView);
