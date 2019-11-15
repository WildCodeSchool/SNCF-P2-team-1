import React from 'react';
import Moment from 'react-moment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWalking} from '@fortawesome/free-solid-svg-icons';

function DisplayWalking({data, displayArrival, walkingStyle}) {
  const styleWalk = walkingStyle();
  const displayArrivalDeparture = styleWalk.includes('departure arrival');

  function showArrival(destination) {
    if (displayArrivalDeparture) {
      return destination;
    } else {
      return '';
    }
  }
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
          <div>
            {displayArrival ? (
              showArrival(
                <Moment format="HH:mm">{data.arrival.dateTime}</Moment>
              )
            ) : (
              <Moment format="HH:mm">{data.arrival.dateTime}</Moment>
            )}
          </div>
        </div>
        <div className={styleWalk}></div>
        <div className="col-6 walking">
          <div className="text-uppercase">
            {displayArrival ? data.departure.label : ''}
          </div>
          <div>
            <i>
              <FontAwesomeIcon icon={faWalking} />
            </i>
            <span>Marche ({data.walkingDistance} m)</span>
          </div>
          <div className="text-uppercase">
            {displayArrival
              ? showArrival(data.arrival.label)
              : data.arrival.label}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DisplayWalking;
