import React from 'react';
import './Departure.css';
import DepartureTitle from './DepartureTitle/DepartureTitle';

function Departure() {
    return (
        <div className="tab-pane fade col-sm-12 mx-3" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <DepartureTitle />
        </div>
    )
}

export default Departure;