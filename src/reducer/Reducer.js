const initialState = {
  arrival: "", //x.name
  arrivalId: "", //x.id
  arrivalLatitude: null, //x.coord.lat
  arrivalLongitude: null, //x.coord.lon
  bypassLines: [],
  bypassModes: [],
  date: "",
  dateType: "",
  departure: "",
  departureId: "",
  departureLatitude: null, //int
  departureLongitude: null, //int
  preferenceJourney: "FASTEST",
  time: `${new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  })}`
};

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_TIME") {
    return {
      ...state,
      time: action.time
    };
  }
  if (action.type === "ADD_ARRIVAL_NAME") {
    return {
      ...state,
      arrival: action.arrival
    };
  }
  if (action.type === "ADD_ARRIVAL_ID") {
    return {
      ...state,
      arrivalId: action.id
    };
  }
  if (action.type === "ADD_ARRIVAL_LAT") {
    return {
      ...state,
      arrivalLatitude: action.arrivalLatitude
    };
  }
  if (action.type === "ADD_ARRIVAL_LON") {
    return {
      ...state,
      arrivalLongitude: action.arrivalLongitude
    };
  }
  if (action.type === "ADD_DEPARTURE_NAME") {
    return {
      ...state,
      departure: action.departure
    };
  }
  if (action.type === "ADD_DEPARTURE_ID") {
    return {
      ...state,
      departureId: action.id
    };
  }
  if (action.type === "ADD_DEPARTURE_LAT") {
    return {
      ...state,
      departureLatitude: action.departureLatitude
    };
  }
  if (action.type === "ADD_DEPARTURE_LON") {
    return {
      ...state,
      departureLongitude: action.departureLongitude
    };
  }

  return state;
};

export default reducer;

/* "id": "stop_area:DUA:SA:8775804",
              "placeType": "StopArea",
              "name": "NANTERRE VILLE (Nanterre)",
              "shortName": "NANTERRE VILLE",
              "coord": {
                  "lat": 48.895506,
                  "lon": 2.195916
              }, */
