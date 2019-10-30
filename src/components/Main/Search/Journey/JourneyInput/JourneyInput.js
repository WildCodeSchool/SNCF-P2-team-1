import React from "react";
import "./JourneyInput.css";
import Input1 from "./Input1";
import Input2 from "./Input2";

function JourneyInput() {
  return (
    <div className="row">
      <div className="col-sm-12 journey-input">
        <Input1 />
        <Input2 />
      </div>
    </div>
  );
}

export default JourneyInput;
