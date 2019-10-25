import React from 'react';
import './Search.css';
import NavPills from './NavPills/NavPills';
import Journey from './Journey/Journey';
import Departure from './Departure/Departure';

function Search() {
    return(
        <div className='container search'>
            <NavPills />
            <div className="tab-content py-3 row" id="pills-tabContent">
                <Journey />
                <Departure />
            </div>
        </div>
    )
}

export default Search;
