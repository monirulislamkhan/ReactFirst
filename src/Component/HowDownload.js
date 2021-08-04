import React from 'react';
import MainForm from './MainForm';
export const HowDownload = () => {
  return (
    <>
      <div className="modal fade" id='downloadForm' tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="sch_modal">
                <div className="h4"><i className='fas fa-download'></i> Download</div>
                <p>Allow us to help you with more downloadable information. By filling this form you will get a mail with given below downloadable items:</p>
                <ul>
                  <li>Master Plan</li>
                  <li>Floor Plan</li>
                  <li>Unit Plan</li>
                  <li>Location Map</li>
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