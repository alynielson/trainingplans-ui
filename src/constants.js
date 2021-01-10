export const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export const allActivityTypes = [
    "Run",
    "Bike",
    "Swim",
    "Lift",
    "Other"
];

export const uomConversions = {
    "Meters" : {
        "Miles": 0.00062137,
        "Kilometers": 0.001,
        "Meters100": 0.01
    },
    "Miles": {
        "Kilometers": 1.609344,
        "Meters": 1609.344,
        "Meters100": 16.09344
    },
    "Kilometers": {
        "Miles": 0.62137,
        "Meters": 1000,
        "Meters100": 10
    }, 
    "Meters100": {
        "Miles": 0.062137,
        "Meters": 100,
        "Kilometers": 0.1
    },
    "Minutes": {
        "Hours": 0.01667
    },
    "Hours": {
        "Minutes": 60
    }
}

export const activityColorMap = {
    "Run": "orange-main-color",
    "Bike": "purple-main-color",
    "Swim": "green-main-color",
    "Lift": "light-blue-secondary",
    "Other": "pink-secondary"
}

export const colors = [
    "orange-main-color",
    "purple-main-color",
    "green-main-color",
    "light-blue-secondary",
    "pink-secondary",
    "dark-blue-secondary",
    "red-secondary"
]

export const workoutCalendarOptionTypes = [
    {
        id: 1,
        value: "planOnly",
        text: "Plan"
    },
    {
        id: 2,
        value: "completedOnly",
        text: "Completed"
    },
    {
        id: 3,
        value: "comparison",
        text: "Comparison"
    }
];
