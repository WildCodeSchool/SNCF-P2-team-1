import React from 'react';
import './Main.css';
import Search from './Search/Search';
import Banner from './Banner/Banner';
import Result from './Result/Result';

function Main() {
  return (
    <main>
      <Banner />
      <Search />
      <Result />
    </main>
  );
}

export default Main;
