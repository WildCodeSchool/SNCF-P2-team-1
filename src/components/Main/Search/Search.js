import React from "react";
import NavPills from "./NavPills/NavPills";
import Journey from "./Journey/Journey";
import Departure from "./Departure/Departure";

function Search() {
  return (
    <div className="container search mt-5 pt-5">
      <NavPills />
      <div className="tab-content py-3 row" id="pills-tabContent">
        <Journey />
        <Departure />
      </div>
    </div>
  );
}

export default Search;
