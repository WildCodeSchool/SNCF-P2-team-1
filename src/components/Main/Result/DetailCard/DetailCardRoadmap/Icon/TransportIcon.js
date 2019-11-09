import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrain, faWalking} from '@fortawesome/free-solid-svg-icons';
import Bus from '../img/bus.svg';
import Metro from '../img/Metro.svg';
import RER from '../img/RER.svg';
import TRAM from '../img/Tram.svg';
import Train from '../img/Train.svg';

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
          <FontAwesomeIcon icon={faTrain} />
        </i>
      );
  }
}

export default TransportIcon;
