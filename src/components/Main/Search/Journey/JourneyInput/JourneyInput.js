import React from "react";
import "./JourneyInput.css";

function JourneyInput() {
  return (
    <div className="row">
      <div className="col-sm-12 journey-input">
        <input
          type="text"
          className="form-input form-input-go-from"
          placeholder="Gare, Station, Lieu, Adresse"
        />

        <input
          type="text"
          className="form-input form-input-go-to"
          placeholder="Gare, Station, Lieu, Adresse"
        />
      </div>
    </div>
  );
}

export default JourneyInput;
