import React from 'react';
function DisplayTransportType({data}) {
  return (
    <div className="col-12 transportType my-3">
      <div className="row">
        <div className="col-4 text-right time">
            <div>Heure de départ</div>
            <div>
                {data.totalDuration
                .slice(2, data.totalDuration.length - 1)
                .toLowerCase()
                .replace('h', ' h ')}{' '}
                min
            </div>
            <div>Heure d'arrivée</div>
        </div>
        <div className="col-2 text-center">
          <span>Transport icon</span>
        </div>
        <div className="col-6">
          <span>Transport informations</span>
        </div>
      </div>
    </div>
  );
}
export default DisplayTransportType;
