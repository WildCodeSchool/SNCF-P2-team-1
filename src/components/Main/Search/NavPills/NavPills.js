import React from "react";
import "./NavPills.css";

function NavPills() {
  return (
    <div className="row">
      <div className="col-sm-12">
        <ul className="nav nav-pills row mb-3" id="pills-tab" role="tablist">
          <li className="nav-item col-md-4 col-lg-3">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Itinéraires
            </a>
          </li>
          <li className="nav-item col-md-4 col-lg-3">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Prochain départs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavPills;
