import React from 'react';
import './Departure.css';
import DepartureTitle from './DepartureTitle/DepartureTitle';

function Departure() {
    return (
        <div className="tab-pane fade col-12 shadow" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <DepartureTitle />
        </div>
    )
}

export default Departure;
