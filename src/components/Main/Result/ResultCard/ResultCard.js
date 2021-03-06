import React from "react";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ResultCard.css";
import TransportIcon from "../DetailCard/DetailCardRoadmap/Icon/TransportIcon";

export function toPrice(value) {
  const price = value.toString();

  if (price.length === 1) {
    return "0.0" + price + "€";
  }
  if (price.length === 2) {
    return "0." + price + "€";
  }
  if (price.length === 3) {
    return [price.slice(0, 1) + "." + price.slice(1)].join() + "€";
  }
  if (price.length === 4) {
    return [price.slice(0, 2) + "." + price.slice(2)].join() + "€";
  } else {
    return "-";
  }
}

const transportStyle = (value, value2) => {
  if (value.length > 7) {
    console.log("above 7");
    return {
      color: value2,
      fontWeight: "bold",
      fontSize: "16px",
      marginTop: "-4px"
    };
  } else {
    console.log("below 7");
    return {
      color: value2,
      fontWeight: "bold",
      fontSize: "20px",
      marginTop: "1px"
    };
  }
};

function ResultCard() {
  const result = useSelector(state => state.reducerGlobal.resultsJourneys);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 result-card">
          {result.journeys.map((journey, index) => {
            const timeDuration = journey.totalDuration.toLowerCase();
            const timeWalkingDuration = journey.walkingDuration.toLowerCase();
            return (
              <ul key={index}>
                <li>
                  <ul className="result-time">
                    <li className="timeArrival">
                      <span>
                        <i></i>
                      </span>
                      <Moment format="HH:mm">{journey.dateDeparture}</Moment>
                    </li>
                    <li></li>
                    <li className="timeDeparture">
                      <i>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </i>
                      <Moment format="HH:mm">{journey.dateArrival}</Moment>
                    </li>
                  </ul>
                  <ul className="result-duration">
                    <li>
                      {timeDuration.indexOf("M") + 1 === timeDuration.length
                        ? timeDuration.replace("PT", "")
                        : timeDuration
                            .slice(2, journey.totalDuration.indexOf("M"))
                            .replace("h", " h ")}{" "}
                      min
                    </li>
                    <li className="walkingDuration">
                      dont{" "}
                      {timeWalkingDuration.slice(
                        2,
                        journey.walkingDuration.indexOf("M")
                      )}{" "}
                      min
                      <p>de marche</p>
                    </li>
                  </ul>
                </li>
                <li className="result-roadmap">
                  {journey.sections.map((transport, index) => {
                    if (transport.transport) {
                      if (transport.transport.line) {
                        return (
                          <span className="roadmap-icons" key={index}>
                            {" "}
                            <TransportIcon
                              icon={`${transport.transport.mode}Card`}
                            />{" "}
                            <span
                              style={transportStyle(
                                journey.sections,
                                transport.color
                              )}
                            >
                              {transport.transport.line.label}
                            </span>{" "}
                          </span>
                        );
                      }
                      if (transport.transport.mode === "WALKING") {
                        return (
                          <span className="icon" key={index}>
                            {" "}
                            <FontAwesomeIcon icon={faWalking} />{" "}
                          </span>
                        );
                      }
                      return (
                        <span key={index}>{transport.transport.mode}</span>
                      );
                    }
                    return <i key={index}> </i>;
                  })}
                </li>
                <li>
                  <ul>
                    <li className="result-price">
                      {journey.price ? toPrice(journey.price) : "-"}
                    </li>
                    <li className="result-details">
                      <Link to={`/details${index}`}>Détails</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default connect(null, null)(ResultCard);
