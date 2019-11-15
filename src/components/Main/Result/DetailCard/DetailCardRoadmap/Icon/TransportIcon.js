import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain } from "@fortawesome/free-solid-svg-icons";
import Bus from "../img/bus.svg";
import Metro from "../img/Metro.svg";
import RER from "../img/RER.svg";
import TRAM from "../img/Tram.svg";
import Train from "../img/Train.svg";
import RERCard from "../img/RERCard.svg";
import busCard from "../img/busCard.svg";
import TERCard from "../img/TERCard.svg";
import TRAMCard from "../img/TramCard.svg";
import TrainCard from "../img/TrainCard.svg";
import MetroCard from "../img/MetroCard.svg";
import "../DetailCardRoadmap.css";
import "../../../ResultCard/ResultCard.css";

function TransportIcon(props) {
  switch (props.icon) {
    case "BUS":
      return <img src={Bus} alt="Bus" />;
    case "METRO":
      return <img src={Metro} alt="Metro" />;
    case "RER":
      return <img src={RER} alt="RER" />;
    case "TRAIN":
      return <img src={Train} alt="Train" />;
    case "TRAM":
      return <img src={TRAM} alt="TRAM" />;
    case "WALKING":
      return <i className="walking">{""}</i>;
    case "RERCard":
      return <img className="card-icons" src={RERCard} alt="RER" />;
    case "METROCard":
      return <img className="card-icons" src={MetroCard} alt="METRO" />;
    case "TERCard":
      return <img className="card-icons" src={TERCard} alt="TER" />;
    case "BUSCard":
      return <img className="card-icons" src={busCard} alt="BUS" />;
    case "TRAMCard":
      return <img className="card-icons" src={TRAMCard} alt="TRAM" />;
    case "TRAINCard":
      return <img className="card-icons" src={TrainCard} alt="TRAIN" />;

    default:
      return (
        <i>
          <FontAwesomeIcon icon={faTrain} />
        </i>
      );
  }
}

export default TransportIcon;
