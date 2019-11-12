const requestInfos = {
  arrival: "", //x.name
  arrivalId: "", //x.id
  arrivalLatitude: null, //x.coord.lat
  arrivalLongitude: null, //x.coord.lon
  bypassLines: [],
  bypassModes: [],
  date: new Date().toISOString().split("T")[0],
  dateType: "DEPARTURE",
  departure: null,
  departureId: "",
  departureLatitude: null, //int
  departureLongitude: null, //int
  preferenceJourney: "FASTEST",
  time: `${new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  })}`
};

const reducerRequest = (state = requestInfos, action) => {
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
  if (action.type === "ADD_DATETYPE") {
    return {
      ...state,
      dateType: action.dateType
    };
  }
  if (action.type === "ADD_DATE") {
    return {
      ...state,
      date: action.date
    };
  }
  if (action.type === "EMPTY_DEPARTURE") {
    return {
      ...state,
      departure: action.empty,
      departureId: action.empty,
      departureLatitude: action.empty,
      departureLongitude: action.empty
    };
  }
  if (action.type === "EMPTY_ARRIVAL") {
    return {
      ...state,
      arrival: action.empty,
      arrivalId: action.empty,
      arrivalLatitude: action.empty,
      arrivalLongitude: action.empty
    };
  }
  return state;
};

export default reducerRequest;
