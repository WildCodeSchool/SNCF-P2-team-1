import React from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function DetailCardRoadmap({ match }) {
  let history = useHistory();
  //Data Itineraire
  const data = useSelector(
    state =>
      state.reducerGlobal.resultsJourneys &&
      state.reducerGlobal.resultsJourneys.journeys[match.params.index]
  );
  //retourne a l'acceuil si aucune données reçus
  if (!data) {
    history.push("/");
    return null;
  }

  return (
    <div className="col-12 detail-card-result">
      TEST ITINERAIRE {data.sections[0].departure.label} to{" "}
      {data.sections[0].arrival.label}
    </div>
  );
}
//pas besoin de connecter a redux en Hooks
export default DetailCardRoadmap;
