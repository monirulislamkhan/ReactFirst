import React from 'react';
import ProjectForm from './MainForm';
const HowWeWork = (props) => {
  let H1 = 'Sobha City Gurgaon';
  return (
    <>
      <div className="modal fade" id={props.popUpId} tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="sch_modal">
                <div className="h4"><i className={props.iconName}></i> {props.iconValue}</div>
                <p>{props.Para}</p>
                <ul>
                  <li>{props.liLebel}</li>
                </ul>
                {props.popUpContent}
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

export default HowWeWork;