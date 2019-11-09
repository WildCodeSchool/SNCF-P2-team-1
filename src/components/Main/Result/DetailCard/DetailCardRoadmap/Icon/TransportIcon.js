import React from 'react';
import {faTrain, faBus, faWalking} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Bus from '../img/bus.svg';
import Metro from '../img/Metro.svg';
import RER from '../img/RER.svg';
import TRAM from '../img/Tram.svg';
import Train from '../img/Train.svg';

const fontAwesomeIcons = {
  TRAIN: faTrain,
  BUS: faBus,
};

function TransportIcon(props) {
  switch (props.icon) {
    case 'BUS':
      return <img src={Bus} alt="Bus" />;
    case 'METRO':
      return <img src={Metro} alt="Metro" />;
    case 'RER':
      return <img src={RER} alt="RER" />;
    case 'TRAIN':
      return <img src={Train} alt="Train" />;
    case 'TRAM':
      return <img src={TRAM} alt="TRAM" />;
    case 'WALKING':
      return (
        <i className="walking">
          <FontAwesomeIcon icon={faWalking} />
        </i>
      );
    default:
      return (
        <i>
          <FontAwesomeIcon icon={fontAwesomeIcons[props.icon]} />
        </i>
      );
  }
}

export default TransportIcon;
