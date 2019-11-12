const globalInfos = {
  receiveData: false,
  showLoading: false,
  resultsJourneys: null,
  errorDeparture: false,
  errorArrival: false
};

const reducerGlobal = (state = globalInfos, action) => {
  if (action.type === "ADD_RESULTS_REQUEST") {
    return {
      ...state,
      resultsJourneys: action.resultsJourneys
    };
  }
  if (action.type === "RECEIVE_DATA") {
    return {
      ...state,
      receiveData: action.receiveData
    };
  }
  if (action.type === "LOADING") {
    return {
      ...state,
      showLoading: action.showLoading
    };
  }
  if (action.type === "ERROR_ARRIVAL") {
    return {
      ...state,
      errorArrival: action.errorArrival
    };
  }
  if (action.type === "ERROR_DEPARTURE") {
    return {
      ...state,
      errorDeparture: action.errorDeparture
    };
  }
  return state;
};

export default reducerGlobal;
