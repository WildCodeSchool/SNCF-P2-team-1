import React from "react";
import axios from "axios";
import { connect, useSelector, useDispatch } from "react-redux";

function JourneyOptionSubmit() {
  const dataRequest = useSelector(state => state.reducerRequest);
  const dispatch = useDispatch();

  const getJourney = () => {
    dispatch({
      type: "LOADING",
      showLoading: true
    });
    dispatch({
      type: "RECEIVE_DATA",
      showLoading: true
    });
    axios
      .post("/api/itinerary/search", dataRequest)
      .then(function(response) {
        /* console.log(response.data.journeys); */
        dispatch({
          type: "ADD_RESULTS_REQUEST",
          resultsJourneys: response.data
        });
        dispatch({
          type: "RECEIVE_DATA",
          receiveData: true
        });
        dispatch({
          type: "LOADING",
          showLoading: false
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end ">
      <button
        type="submit"
        className="btn btn-primary"
        onClick={() => getJourney()}
      >
        RECHERCHER
      </button>
    </div>
  );
}

export default connect(
  null,
  null
)(JourneyOptionSubmit);
