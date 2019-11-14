import React from 'react';
function DisplayTransfer({data}) {
  return (
    <div className="col-12 displayTransfer my-3">
      <div className="row">
        <div className="col-4 text-right time">
          <div>Heure de départ</div>
          <span>
            {data.totalDuration
              .slice(2, data.totalDuration.length - 1)
              .toLowerCase()
              .replace('h', ' h ')}{' '}
            min
          </span>
        </div>
        <div className="col-2 text-center">
          <span>Transfer icon</span>
        </div>
        <div className="col-6">
          <span>Correspondance</span>
        </div>
      </div>
    </div>
  );
}
export default DisplayTransfer;
