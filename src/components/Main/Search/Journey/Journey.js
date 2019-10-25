import React from 'react';
import './Journey.css';
import JourneyTitle from './JourneyTitle/JourneyTitle';
import JourneyInput from './JourneyInput/JourneyInput';
import JourneyOption from './JourneyOption/JourneyOption';

function Journey() {
    return (
        <div className="tab-pane fade show active col-12" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <JourneyTitle />
            <JourneyInput />
            <JourneyOption />
        </div>
    )
};

export default Journey;