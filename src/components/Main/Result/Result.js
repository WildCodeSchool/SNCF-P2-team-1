import React from "react";
import ResultCard from "./ResultCard/ResultCard";
import { connect, useSelector } from "react-redux";
import LoadingComponent from "./Cliploader";

function Result() {
  const receiveData = useSelector(state => state.reducerGlobal.receiveData);
  const showLoading = useSelector(state => state.reducerGlobal.showLoading);

  return (
    <>
      {showLoading ? (
        <div>
          <LoadingComponent />
        </div>
      ) : null}
      {receiveData && <ResultCard />}
    </>
  );
}

export default connect(
  null,
  null
)(Result);
