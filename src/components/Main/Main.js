import React from "react";
import "./Main.css";
import Search from "./Search/Search";
import Banner from "./Banner/Banner";
import Result from "./Result/Result";
import DetailCard from "./Result/DetailCard/DetailCard";
import { BrowserRouter, Route } from "react-router-dom";

function Main() {
  return (
    <main>
      <BrowserRouter>
        <Route exact path="/" component={Banner} />
        <Route exact path="/" component={Search} />
        <Route exact path="/" component={Result} />
        <Route exact path="/details:index" component={DetailCard} />
      </BrowserRouter>
    </main>
  );
}

export default Main;
