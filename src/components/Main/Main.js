import React from "react";
import "./Main.css";
import Search from "./Search/Search";
import Banner from "./Banner/Banner";
import Result from "./Result/Result";
import DetailCard from "./Result/DetailCard/DetailCard";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Main() {
  return (
    <main>
      <BrowserRouter>
        <Banner />
        <Search />
        <Switch>
          <Route exact path="/" component={Result} />
          <Route path="/details:index" component={DetailCard} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default Main;
