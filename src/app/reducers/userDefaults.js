
const initialState = {
  firstDayOfWeek: 1,
  mainActivityTypes: ["Run", "Bike"],
  typeDefaults: {
    Run: {
      distanceUom: "Miles",
      timeUom: "Hours",
      timePerDistance: 0.125
    },
    Bike: {
      distanceUom: "Miles",
      timeUom: "Hours",
      timePerDistance: 0.06
    },
    Swim: {
      distanceUom: "Meters",
      timeUom: "Hours",
      timePerDistance: 0.0002778
    }
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}