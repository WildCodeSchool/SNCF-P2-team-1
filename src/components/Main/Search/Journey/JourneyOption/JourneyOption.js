import React from 'react';
import JourneyOptionDetail from './JourneyOptionDetail/JourneyOptionDetail';
import JourneyOptionSubmit from './JourneyOptionSubmit/JourneyOptionSubmit';

function JourneyOption() {
    return(
        <div className='row'>
            <JourneyOptionDetail />
            <JourneyOptionSubmit />
        </div>
    )
}

export default JourneyOption;