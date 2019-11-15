import React from 'react';
function DisplayTransfer({data}) {
  return (
    <div className="col-12 displayTransfer">
      <div className="row">
        <div className="col-4 text-right time">
          <div className="totalDuration">
            {data.totalDuration
              .slice(2, data.totalDuration.indexOf('M'))
              .toLowerCase()
              .replace('h', ' h ')}{' '}
            min
          </div>
        </div>
        <div className="col-2 dotted mx-0 py-0"></div>
        <div className="col-6 transition">
          <span>Correspondance</span>
        </div>
      </div>
    </div>
  );
}
export default DisplayTransfer;
