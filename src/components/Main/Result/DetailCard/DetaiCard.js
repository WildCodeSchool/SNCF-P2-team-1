import React from 'react';
import DetailCardRecap from './DetailCardRecap/DetailCardRecap';
import DetailCardRoadmap from './DetailCardRoadmap/DetailCardRoadmap';

const DetailCard = () => {
    return ( 
        <div className="container">
            <div className="row">
                <DetailCardRecap />
                <DetailCardRoadmap />
            </div>
        </div>

     );
}
 
export default DetailCard ;