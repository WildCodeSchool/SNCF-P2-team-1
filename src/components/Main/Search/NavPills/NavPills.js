import React from 'react';
import './NavPills.css';

function NavPills() {
    return(
        <div className='row'>
            <div className='col-sm-12'>
                <ul class="nav nav-pills row trans-tabs nav access-tabs mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item col-md-4 col-lg-3">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">
                            Itinéraires
                        </a>
                    </li>
                    <li class="nav-item col-md-4 col-lg-3">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">
                            Prochain départs
                        </a>
                    </li>
                </ul>
                <div class="tab-content py-3 mx-2" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home form-itineraire" role="tabpanel" aria-labelledby="pills-home-tab">
                        form...
                    </div>
                    <div class="tab-pane fade next-departures" id="pills-profile form-temps-reel" role="tabpanel" aria-labelledby="pills-profile-tab">
                        form...
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavPills;