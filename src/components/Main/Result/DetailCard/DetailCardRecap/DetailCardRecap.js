import React from 'react';
import './DetailCardRecap.css';

const data = {
    arrival: "Bercy (Paris)",
    arrivalId: "stop_area:DUA:SA:59410",
    arrivalLatitude: 48.836095,
    arrivalLongitude: 2.383935,
    bypassLines: [],
    bypassModes: [],
    date: "2019-11-05",
    dateType: "DEPARTURE",
    departure: "La Courneuve",
    departureId: "admin:fr:93027",
    departureLatitude: 48.926723,
    departureLongitude: 2.389612,
    preferenceJourney: "FASTEST",
    time: "14:41"
}
function DetailCardRecap() {

    function format(inputDate) {
        var date = new Date(inputDate);
        if (!isNaN(date.getTime())) {
            var day = date.getDate().toString();
            var month = (date.getMonth() + 1).toString();
            // Months use 0 index.
    
            return(  
               (day[1] ? day : '0' + day[0]) + '/' + (month[1] ? month : '0' + month[0])+ '/' +
               date.getFullYear())
        }
    }

    return(
        <div className="col-12 detail-card-recap">
            <h2>Votre recherche</h2>
            <p>Départ de <strong>{data.departure}</strong></p>
            <p>à destination de <strong>{data.arrival}</strong> le <strong>{format(data.date)}</strong> à <strong>{data.time}</strong></p>
        </div>
    )
}

export default DetailCardRecap;