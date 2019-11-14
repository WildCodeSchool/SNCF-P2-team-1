import React from 'react';
import Moment from 'react-moment';

function DisplayTransportType({data}) {
    const color = data.color;
    const transportColor = {
      backgroundColor: `${color}`,
    };
  return (
    <div className="col-12 transportType">
      <div className="row">
        <div className="col-4 text-right time">
            <div>
                <Moment format="HH:mm">
                    {data.departure.dateTime}
                </Moment>
            </div>
            <div className='totalDuration'>
                {data.totalDuration
                .slice(2, data.totalDuration.indexOf('M'))
                .toLowerCase()
                .replace('h', ' h ')}{' '}
                min
            </div>
            <div>
                <Moment format="HH:mm">{data.arrival.dateTime}</Moment>
            </div>
        </div>
        <div className="col-2 mx-0 py-0 transport-icon-color">
          <div className='icon' style={transportColor}>
              <div className='transport-icon'></div>
            <div className='circle'></div>
          </div>
        </div>
        <div className="col-6 informations">
            <div>
                <h2 className="text-uppercase mb-1">{data.departure.label}</h2>
                dir. {data.direction}
            </div>
            <div className="text-uppercase">{data.arrival.label}</div>
        </div>
      </div>
    </div>
  );
}
export default DisplayTransportType;
