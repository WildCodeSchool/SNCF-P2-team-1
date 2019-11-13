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
    //verifie l'heure choisie
    const regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!regex.test(dataRequest.time)) {
      dataRequest.time = `${new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })}`;
    }
    //verifie l'input départ
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
    //verifie l'input arrivée
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

export default connect(null, null)(JourneyOptionSubmit);
