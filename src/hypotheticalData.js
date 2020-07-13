export const plannedWorkouts = [
    {
        id: 1,
        name: "Easy run",
        activityType: "Run",
        workoutType: "Easy",
        timeOfDay: "Morning",
        scheduledDate: "07/06/2020",
        order: 1,
        plannedRepetitions: [
            {
                id: 1,
                distanceQuantity: 8.0,
                distanceUom: "Miles",
                timeQuantity: 60,
                timeUom: "Minutes",
                notes: "Only pick it up if you feel good. No faster than 7 minute miles.",
                order: 1,
                pace: "7:30",
                paceUom: "Minutes/Miles",
                restDistanceQuantity: null,
                restDistanceUom: null,
                restTimeQuantity: null,
                restTimeUom: null,
                restPace: null,
                restPaceUom: null,
                quantity: 1
            }
        ],
        workoutSummary: {
            totalDistanceQuantity: 8,
            totalDistanceUom: "Miles",
            totalTimeQuantity: 60,
            totalTimeUom: "Minutes",
            averagePace: "7:30",
            averagePaceUom: "Minutes/Miles",
            repetitionIds: [1]
        }
    },
    {
        id: 2,
        name: "Track: 12x400",
        activityType: "Run",
        workoutType: "Intervals",
        timeOfDay: "Morning",
        scheduledDate: "07/07/2020",
        order: 1,
        plannedRepetitions: [
            {
                id: 2,
                timeQuantity: 20,
                timeUom: "Minutes",
                notes: "Warm up jog. Ease into a faster pace.",
                order: 1,
                pace: "8:00",
                paceUom: "Minutes/Miles",
                quantity: 1
            },
            {
                id: 3,
                distanceQuantity: 400,
                distanceUom: "Meters",
                timeQuantity: 75,
                timeUom: "Seconds",
                notes: "Hit the pace as close to 75 each time. No faster.",
                order: 2,
                pace: "5:00",
                paceUom: "Minutes/Miles",
                restDistanceQuantity: 200,
                restDistanceUom: "Meters",
                restTimeQuantity: "75",
                restTimeUom: "Seconds",
                restPace: "10:00",
                restPaceUom: "Minutes/Miles",
                quantity: 12
            },
            {
                id: 3,
                timeQuantity: 20,
                timeUom: "Minutes",
                notes: "Cool down",
                order: 3,
                pace: "8:00",
                paceUom: "Minutes/Miles",
                quantity: 1
            }
        ],
        workoutSummary: {
            totalDistanceQuantity: 9.5,
            totalDistanceUom: "Miles",
            totalTimeQuantity: 70,
            totalTimeUom: "Minutes",
            averagePace: "7:22",
            averagePaceUom: "Minutes/Miles",
            repetitionIds: [2,3,4]
        }
    },
    {
        id: 3,
        name: "Shake out",
        activityType: "Run",
        workoutType: "Recovery",
        timeOfDay: "Afternoon",
        scheduledDate: "07/07/2020",
        order: 1,
        plannedRepetitions: [
            {
                id: 5,
                distanceQuantity: 3.5,
                distanceUom: "Miles",
                timeQuantity: 30,
                timeUom: "Minutes",
                notes: "Just go for a jog.",
                order: 1,
                pace: "8:34",
                paceUom: "Minutes/Miles",
                restDistanceQuantity: null,
                restDistanceUom: null,
                restTimeQuantity: null,
                restTimeUom: null,
                restPace: null,
                restPaceUom: null,
                quantity: 1
            }
        ],
        workoutSummary: {
            totalDistanceQuantity: 3.5,
            totalDistanceUom: "Miles",
            totalTimeQuantity: 30,
            totalTimeUom: "Minutes",
            averagePace: "8:34",
            averagePaceUom: "Minutes/Miles",
            repetitionIds: [5]
        }
    }
];