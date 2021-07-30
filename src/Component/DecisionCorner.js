import React from 'react';
import { Link } from "react-router-dom";
export const DecisionCorner = () => {
  return (
    <section className="callb">
      <figure><img src="images/decision-corner.svg" className="img-fluid" alt="DECISION CORNER" /></figure>
      <div className="h3 font-weight-bold">DECISION CORNER</div>
      <div className="h4">Do You Want a deal of Investment? Just let us know!!</div>
      <div className="callb__left">
        <div className="callb__left__one">
          <div className="h6 font-weight-bold">Let Us Serve You Beyond</div>
          <Link to="javascript:void(Tawk_API.toggle())" className="btn btn-primary">Ask Any Question</Link>
        </div>
        <div className="callb__left__two">
          <div className="h6 font-weight-bold">Talk For Right Investment</div>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalSchedule">Schedule Now</button>
        </div>
      </div>
    </section>
  )
}

