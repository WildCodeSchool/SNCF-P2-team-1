const globalInfos = {
  receiveData: false,
  showLoading: false,
  resultsJourneys: null
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
  return state;
};

export default reducerGlobal;
