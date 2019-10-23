import React from 'react';
import './Departure.css';
import JourneyTitle from '../Journey/JourneyTitle/JourneyTitle';

function Departure() {
    return (
        <div class="tab-pane fade col-sm-12 mx-3" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            <JourneyTitle title="Prochains départs" />
            ...
        </div>
    )
}

export default Departure;