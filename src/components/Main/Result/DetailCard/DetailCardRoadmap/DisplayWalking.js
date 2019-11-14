import React from 'react';
import Moment from 'react-moment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWalking} from '@fortawesome/free-solid-svg-icons';

function DisplayWalking({data, index}) {
  const displayArrival = index === 0;
  return (
    <div className="col-12 displayWalking">
      <div className="row">
        <div className="col-4 text-right time">
          <div>
            {displayArrival ? (
              <Moment format="HH:mm">{data.departure.dateTime}</Moment>
            ) : (
              ''
            )}
          </div>
          <div className="totalDuration">
            {data.totalDuration
              .slice(2, data.totalDuration.indexOf('M'))
              .toLowerCase()
              .replace('h', ' h ')}{' '}
            min
          </div>
        </div>
        <div
          className={
            displayArrival
              ? 'col-2 dotted mx-0 py-0 departure'
              : 'col-2 dotted mx-0 py-0 arrival'
          }
        ></div>
        <div className="col-6 walking">
          <div className="text-uppercase">
            {displayArrival ? data.departure.label : ''}
          </div>
          <div>
            <i>
              <FontAwesomeIcon icon={faWalking} />
            </i>
            <span>Marche ({data.walkingDistance})</span>
          </div>
          <div className="text-uppercase">
            {displayArrival ? '' : data.arrival.label}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DisplayWalking;
