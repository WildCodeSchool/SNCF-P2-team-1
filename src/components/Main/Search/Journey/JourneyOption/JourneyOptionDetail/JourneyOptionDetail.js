import React from 'react';
import JourneyOptionDetailSelect from './JourneyOptionDetailSelect/JourneyOptionDetailSelect';
import JourneyOptionDetailDate from './JourneyOptionDetailDate/JourneyOptionDetailDate';
import JourneyOptionDetailTime from './JourneyOptionDetailTime/JourneyOptionDetailTime';

function JourneyOptionDetail() {
    return(
        <div className='col-6 d-flex justify-content-between'>
            <JourneyOptionDetailSelect />
            <JourneyOptionDetailDate />
            <JourneyOptionDetailTime />
        </div>
    )
}

export default JourneyOptionDetail;