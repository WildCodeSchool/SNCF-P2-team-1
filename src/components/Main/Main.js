import React from 'react';
import Search from './Search/Search';
import './Main.css';
import Banner from './Banner/Banner';

function Main() {
    return(
        <main>
            <Banner />
            <Search />
        </main>
    )
}

export default Main;