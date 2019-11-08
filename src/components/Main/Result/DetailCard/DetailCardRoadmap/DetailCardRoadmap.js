import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWalking, faClock, faTrain} from '@fortawesome/free-solid-svg-icons';
import './DetailCardRoadmap.css';

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
              .slice(2, data.totalDuration.length - 1)
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
            Zone {data.zones.min} - {data.zones.max} | Tarifs :{' '}
            {data.price ? data.price / 100 : ' - '}
          </div>
          TEST ITINERAIRE {data.sections[0].departure.label} to{' '}
          {data.sections[0].arrival.label}
        </div>
      </div>
    </div>
  );
}
//pas besoin de connecter a redux en Hooks
export default DetailCardRoadmap;
