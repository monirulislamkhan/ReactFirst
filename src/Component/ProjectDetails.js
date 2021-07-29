import React from 'react';

export const ProjectDetails = () => {
  return (
    <div className='col-lg-8 order-lg-0'>
      <div className='p_det'>
        <div className='row'>
          <div className='col-lg-6 col-md-4 col-sm-6 col-6'>
            <span>30 : 70 </span>
            <p>easy to own payment plan</p>
          </div>
          <div className='col-lg-6 col-md-4 col-sm-6 col-6'>
            <span>39+ acre </span>
            <p>of a big scale group housing development</p>
          </div>
          <div className='col-lg-6 col-md-4 col-sm-6 col-6'>
            <span>8.5 ACRE </span>
            <p>of urban park & open green spaces</p>
          </div>
          <div className='col-lg-6 col-md-4 col-sm-6 col-6'>
            <span>32 METER </span>
            <p>grand entrance plaza</p>
          </div>
          <div className='col-lg-6 col-md-4 col-sm-6 col-6'>
            <span>15 MINS </span>
            <p>from IGI Airport</p>
          </div>
          <div className='col-lg-6 col-md-4 col-sm-6 col-6'>
            <span>16 SPORTS </span>
            <p>& social amenities</p>
          </div>
          <div className='col-lg-6 col-md-4 col-sm-6 col-6'>
            <span>2 CLUBHOUSES </span>
            <p>spread over 40,000 sq.ft.</p>
          </div>
          <div className='col-lg-6 col-md-4 col-sm-6 col-6'>
            <span>HALF AN ACRE </span>
            <p>of resort style lakelet</p>
          </div>
        </div>
      </div>

      <div className='p_config'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='h5 conf_heading'>Configurations</div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4 col-6'>
            <div className='config_item'>
              <i className='fas fa-home'></i> <span>Property Type </span>
              <p>Apartments</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4 col-6'>
            <div className='config_item'>
              <i className='fas fa-map-marked'></i>{' '}
              <span>Location </span>
              <p>Sector 108, Gurgaon</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4 col-6'>
            <div className='config_item'>
              <i className="fas fa-ruler-combined"></i> <span>Sizes </span>
              <p>1381 - 2343 Sq.Ft.</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4 col-6'>
            <div className='config_item'>
              <i className="fas fa-building"></i> <span>Towers </span>
              <p>22 Towers</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4 col-6'>
            <div className='config_item'>
              <i className="fas fa-bed"></i> <span>Bedroom </span>
              <p>2 BHK, 3 BHK</p>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4 col-6'>
            <div className='config_item'>
              <i className="fas fa-rupee-sign"></i> <span>Price </span>
              <p>
                1.20* Cr. <small>Onwards</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}