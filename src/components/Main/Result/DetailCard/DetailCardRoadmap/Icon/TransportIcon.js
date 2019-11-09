import React from 'react';
import {faTrain, faBus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import RER from '../img/RER.svg';
import TRAM from '../img/TRAM.png';
import METRO from '../img/Metro.svg.png';

const fontAwesomeIcons = {
  TRAIN: faTrain,
  BUS: faBus,
};

function TransportIcon(props) {
  switch (props.icon) {
    case 'TRAIN':
      return (
        <i>
          <FontAwesomeIcon icon={fontAwesomeIcons[props.icon]} />
        </i>
      );
    case 'RER':
      return <img src={RER} alt="RER" />;
    case 'METRO':
      return <img src={METRO} alt="METRO" />;
    case 'TRAM':
      return <img src={TRAM} alt="TRAM" />;
    default:
      return (
        <i>
          <FontAwesomeIcon icon={fontAwesomeIcons[props.icon]} />
        </i>
      );
  }
}

export default TransportIcon;
