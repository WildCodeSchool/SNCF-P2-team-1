import React from 'react';

function JourneyTitle(props) {
    return (
        <div className='row'>
            <div className='col-sm-12'>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}

export default JourneyTitle;