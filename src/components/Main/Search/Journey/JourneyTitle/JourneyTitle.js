import React from "react";
import "./JourneyTitle.css";

function JourneyTitle() {
  return (
    <div className="row">
      <div className="col-sm-12">
        <h2>
          <span className="firstSpan">Trouvez le bon itinéraire</span>
          <span className="secondSpan">
            {" "}
            pour tous vos déplacements en île-de-France
          </span>
        </h2>
      </div>
    </div>
  );
}

export default JourneyTitle;
