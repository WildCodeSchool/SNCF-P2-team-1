import React from 'react';
import _get from 'lodash/get';
import Moment from 'react-moment';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWalking, faClock} from '@fortawesome/free-solid-svg-icons';
import './DetailCardRoadmap.css';
import TransportIcon from './Icon/TransportIcon';

function DetailCardRoadmap({match}) {
  let history = useHistory();
  //Data Itineraire
  const data = useSelector(
    state =>
      state.reducerGlobal.resultsJourneys &&
      state.reducerGlobal.resultsJourneys.journeys[match.params.index]
  );
  //retourne a l'acceuil si aucune données reçus
  if (!data) {
    history.push('/');
    return null;
  }
  const dataDetails = data.sections;

  return (
    <div className="col-12 py-0 px-0">
      <div className="detail-card-result">
        <div className="totalDuration">
          <i>
            <FontAwesomeIcon icon={faClock} />
          </i>
          <strong>
            {' '}
            {data.totalDuration
              .slice(2, data.totalDuration.indexOf('M'))
              .toLowerCase()
              .replace('h', ' h ')}{' '}
            min{' '}
          </strong>
          <span>
            {' '}
            dont{' '}
            <i>
              <FontAwesomeIcon icon={faWalking} />
            </i>{' '}
            {data.walkingDuration
              .toLowerCase()
              .slice(2, data.walkingDuration.indexOf('M'))}{' '}
            min
          </span>
          <div className="my-2 zoneTarif">
            Zone {data.zones ? data.zones.min : ' '} -{' '}
            {data.zones ? data.zones.max : ' '} | Tarifs :{' '}
            {data.price ? data.price / 100 + ' €' : ' - '}
          </div>
          {dataDetails
            .filter(detail => _get(detail, 'departure', false))
            .map((detail, index) => {
              const color = detail.color;
              const transportColor = {
                backgroundColor: `${color}`,
                margin: '1em',
                padding: '.5em',
              };
              const iconTransport = detail.transport.mode;
              return (
                <div key={index} className="detail-result d-flex my-5">
                  <ul className="time">
                    <li>
                      <Moment format="HH:mm">
                        {detail.departure.dateTime}
                      </Moment>
                    </li>
                    <li className="duration">
                      {detail.totalDuration
                        .slice(2, detail.totalDuration.length - 1)
                        .toLowerCase()
                        .replace('h', ' h ')}{' '}
                      min
                    </li>
                    <li>
                      <Moment format="HH:mm">{detail.arrival.dateTime}</Moment>
                    </li>
                  </ul>
                  <ul className="transportColor" style={transportColor}>
                    <li>
                      <TransportIcon icon={iconTransport} />
                    </li>
                    <li
                      className={
                        detail.transport.mode === 'WALKING' ? 'dotted' : ''
                      }
                    ></li>
                    <li>
                      {detail.transport.mode === 'WALKING' ? (
                        <i className="walking"></i>
                      ) : (
                        ''
                      )}
                      <span className="whiteCircle"></span>
                    </li>
                  </ul>
                  <ul className="detail">
                    <li>
                      <p className="my-0">{detail.departure.label}</p>
                      <span className="direction">dir. {detail.direction}</span>
                    </li>
                    <li>
                      {detail.transport.mode === 'WALKING' ? (
                        <FontAwesomeIcon icon={faWalking} />
                      ) : (
                        ''
                      )}
                    </li>
                    <li>{detail.arrival.label}</li>
                  </ul>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
//pas besoin de connecter a redux en Hooks
export default DetailCardRoadmap;
