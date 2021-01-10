export const plannedWorkouts = [
    {
        id: 1,
        name: "Easy run",
        activityType: "Run",
        workoutType: "Easy",
        timeOfDay: "Morning",
        scheduledDate: "01/22/2021",
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
        scheduledDate: "01/07/2021",
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
        scheduledDate: "01/07/2021",
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
    },
    {
        id: 4,
        name: "Easy run",
        activityType: "Run",
        workoutType: "Easy",
        timeOfDay: "Morning",
        scheduledDate: "01/08/2021",
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
        id: 5,
        name: "Base ride",
        activityType: "Bike",
        workoutType: "Easy",
        timeOfDay: "Afternoon",
        scheduledDate: "01/08/2021",
        order: 1,
        plannedRepetitions: [
            {
                id: 1,
                distanceQuantity: 17,
                distanceUom: "Miles",
                timeQuantity: 60,
                timeUom: "Minutes",
                notes: "Ride flat.",
                order: 1,
                pace: "17",
                paceUom: "Miles/Hour",
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
            totalDistanceQuantity: 17,
            totalDistanceUom: "Miles",
            totalTimeQuantity: 60,
            totalTimeUom: "Minutes",
            averagePace: "17",
            averagePaceUom: "Miles/Hour",
            repetitionIds: [1]
        }
    },
    {
        id: 6,
        name: "Long ride",
        activityType: "Bike",
        workoutType: "Long",
        timeOfDay: "Morning",
        scheduledDate: "01/09/2021",
        order: 1,
        plannedRepetitions: [
            {
                id: 1,
                distanceQuantity: 52.5,
                distanceUom: "Miles",
                timeQuantity: 180,
                timeUom: "Minutes",
                notes: "Rolling preferred.",
                order: 1,
                pace: "17.5",
                paceUom: "Miles/Hour",
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
            totalDistanceQuantity: 52.5,
            totalDistanceUom: "Miles",
            totalTimeQuantity: 180,
            totalTimeUom: "Minutes",
            averagePace: "17.5",
            averagePaceUom: "Miles/Hour",
            repetitionIds: [1]
        }
    },
    {
        id: 7,
        name: "10x100 sprints",
        activityType: "Swim",
        workoutType: "Intervals",
        timeOfDay: "Morning",
        scheduledDate: "01/05/2021",
        order: 1,
        plannedRepetitions: [
            {
                id: 1,
                distanceQuantity: 500,
                distanceUom: "Meters",
                notes: "Warm up",
                order: 1,
                restDistanceQuantity: null,
                restDistanceUom: null,
                restTimeQuantity: null,
                restTimeUom: null,
                restPace: null,
                restPaceUom: null,
                quantity: 1
            },
            {
                id: 2,
                distanceQuantity: 100,
                distanceUom: "Meters",
                notes: "HARD - rest 60 seconds between",
                order: 1,
                restDistanceQuantity: null,
                restDistanceUom: null,
                restTimeQuantity: 1,
                restTimeUom: "Minute",
                restPace: null,
                restPaceUom: null,
                quantity: 10
            }, 
            {
                id: 3,
                distanceQuantity: 500,
                distanceUom: "Meters",
                notes: "Cool down",
                order: 1,
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
            totalDistanceQuantity: 2000,
            totalDistanceUom: "Meters",
            repetitionIds: [1,2,3]
        }
    },
    {
        id: 9,
        name: "Shake out swim",
        activityType: "Swim",
        workoutType: "Recovery",
        timeOfDay: "Morning",
        scheduledDate: "01/09/2021",
        order: 2,
        plannedRepetitions: [
            {
                id: 1,
                distanceQuantity: 1500,
                distanceUom: "Meters",
                notes: "Very easy, any stroke. Switch strokes if you want",
                order: 1,
                timeQuantity: 30,
                timeUom: "Minutes",
                pace: "2",
                paceUom: "Minutes/100Meters",
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
            totalDistanceQuantity: 2000,
            totalDistanceUom: "Meters",
            repetitionIds: [1]
        }
    },
    {
        id: 10,
        name: "LR",
        activityType: "Run",
        workoutType: "Long",
        timeOfDay: "Morning",
        scheduledDate: "01/10/2021",
        order: 1,
        plannedRepetitions: [
            {
                id: 1,
                notes: "Long run. Pick it up if feeling good.",
                order: 1,
                timeQuantity: 100,
                timeUom: "Minutes",
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
            totalTimeQuantity: 100,
            totalTimeUom: "Minutes",
            repetitionIds: [1]
        }
    }
];