import React, { useState } from "react";
import "./NavPills.css";

function NavPills(props) {
  const changePath = pathname => {
    props.setSearchPage(pathname);
  };
  const [isActive, setIsActive] = useState(true);
  const [isActive2, setIsActive2] = useState(false);

  return (
    <div className="row">
      <div className="col-sm-12">
        <ul className="nav nav-pills row mb-3" id="pills-tab" role="tablist">
          <li className="nav-item col-md-4 col-lg-3">
            <div
              className={`nav-link ${isActive ? "active" : null}`}
              role="tab"
              onClick={() => {
                changePath("journey");
                setIsActive2(false);
                setIsActive(true);
              }}
            >
              Itinéraires
            </div>
          </li>
          <li className="nav-item col-md-4 col-lg-3">
            <div
              className={`nav-link ${isActive2 ? "active" : null}`}
              role="tab"
              onClick={() => {
                changePath("departure");
                setIsActive2(true);
                setIsActive(false);
              }}
            >
              Prochain départs
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavPills;
