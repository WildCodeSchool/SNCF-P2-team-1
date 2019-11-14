import React from "react";
import "./Main.css";
import Search from "./Search/Search";
import Banner from "./Banner/Banner";
import Result from "./Result/Result";
import DetailCard from "./Result/DetailCard/DetailCard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "../../ScrolltoTop";

function Main() {
  return (
    <main>
      <BrowserRouter>
        <Route exact path="/" component={Banner} />
        <Route exact path="/" component={Search} />
        <Route exact path="/" component={Result} />
        <ScrollToTop />
        <Switch>
          <Route exact path="/details:index" component={DetailCard} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default Main;
