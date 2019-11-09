import React from 'react';
import _get from 'lodash/get';
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWalking, faClock, faTrain, faBus } from "@fortawesome/free-solid-svg-icons";
import './ResultCardDetail.css';

function ResultCardDetail() {
  const data = {"journeys":[{"dateDeparture":"2019-11-07T10:40:00","dateArrival":"2019-11-07T12:14:00","totalDuration":"PT1H34M","walkingDuration":"PT6M35S","nbTransfer":2,"co2EmissionByTrain":{"unit":"gEC","value":358.6238},"co2EmissionByCar":{"unit":"gEC","value":13240.3702560196},"price":null,"zones":{"min":1,"max":5},"sections":[{"totalDuration":"PT1H2M","type":"TRANSPORT","departure":{"label":"MELUN (Melun)","dateTime":"2019-11-07T10:40:00"},"arrival":{"label":"PARIS NORD (Paris)","dateTime":"2019-11-07T11:42:00"},"direction":"GOUSSAINVILLE (Goussainville)","color":"#00AE41","textColor":"#FFFFFF","transport":{"mode":"RER","line":{"label":"D","code":"RER_D"},"substitution":false},"codeMission":"FACA","listServedStation":[{"stationLabel":"MELUN (Melun)","arrivalDate":"2019-11-07T10:40:00"},{"stationLabel":"LE MEE (Le Mée-sur-Seine)","arrivalDate":"2019-11-07T10:42:00"},{"stationLabel":"CESSON (Cesson)","arrivalDate":"2019-11-07T10:46:00"},{"stationLabel":"SAVIGNY LE TEMPLE NANDY (Savigny-le-Temple)","arrivalDate":"2019-11-07T10:50:00"},{"stationLabel":"LIEUSAINT MOISSY (Moissy-Cramayel)","arrivalDate":"2019-11-07T10:54:00"},{"stationLabel":"COMBS LA VILLE QUINCY (Combs-la-Ville)","arrivalDate":"2019-11-07T10:59:00"},{"stationLabel":"BOUSSY SAINT-ANTOINE (Boussy-Saint-Antoine)","arrivalDate":"2019-11-07T11:02:00"},{"stationLabel":"BRUNOY (Brunoy)","arrivalDate":"2019-11-07T11:05:00"},{"stationLabel":"YERRES (Yerres)","arrivalDate":"2019-11-07T11:09:00"},{"stationLabel":"MONTGERON CROSNE (Montgeron)","arrivalDate":"2019-11-07T11:12:00"},{"stationLabel":"VILLENEUVE SAINT-GEORGES (Villeneuve-Saint-Georges)","arrivalDate":"2019-11-07T11:17:00"},{"stationLabel":"CRETEIL POMPADOUR (Créteil)","arrivalDate":"2019-11-07T11:22:00"},{"stationLabel":"MAISONS ALFORT ALFORTVILLE (Maisons-Alfort)","arrivalDate":"2019-11-07T11:27:00"},{"stationLabel":"PARIS GARE DE LYON (Paris)","arrivalDate":"2019-11-07T11:34:00"},{"stationLabel":"CHATELET LES HALLES (Paris)","arrivalDate":"2019-11-07T11:38:00"},{"stationLabel":"PARIS NORD (Paris)","arrivalDate":"2019-11-07T11:42:00"}],"disruptionsTrafic":[],"disruptionsTravaux":[]},{"totalDuration":"PT7M","type":"TRANSFER","walkingDuration":"PT2M48S"},{"totalDuration":"PT9M","type":"TRANSPORT","departure":{"label":"PARIS NORD (Paris)","dateTime":"2019-11-07T11:49:00"},"arrival":{"label":"EPINAY VILLETANEUSE (Épinay-sur-Seine)","dateTime":"2019-11-07T11:58:00"},"direction":"MONTSOULT MAFFLIERS (Montsoult)","color":"#844C54","textColor":"#FFFFFF","transport":{"mode":"TRAIN","line":{"label":"H","code":"TRAIN_H"},"substitution":false},"codeMission":"MOSA","listServedStation":[{"stationLabel":"PARIS NORD (Paris)","arrivalDate":"2019-11-07T11:49:00"},{"stationLabel":"SAINT-DENIS (Saint-Denis)","arrivalDate":"2019-11-07T11:54:00"},{"stationLabel":"EPINAY VILLETANEUSE (Épinay-sur-Seine)","arrivalDate":"2019-11-07T11:58:00"}],"disruptionsTrafic":[],"disruptionsTravaux":[]},{"totalDuration":"PT14M","type":"TRANSFER","walkingDuration":"PT3M47S"},{"totalDuration":"PT2M","type":"TRANSPORT","departure":{"label":"GARE D'EPINAY VILLETANEUSE (Épinay-sur-Seine)","dateTime":"2019-11-07T12:12:00"},"arrival":{"label":"GARE DE VILLETANEUSE - UNIVERSITE (Villetaneuse)","dateTime":"2019-11-07T12:14:00"},"direction":"GARE DU BOURGET (Le Bourget)","color":"#FB4F14","textColor":"#FFFFFF","transport":{"mode":"TRAM","line":{"label":"T11","code":"TRAM_T11"},"substitution":false},"codeMission":null,"listServedStation":[{"stationLabel":"GARE D'EPINAY VILLETANEUSE (Épinay-sur-Seine)","arrivalDate":"2019-11-07T12:12:00"},{"stationLabel":"GARE DE VILLETANEUSE - UNIVERSITE (Villetaneuse)","arrivalDate":"2019-11-07T12:14:00"}],"disruptionsTrafic":[],"disruptionsTravaux":[]}],"route":[{"type":"LineString","coordinates":[[2.655392,48.527597],[2.624046,48.539939],[2.593767,48.565664],[2.58314,48.595469],[2.570061,48.628476],[2.547693,48.667198],[2.532967,48.680976],[2.50657,48.699047],[2.483371,48.706763],[2.462283,48.708037],[2.446562,48.729975],[2.435813,48.772373],[2.426631,48.802004],[2.373926,48.845865],[2.346994,48.861823],[2.35734,48.879455]],"properties":{"sectionIndex":0,"color":"#00AE41","type":"public_transport"}},{"type":"LineString","coordinates":[[2.35734,48.879455],[2.35734,48.879455]],"properties":{"sectionIndex":1,"color":"#0088ce","isPedestrian":true,"type":"transfer"}},{"type":"LineString","coordinates":[[2.35734,48.879455],[2.345998,48.93479],[2.328848,48.95838]],"properties":{"sectionIndex":2,"color":"#844C54","type":"public_transport"}},{"type":"LineString","coordinates":[[2.328848,48.95838],[2.328425,48.958991]],"properties":{"sectionIndex":3,"color":"#0088ce","isPedestrian":true,"type":"transfer"}},{"type":"LineString","coordinates":[[2.328425,48.958991],[2.342236,48.959899]],"properties":{"sectionIndex":4,"color":"#FB4F14","type":"public_transport"}}],"routeInfo":{"tooltipCoord":{"lat":48.751174000000006,"lon":2.4411875}}},{"dateDeparture":"2019-11-07T10:40:00","dateArrival":"2019-11-07T12:20:00","totalDuration":"PT1H40M","walkingDuration":"PT13M31S","nbTransfer":1,"co2EmissionByTrain":{"unit":"gEC","value":367.3256},"co2EmissionByCar":{"unit":"gEC","value":13240.3702560196},"price":null,"zones":{"min":1,"max":5},"sections":[{"totalDuration":"PT1H16M","type":"TRANSPORT","departure":{"label":"MELUN (Melun)","dateTime":"2019-11-07T10:40:00"},"arrival":{"label":"PIERREFITTE STAINS (Pierrefitte-sur-Seine)","dateTime":"2019-11-07T11:56:00"},"direction":"GOUSSAINVILLE (Goussainville)","color":"#00AE41","textColor":"#FFFFFF","transport":{"mode":"RER","line":{"label":"D","code":"RER_D"},"substitution":false},"codeMission":"FACA","listServedStation":[{"stationLabel":"MELUN (Melun)","arrivalDate":"2019-11-07T10:40:00"},{"stationLabel":"LE MEE (Le Mée-sur-Seine)","arrivalDate":"2019-11-07T10:42:00"},{"stationLabel":"CESSON (Cesson)","arrivalDate":"2019-11-07T10:46:00"},{"stationLabel":"SAVIGNY LE TEMPLE NANDY (Savigny-le-Temple)","arrivalDate":"2019-11-07T10:50:00"},{"stationLabel":"LIEUSAINT MOISSY (Moissy-Cramayel)","arrivalDate":"2019-11-07T10:54:00"},{"stationLabel":"COMBS LA VILLE QUINCY (Combs-la-Ville)","arrivalDate":"2019-11-07T10:59:00"},{"stationLabel":"BOUSSY SAINT-ANTOINE (Boussy-Saint-Antoine)","arrivalDate":"2019-11-07T11:02:00"},{"stationLabel":"BRUNOY (Brunoy)","arrivalDate":"2019-11-07T11:05:00"},{"stationLabel":"YERRES (Yerres)","arrivalDate":"2019-11-07T11:09:00"},{"stationLabel":"MONTGERON CROSNE (Montgeron)","arrivalDate":"2019-11-07T11:12:00"},{"stationLabel":"VILLENEUVE SAINT-GEORGES (Villeneuve-Saint-Georges)","arrivalDate":"2019-11-07T11:17:00"},{"stationLabel":"CRETEIL POMPADOUR (Créteil)","arrivalDate":"2019-11-07T11:22:00"},{"stationLabel":"MAISONS ALFORT ALFORTVILLE (Maisons-Alfort)","arrivalDate":"2019-11-07T11:27:00"},{"stationLabel":"PARIS GARE DE LYON (Paris)","arrivalDate":"2019-11-07T11:34:00"},{"stationLabel":"CHATELET LES HALLES (Paris)","arrivalDate":"2019-11-07T11:38:00"},{"stationLabel":"PARIS NORD (Paris)","arrivalDate":"2019-11-07T11:42:00"},{"stationLabel":"STADE DE FRANCE SAINT-DENIS (Saint-Denis)","arrivalDate":"2019-11-07T11:47:00"},{"stationLabel":"SAINT-DENIS (Saint-Denis)","arrivalDate":"2019-11-07T11:51:00"},{"stationLabel":"PIERREFITTE STAINS (Pierrefitte-sur-Seine)","arrivalDate":"2019-11-07T11:56:00"}],"disruptionsTrafic":[],"disruptionsTravaux":[]},{"totalDuration":"PT22M","type":"TRANSFER","walkingDuration":"PT13M31S"},{"totalDuration":"PT2M","type":"TRANSPORT","departure":{"label":"GARE DE PIERREFITTE STAINS (Pierrefitte-sur-Seine)","dateTime":"2019-11-07T12:18:00"},"arrival":{"label":"GARE DE VILLETANEUSE - UNIVERSITE (Villetaneuse)","dateTime":"2019-11-07T12:20:00"},"direction":"GARE D'EPINAY SUR SEINE (Épinay-sur-Seine)","color":"#FB4F14","textColor":"#FFFFFF","transport":{"mode":"TRAM","line":{"label":"T11","code":"TRAM_T11"},"substitution":false},"codeMission":null,"listServedStation":[{"stationLabel":"GARE DE PIERREFITTE STAINS (Pierrefitte-sur-Seine)","arrivalDate":"2019-11-07T12:17:00"},{"stationLabel":"GARE DE VILLETANEUSE - UNIVERSITE (Villetaneuse)","arrivalDate":"2019-11-07T12:20:00"}],"disruptionsTrafic":[],"disruptionsTravaux":[]}],"route":[{"type":"LineString","coordinates":[[2.655392,48.527597],[2.624046,48.539939],[2.593767,48.565664],[2.58314,48.595469],[2.570061,48.628476],[2.547693,48.667198],[2.532967,48.680976],[2.50657,48.699047],[2.483371,48.706763],[2.462283,48.708037],[2.446562,48.729975],[2.435813,48.772373],[2.426631,48.802004],[2.373926,48.845865],[2.346994,48.861823],[2.35734,48.879455],[2.350959,48.917543],[2.345998,48.93479],[2.372181,48.964118]],"properties":{"sectionIndex":0,"color":"#00AE41","type":"public_transport"}},{"type":"LineString","coordinates":[[2.372181,48.964118],[2.367238,48.960129]],"properties":{"sectionIndex":1,"color":"#0088ce","isPedestrian":true,"type":"transfer"}},{"type":"LineString","coordinates":[[2.367238,48.960129],[2.342236,48.959899]],"properties":{"sectionIndex":2,"color":"#FB4F14","type":"public_transport"}}],"routeInfo":{"tooltipCoord":{"lat":48.751174000000006,"lon":2.4411875}}},{"dateDeparture":"2019-11-07T10:40:00","dateArrival":"2019-11-07T12:21:00","totalDuration":"PT1H41M","walkingDuration":"PT4M16S","nbTransfer":1,"co2EmissionByTrain":{"unit":"gEC","value":347.8852},"co2EmissionByCar":{"unit":"gEC","value":13240.3702560196},"price":1240.0,"zones":{"min":1,"max":5},"sections":[{"totalDuration":"PT1H11M","type":"TRANSPORT","departure":{"label":"MELUN (Melun)","dateTime":"2019-11-07T10:40:00"},"arrival":{"label":"SAINT-DENIS (Saint-Denis)","dateTime":"2019-11-07T11:51:00"},"direction":"GOUSSAINVILLE (Goussainville)","color":"#00AE41","textColor":"#FFFFFF","transport":{"mode":"RER","line":{"label":"D","code":"RER_D"},"substitution":false},"codeMission":"FACA","listServedStation":[{"stationLabel":"MELUN (Melun)","arrivalDate":"2019-11-07T10:40:00"},{"stationLabel":"LE MEE (Le Mée-sur-Seine)","arrivalDate":"2019-11-07T10:42:00"},{"stationLabel":"CESSON (Cesson)","arrivalDate":"2019-11-07T10:46:00"},{"stationLabel":"SAVIGNY LE TEMPLE NANDY (Savigny-le-Temple)","arrivalDate":"2019-11-07T10:50:00"},{"stationLabel":"LIEUSAINT MOISSY (Moissy-Cramayel)","arrivalDate":"2019-11-07T10:54:00"},{"stationLabel":"COMBS LA VILLE QUINCY (Combs-la-Ville)","arrivalDate":"2019-11-07T10:59:00"},{"stationLabel":"BOUSSY SAINT-ANTOINE (Boussy-Saint-Antoine)","arrivalDate":"2019-11-07T11:02:00"},{"stationLabel":"BRUNOY (Brunoy)","arrivalDate":"2019-11-07T11:05:00"},{"stationLabel":"YERRES (Yerres)","arrivalDate":"2019-11-07T11:09:00"},{"stationLabel":"MONTGERON CROSNE (Montgeron)","arrivalDate":"2019-11-07T11:12:00"},{"stationLabel":"VILLENEUVE SAINT-GEORGES (Villeneuve-Saint-Georges)","arrivalDate":"2019-11-07T11:17:00"},{"stationLabel":"CRETEIL POMPADOUR (Créteil)","arrivalDate":"2019-11-07T11:22:00"},{"stationLabel":"MAISONS ALFORT ALFORTVILLE (Maisons-Alfort)","arrivalDate":"2019-11-07T11:27:00"},{"stationLabel":"PARIS GARE DE LYON (Paris)","arrivalDate":"2019-11-07T11:34:00"},{"stationLabel":"CHATELET LES HALLES (Paris)","arrivalDate":"2019-11-07T11:38:00"},{"stationLabel":"PARIS NORD (Paris)","arrivalDate":"2019-11-07T11:42:00"},{"stationLabel":"STADE DE FRANCE SAINT-DENIS (Saint-Denis)","arrivalDate":"2019-11-07T11:47:00"},{"stationLabel":"SAINT-DENIS (Saint-Denis)","arrivalDate":"2019-11-07T11:51:00"}],"disruptionsTrafic":[],"disruptionsTravaux":[]},{"totalDuration":"PT17M","type":"TRANSFER","walkingDuration":"PT4M16S"},{"totalDuration":"PT13M","type":"TRANSPORT","departure":{"label":"SAINT-DENIS - GARE (Saint-Denis)","dateTime":"2019-11-07T12:08:00"},"arrival":{"label":"VILLETANEUSE-UNIVERSITE (Villetaneuse)","dateTime":"2019-11-07T12:21:00"},"direction":"VILLETANEUSE-UNIVERSITE (Villetaneuse)","color":"#837902","textColor":"#FFFFFF","transport":{"mode":"TRAM","line":{"label":"T8","code":"TRAM_T8"},"substitution":false},"codeMission":null,"listServedStation":[{"stationLabel":"SAINT-DENIS - GARE (Saint-Denis)","arrivalDate":"2019-11-07T12:08:00"},{"stationLabel":"PAUL ELUARD (Saint-Denis)","arrivalDate":"2019-11-07T12:10:00"},{"stationLabel":"DELAUNAY-BELLEVILLE (Saint-Denis)","arrivalDate":"2019-11-07T12:13:00"},{"stationLabel":"CESAR (Villetaneuse)","arrivalDate":"2019-11-07T12:14:00"},{"stationLabel":"JEAN VILAR (Villetaneuse)","arrivalDate":"2019-11-07T12:15:00"},{"stationLabel":"PABLO NERUDA (Villetaneuse)","arrivalDate":"2019-11-07T12:17:00"},{"stationLabel":"VILLETANEUSE-UNIVERSITE (Villetaneuse)","arrivalDate":"2019-11-07T12:21:00"}],"disruptionsTrafic":[],"disruptionsTravaux":[]}],"route":[{"type":"LineString","coordinates":[[2.655392,48.527597],[2.624046,48.539939],[2.593767,48.565664],[2.58314,48.595469],[2.570061,48.628476],[2.547693,48.667198],[2.532967,48.680976],[2.50657,48.699047],[2.483371,48.706763],[2.462283,48.708037],[2.446562,48.729975],[2.435813,48.772373],[2.426631,48.802004],[2.373926,48.845865],[2.346994,48.861823],[2.35734,48.879455],[2.350959,48.917543],[2.345998,48.93479]],"properties":{"sectionIndex":0,"color":"#00AE41","type":"public_transport"}},{"type":"LineString","coordinates":[[2.345998,48.93479],[2.347267,48.935886]],"properties":{"sectionIndex":1,"color":"#0088ce","isPedestrian":true,"type":"transfer"}},{"type":"LineString","coordinates":[[2.347267,48.935886],[2.345153,48.939679],[2.347351,48.945879],[2.342467,48.949528],[2.34345,48.95279],[2.3436,48.956142],[2.341704,48.959405]],"properties":{"sectionIndex":2,"color":"#837902","type":"public_transport"}}],"routeInfo":{"tooltipCoord":{"lat":48.719006,"lon":2.4544225}}}],"linkBefore":"iI-BZPwT3kWRNIAxaKob5VzuHhEwSZbThZAhKNZZawzapKKprKl9cWQO_iaEWbR3r3K14coMimbS6zoVRdqdee0LtToHIn3ZsKdKTrDIOk-FDBq4ZenFsMV_DyFkoA3lsLliKbb0gNFfJ_BS0Gp62nwTG1hv8ZHK08BRxhMHui_tC7U6ByJ92bCnSk6wyDpPkJ0laqKb71RPQdHupi8SFbexFS449iaAri2XfV7jN9hXfBbizeZbKqiIRkgf31ev_3h0slYfbSfZzxmySNOq_g","linkAfter":"iI-BZPwT3kWRNIAxaKob5VzuHhEwSZbThZAhKNZZawzapKKprKl9cWQO_iaEWbR3r3K14coMimbS6zoVRdqdee0LtToHIn3ZsKdKTrDIOk-FDBq4ZenFsMV_DyFkoA3l6do4BZkLv5PknQNPJBynjHjOUZk9eeS2EyHH87f_T_pqhrU214qOn7Iab0M8Lipl3f_T8m0-S03Wl2wFLVSDMxKMI8Jq3HO33HMCfWvngoefbuQyM9_PhuJh80CVKdopuCSuvwiC-RHCvjHWkq1E5w"}
  const dataDetails = data.journeys[0].sections;

<<<<<<< HEAD
  return (
    <div className="container">
      <div className="col-12 py-0 px-0">
        <div className="detail-card-result">
          <div className='totalDuration'>
            <i><FontAwesomeIcon icon={faClock} /></i> 
            <strong> {data.journeys[0].totalDuration.slice(2, data.journeys[0].totalDuration.length - 1).toLowerCase().replace('h', ' h ')} min </strong>
            <span> dont <i><FontAwesomeIcon icon={faWalking} /></i> { data.journeys[0].walkingDuration.toLowerCase().slice(2, data.journeys[0].walkingDuration.indexOf('M'))} min</span>
          </div>
          <div className="my-2 zoneTarif">
            Zone {data.journeys[0].zones.min} - {data.journeys[0].zones.max} | Tarifs : { data.journeys[0].price ? data.journeys[0].price / 100 : ' - '} 
          </div>
          {dataDetails
            .filter(detail => _get(detail, 'departure', false))
            .map((detail, index) => {
              const color = detail.color;
              const transportColor = {
                backgroundColor:`${color}`,
                margin:"1em",
                padding: ".5em"
              }
              const iconTransport = detail.transport.mode;
              return (
                <div key={index} className="detail-result d-flex my-4">
                  <ul className='time'>
                    <li>
                      <Moment format='HH:mm'>{detail.departure.dateTime}</Moment>
                    </li>
                    <li className='duration'>
                    {detail.totalDuration.slice(2, detail.totalDuration.length - 1).toLowerCase().replace('h', ' h ')} min
                    </li>
                    <li>
                      <Moment format='HH:mm'>{detail.arrival.dateTime}</Moment>
                    </li>
                  </ul>
                  <ul className="transportColor" style={transportColor}>
                    <li>
                      {
                        iconTransport === "TRAIN" ? 
                        <i><FontAwesomeIcon icon={faTrain} /></i> : 
                        <i><FontAwesomeIcon icon={faBus} /></i>
                      }
                    </li>
                    <li></li>
                    <li><span className='whiteCircle'></span></li>
                  </ul>
                  <ul className='detail'>
                    <li>
                      <p className="my-0">{detail.departure.label}</p>
                      <span className='direction'>dir. {detail.direction}</span>
                    </li>
                    <li></li>
                    <li>{detail.arrival.label}</li>
                  </ul>
                </div>
              );
            })}
          </div>
      </div>
=======
  //   const dictonary = {
  //     METRO: "Ligne",
  //     BUS: "Bus",
  //     RER: "Ligne"
  //   };

  //   {dictonary[transport.mode]}

  return (
    <div className="col-12 detail-card-result">
      <div>
        Zone {data.journeys[0].zones.min} - {data.journeys[0].zones.max}
      </div>
      {dataDetails
        .filter(data => _get(data, "departure", false))
        .map(x => {
          return (
            <>
              <div>
                {x.totalDuration.slice(2, x.totalDuration.length - 1)} minutes
              </div>
              <div>{x.departure.label}</div>
              <div>{x.direction}</div>
              <div>{x.arrival.label}</div>
            </>
          );
        })}
>>>>>>> 1a06a6944c8c480f293db996c167494ae4089039
    </div>
  );
}

export default ResultCardDetail;
