import React from 'react';
import Moment from 'react-moment';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWalking, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {connect, useSelector} from 'react-redux';
import './ResultCard.css';
import logoRER_A from '../ResultCard/ressourcesResultCard/img/Logo_RER_A.svg';
import logoRER_B from '../ResultCard/ressourcesResultCard/img/Logo_RER_B.svg';

function ResultCard() {
  const result = useSelector(state => state.reducerGlobal.resultsJourneys);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 result-card">
          {result.journeys.map((journey, index) => {
            const timeDuration = journey.totalDuration.toLowerCase();
            const timeWalkingDuration = journey.walkingDuration.toLowerCase();
            return (
              <ul key={index}>
                <li>
                  <ul className="result-time">
                    <li className="timeArrival">
                      <span>
                        <i></i>
                      </span>
                      <Moment format="HH:mm">{journey.dateDeparture}</Moment>
                    </li>
                    <li></li>
                    <li className="timeDeparture">
                      <i>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </i>
                      <Moment format="HH:mm">{journey.dateArrival}</Moment>
                    </li>
                  </ul>
                  <ul className="result-duration">
                    <li>
                      {timeDuration.indexOf('M') + 1 === timeDuration.length
                        ? timeDuration.replace('PT', '')
                        : timeDuration
                            .slice(2, journey.totalDuration.indexOf('M'))
                            .replace('h', ' h ')}{' '}
                      min
                    </li>
                    <li className="walkingDuration">
                      dont{' '}
                      {timeWalkingDuration.slice(
                        2,
                        journey.walkingDuration.indexOf('M')
                      )}{' '}
                      min
                      <p>de marche</p>
                    </li>
                  </ul>
                </li>
                <li className="result-roadmap">
                  {journey.sections.map((transport, index) => {
                    if (transport.transport) {
                      if (transport.transport.line) {
                        if (
                          transport.transport.mode === 'RER' &&
                          transport.transport.line.label === 'A'
                        ) {
                          return (
                            <span key={index}>
                              <img src={logoRER_A} alt="rerA" />
                            </span>
                          );
                        }
                        if (
                          transport.transport.mode === 'RER' &&
                          transport.transport.line.label === 'B'
                        ) {
                          return (
                            <span key={index}>
                              <img src={logoRER_B} alt="rerB" />
                            </span>
                          );
                        }

                        return (
                          <span key={index}>
                            {' '}
                            {transport.transport.mode}{' '}
                            {transport.transport.line.label}
                          </span>
                        );
                      }
                      if (transport.transport.mode === 'WALKING') {
                        return (
                          <span className="icon" key={index}>
                            {' '}
                            <FontAwesomeIcon icon={faWalking} />{' '}
                          </span>
                        );
                      }
                      return (
                        <span key={index}>{transport.transport.mode}</span>
                      );
                    }
                    return <i key={index}> </i>;
                  })}
                </li>
                <li>
                  <ul>
                    <li className="result-price">
                      {journey.price ? journey.price / 100 + '0 €' : '-'}
                    </li>
                    <li className="result-details">Détails</li>
                  </ul>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default connect(
  null,
  null
)(ResultCard);
