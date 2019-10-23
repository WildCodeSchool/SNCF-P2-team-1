import React from 'react';
import './Journey.css';

function Journey() {
    return (
        <div class="tab-content py-3 row" id="pills-tabContent">
            <div class="tab-pane fade show active col-sm-12 mx-3" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                Itinéraires...
            </div>
            <div class="tab-pane fade next-departures col-sm-12 mx-3" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                Prochains départs...
            </div>
        </div>
    )
};

export default Journey;