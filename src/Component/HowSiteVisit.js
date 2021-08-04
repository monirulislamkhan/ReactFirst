import React from 'react';
import MainForm from './MainForm';
export const HowSiteVisit = () => {
  return (
    <>
      <div className="modal fade" id='SitevisitForm' tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="sch_modal">
                <div className="h4"><i className='fas fa-car-alt'></i> Site Visit</div>
                <p>The site visit is very important for homebuyers to enhance the understanding of real construction practice. With our doorstep site visit service you will get a deep understanding about:-</p>
                <ul>
                  <li>Construction Quality</li>
                  <li>Actual sizes of the rooms</li>
                  <li>Site Area</li>
                  <li>Familiarity with neighborhood</li>
                </ul>
                <div className="sch_form">
                  <MainForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}