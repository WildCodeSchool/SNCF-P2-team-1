import React from 'react';

function NavPills() {
    return(
        <div className='row'>
            <div className='col-12'>
                <ul class="nav nav-pills row mb-3" id="pills-tab" role="tablist">
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
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                </div>
            </div>
        </div>
    )
}

export default NavPills;