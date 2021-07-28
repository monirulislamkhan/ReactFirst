import React from 'react';
import ProjectForm from './MainForm';
const HowConsultant = () => {
  return (
    <>
      <div className="modal fade" id='consulForm' tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="sch_modal">
                <div className="h4"><i className='far fa-handshake'></i> Consultant</div>
                <p>We are trusted by buyers, builders, and sellers. We are an authorized channel partner for {window.name}. </p>
                <p>Here you will get the best advice on:-</p>
                <ul>
                  <li>Master Plan</li>
                  <li>Floor Plan</li>
                  <li>Unit Plan</li>
                  <li>Location Map</li>
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

export default HowConsultant;