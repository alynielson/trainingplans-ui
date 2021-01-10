
const initialState = {
  firstDayOfWeek: 1,
  mainActivityTypes: ["Run", "Bike"],
  typeDefaults: {
    Run: {
      distanceUom: "Miles",
      timeUom: "Minutes",
      timePerDistance: 8
    },
    Bike: {
      distanceUom: "Miles",
      timeUom: "Minutes",
      timePerDistance: 3.5
    },
    Swim: {
      distanceUom: "Meters",
      timeUom: "Minutes",
      timePerDistance: 60
    }
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}