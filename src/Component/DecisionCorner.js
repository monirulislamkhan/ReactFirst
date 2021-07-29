import React from 'react';
export const DecisionCorner = () => {
  return (
    <section class="callb">
      <figure><img src="images/decision-corner.svg" class="img-fluid" alt="DECISION CORNER" /></figure>
      <div class="h3 font-weight-bold">DECISION CORNER</div>
      <div class="h4">Do You Want a deal of Investment? Just let us know!!</div>
      <div class="callb__left">
        <div class="callb__left__one">
          <div class="h6 font-weight-bold">Let Us Serve You Beyond</div>
          <a href="javascript:void(Tawk_API.toggle())" class="btn btn-primary">Ask&nbsp;Any&nbsp;Question</a>
        </div>
        <div class="callb__left__two">
          <div class="h6 font-weight-bold">Talk For Right Investment</div>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalSchedule" onclick='schedule_click("Button Schedule","SBClick","SB");'>Schedule&nbsp;Now</button>
        </div>
      </div>
    </section>
  )
}

