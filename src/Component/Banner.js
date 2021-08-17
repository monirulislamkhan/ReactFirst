import React from 'react';
const Banner = (props) => {
  return (
    <section className="bnr_sec">
      <img src={`/images/${props.DBanner}.jpg`} className="img-fluid img-big" alt="" />
      <img src={`/images/${props.MBanner}.jpg`} className="img-fluid img-small" alt="" />
    </section>
  )
}
export default Banner;