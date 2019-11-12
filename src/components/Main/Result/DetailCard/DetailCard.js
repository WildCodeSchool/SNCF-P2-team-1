import React from "react";
import "./DetailCard.css";
import DetailCardRecap from "./DetailCardRecap/DetailCardRecap";
import DetailCardRoadmap from "./DetailCardRoadmap/DetailCardRoadmap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const DetailCard = ({ match }) => {
  let history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return (
    <div className="container container-DetailCard">
      <div className="row">
        <p className="returnToResults" onClick={handleClick}>
          <i>
            <FontAwesomeIcon icon={faChevronLeft} />
          </i>{" "}
          RETOUR AUX RÉSULTATS
        </p>
        <DetailCardRecap />
        <DetailCardRoadmap match={match} />
      </div>
    </div>
  );
};

export default DetailCard;
