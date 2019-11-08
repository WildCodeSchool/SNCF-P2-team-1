import React from 'react';
import {faTrain, faBus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const fontAwesomeIcons = {
  TRAIN: faTrain,
  BUS: faBus,
  RER: faBus,
  TRAM: faBus,
  METRO: faBus,
};

function TransportIcon(props) {
  return (
    <i>
      <FontAwesomeIcon icon={fontAwesomeIcons[props.icon]} />
    </i>
  );
}

export default TransportIcon;
