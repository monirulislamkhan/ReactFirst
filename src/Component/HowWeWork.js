import React from 'react';
import ProjectForm from './MainForm';
const HowWeWork = () => {
  let H1 = 'Sobha City Gurgaon';
  return (
    <>
      <div className="modal fade" id="downloadForm" tabindex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div class="sch_modal">
                <div class="h4"><i class="sym_download"></i> Download</div>
                <p>Allow us to help you with more downloadable information. By filling this form you will get a mail with given below downloadable items:</p>
                <ul>
                  <li>Master Plan</li>
                  <li>Floor Plan</li>
                  <li>Unit Plan</li>
                  <li>Location Map</li>
                </ul>
                <form>
                  <div class="sch_form">
                    <ProjectForm />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowWeWork;