import React from 'react';
import './DetailCardRecap.css';
import { useSelector } from 'react-redux';


function DetailCardRecap() {
    const data = useSelector(state => state.reducerRequest);
    function format(inputDate) {
        var date = new Date(inputDate);
        if (!isNaN(date.getTime())) {
            var day = date.getDate().toString();
            var month = (date.getMonth() + 1).toString();
            return(  
               (day[1] ? day : '0' + day[0]) + '/' + (month[1] ? month : '0' + month[0])+ '/' +
               date.getFullYear())
        }
    }

    return(
        <div className="col-12 detail-card-recap">
            <h2>VOTRE RECHERCHE</h2>
            <p>Départ de <strong>{data.departure}</strong></p>
            <p>à destination de <strong>{data.arrival}</strong> le <strong>{format(data.date)}</strong> à <strong>{data.time}</strong></p>
        </div>
    )
}

export default DetailCardRecap;