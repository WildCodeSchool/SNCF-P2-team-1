import React from 'react';
import './Main.css';
import Search from './Search/Search';
import Banner from './Banner/Banner';
import Result from './Result/Result';
import DetaiCard from './Result/DetailCard/DetaiCard';

function Main() {
  return (
    <main>
      <Banner />
      <Search />
      <Result />
      <DetaiCard />
    </main>
  );
}

export default Main;
