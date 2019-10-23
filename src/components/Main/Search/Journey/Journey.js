import React from 'react';
import './Journey.css';
import JourneyTitle from './JourneyTitle/JourneyTitle';

function Journey() {
    return (
        <div class="tab-pane fade show active col-sm-12 mx-3" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <JourneyTitle title="Itinéraires" />
            ...
        </div>
    )
};

export default Journey;