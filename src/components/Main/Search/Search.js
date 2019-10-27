import React, { useState } from "react";
import "./Search.css";
import NavPills from "./NavPills/NavPills";
import Journey from "./Journey/Journey";
import Departure from "./Departure/Departure";
import { CSSTransition } from "react-transition-group";

function Search() {
  const [searchPage, setSearchPage] = useState("journey");
  return (
    <div className="container search">
      <NavPills setSearchPage={setSearchPage} />
      <div className="tab-content py-3 row" id="pills-tabContent">
        {searchPage === "journey" ? (
          <CSSTransition
            key={1}
            in={true}
            appear={true}
            classNames="example"
            timeout={500}
            unmountOnExit
          >
            <Journey />
          </CSSTransition>
        ) : (
          <CSSTransition
            key={2}
            in={true}
            appear={true}
            classNames="example"
            timeout={500}
            unmountOnExit
          >
            <Departure />
          </CSSTransition>
        )}
      </div>
    </div>
  );
}

export default Search;
