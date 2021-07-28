import React from 'react';
import ProjectForm from './MainForm';
const HowBestDeal = () => {
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
                <div className="h4"><i className='fas fa-gifts'></i> Best Deal</div>
                <p>We know that you are here for the best deal and so we are. By filling this form you will get the best deals by:-</p>
                <ul>
                  <li>Best Deals</li>
                  <li>Periodic/Festival Offers</li>
                  <li>Best unit in your budget</li>
                </ul>
                <div className="sch_form">
                  <ProjectForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowBestDeal;