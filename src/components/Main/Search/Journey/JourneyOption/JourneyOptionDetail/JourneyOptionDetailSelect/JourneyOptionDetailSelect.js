import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import "./JourneyOptionDetailSelect.css";
function JourneyOptionDetailSelect() {
  const dateType = useSelector(state => state.dateType);
  const dispatch = useDispatch();
  return (
    <div className="detail-select col-lg-4 col-12">
      <select
        className=" input-detail"
        value={dateType}
        onChange={e =>
          dispatch({ type: "ADD_DATETYPE", dateType: e.target.value })
        }
      >
        <option value="DEPARTURE">Départ</option>
        <option value="ARRIVAL">Arrivée à</option>
      </select>
    </div>
  );
}
export default connect(
  null,
  null
)(JourneyOptionDetailSelect);
