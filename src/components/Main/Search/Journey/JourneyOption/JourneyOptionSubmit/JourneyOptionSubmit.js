import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { ToastsContainer, ToastsStore } from "react-toasts";

function JourneyOptionSubmit() {
  const dataRequest = useSelector(state => state.reducerRequest);
  const dispatch = useDispatch();

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
    if (dataRequest.departure === dataRequest.arrival) {
      dispatch({
        type: "ERROR_DEPARTURE",
        errorDeparture: true
      });
      dispatch({
        type: "ERROR_ARRIVAL",
        errorArrival: true
      });
      ToastsStore.error("Les itinéraires ne peuvent pas être identiques");
      return;
    } else {
      dispatch({
        type: "ERROR_ARRIVAL",
        errorArrival: false
      });
      dispatch({
        type: "ERROR_DEPARTURE",
        errorDeparture: false
      });
    }
    if (dataRequest.departureId) {
      console.log(dataRequest.departure);
    } else {
      dispatch({
        type: "ERROR_DEPARTURE",
        errorDeparture: true
      });
      ToastsStore.error("Départ: veuillez précisez votre demande");
      return;
    }
    //verifie l'input arrivée
    if (dataRequest.arrivalId) {
      console.log(dataRequest.arrival);
    } else {
      dispatch({
        type: "ERROR_ARRIVAL",
        errorArrival: true
      });
      ToastsStore.error("Arrivée: veuillez précisez votre demande");
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
        onClick={() => {
          getJourney();
        }}
      >
        RECHERCHER
      </button>
      <ToastsContainer store={ToastsStore} />
    </div>
  );
}

export default JourneyOptionSubmit;
