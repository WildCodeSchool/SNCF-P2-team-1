import React from "react";
import axios from "axios";
import { connect, useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";

function JourneyOptionSubmit() {
  const dataRequest = useSelector(state => state.reducerRequest);
  const dispatch = useDispatch();
  const alert = useAlert();

  const cssAlert = {
    color: "white"
  };

  const getJourney = () => {
    if (dataRequest.departure) {
      console.log(dataRequest.departure);
    } else {
      dispatch({
        type: "ERROR_DEPARTURE",
        errorDeparture: true
      });
      alert.error(
        <div style={cssAlert}>Départ: veuillez préciser votre demande</div>
      );
      return;
    }
    if (dataRequest.arrival) {
      console.log(dataRequest.arrival);
    } else {
      dispatch({
        type: "ERROR_ARRIVAL",
        errorArrival: true
      });
      alert.error("Arrivée: veuillez préciser votre demande");
      return;
    }

    dispatch({
      type: "LOADING",
      showLoading: true
    });
    dispatch({
      type: "RECEIVE_DATA",
      receiveData: false
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
        className="btn btn-primary my-3"
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
