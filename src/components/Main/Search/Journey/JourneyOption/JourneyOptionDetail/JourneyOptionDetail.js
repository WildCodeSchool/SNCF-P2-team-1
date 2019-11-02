import React from "react";
import JourneyOptionDetailSelect from "./JourneyOptionDetailSelect/JourneyOptionDetailSelect";
import JourneyOptionDetailDate from "./JourneyOptionDetailDate/JourneyOptionDetailDate";
import JourneyOptionDetailTime from "./JourneyOptionDetailTime/JourneyOptionDetailTime";

function JourneyOptionDetail() {
  return (
    <div className="col-12 col-lg-6 d-flex justify-content-between">
      <div className="row ">
        <JourneyOptionDetailSelect />
        <JourneyOptionDetailDate />
        <JourneyOptionDetailTime />
      </div>
    </div>
  );
}

export default JourneyOptionDetail;
