import React from 'react';
// import { Link } from "react-router-dom";
import MainForm from './MainForm';
export const DecisionCorner = () => {
  return (
    <>
      <section className="callb">
        <figure><img src="images/decision-corner.svg" width='406' height='200' className="img-fluid" alt="DECISION CORNER"  title="DECISION CORNER" /></figure>
        <div className="h3 font-weight-bold">DECISION CORNER</div>
        <div className="h4">Do You Want a deal of Investment? Just let us know!!</div>
        <div className="callb__left">
          <div className="callb__left__one">
            <div className="h6 font-weight-bold">Let Us Serve You Beyond</div>
            <a href="" className="btn btn-primary">Ask Any Question</a>
          </div>
          <div className="callb__left__two">
            <div className="h6 font-weight-bold">Talk For Right Investment</div>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalSchedule">Schedule Now</button>
          </div>
        </div>
      </section>
      <div className="modal fade" id='modalSchedule' tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="sch_modal">
                <div className="h4">Talk To Real Estate Professional</div>
                <ul>
                  <li className="w-100">Have you been searching for the right property for your investment?</li>
                  <li className="w-100">Buying property takes strenuous efforts to find out the best property.</li>
                  <li className="w-100">Relax! {window.name} will serve you unbiased advice on all leading real estate properties and you enjoy the best property assistance.</li>
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
export default DecisionCorner;