import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWalking, faClock} from '@fortawesome/free-solid-svg-icons';
import './DetailCardRoadmap.css';
import DisplayTransfer from './DisplayTransfer';
import DisplayWalking from './DisplayWalking';
import DisplayTransportType from './DisplayTransportType';
import {toPrice} from '../../ResultCard/ResultCard';

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

  function transportType(details, index) {
    const displayArrival = index === 0;
    switch (details.type) {
      case 'TRANSFER':
        return (
          <DisplayTransfer data={details} displayArrival={displayArrival} />
        );
      case 'WALKING':
        return (
          <DisplayWalking data={details} displayArrival={displayArrival} />
        );
      case 'TRANSPORT':
        return (
          <DisplayTransportType
            data={details}
            displayArrival={displayArrival}
          />
        );
      default:
        break;
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mx-0 px-0">
          <div className="detail-card-roadmap mb-4">
            <div className="row">
              <div className="col-12 totalDurationZoneTarif mb-5">
                <div className="mb-2">
                  <i>
                    <FontAwesomeIcon icon={faClock} />
                  </i>
                  <strong>
                    {data.totalDuration
                      .slice(2, data.totalDuration.indexOf('M'))
                      .toLowerCase()
                      .replace('h', ' h ')}
                    min
                  </strong>
                  <span>
                    dont{' '}
                    <i>
                      {' '}
                      <FontAwesomeIcon icon={faWalking} />
                    </i>{' '}
                    {data.walkingDuration
                      .toLowerCase()
                      .slice(2, data.walkingDuration.indexOf('M'))}{' '}
                    min de marche
                  </span>
                </div>
                <div className="ml-4">
                  Zone {data.zones ? data.zones.min : ' '} -{' '}
                  {data.zones ? data.zones.max : ' '} | Tarifs :{' '}
                  {data.price ? toPrice(data.price) : '-'}
                </div>
              </div>
            </div>
            {dataDetails.map((details, index) => {
              return (
                <div className="row" key={index}>
                  {transportType(details, index)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCardRoadmap;
