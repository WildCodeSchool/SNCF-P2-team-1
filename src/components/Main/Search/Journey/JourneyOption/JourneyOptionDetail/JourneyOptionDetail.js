import React from 'react';
import JourneyOptionSelect from './JourneyOptionSelect/JourneyOptionSelect';
import JourneyOptionDetailDate from './JourneyOptionDetailDate/JourneyOptionDetailDate';
import JourneyOptionDetailTime from './JourneyOptionDetailTime/JourneyOptionDetailTime';

function JourneyOptionDetail() {
    return(
        <div className='col-6 d-flex justify-content-between'>
            <JourneyOptionSelect />
            <JourneyOptionDetailDate />
            <JourneyOptionDetailTime />
        </div>
    )
}

export default JourneyOptionDetail;