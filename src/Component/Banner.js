import React from 'react';
const Banner = (props) => {
  return (
    <section className='bnr_sec'>
      <img src={`/images/${props.DBanner}.jpg`} width='1500' height='650' className='img-fluid img-big' alt={`${window.name}`} />
      <img src={`/images/${props.MBanner}.jpg`} width='414' height='290' className='img-fluid img-small' alt={`${window.name} Sector 108`} />
    </section>
  );
};
export default Banner;
