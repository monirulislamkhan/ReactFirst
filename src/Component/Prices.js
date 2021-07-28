import React from 'react';

const Prices = (props) => {
  return (
    <div className='col-lg-3'>
      <div className='prclist'>
        <div className='cd-price'>
          <div className='floorname'>{props.unittype}</div>
          <div className='prjsize'>{props.typename}</div>
          <div className='floorname1'><small>Size </small>{props.sizes}</div>
        </div>
        <div className='lprice'>
          <small>Price</small>
          <sup className='sym_rupee-alt'></sup>{props.price}<sub>* Cr.</sub>
          <span>Onwards</span>
        </div>
      </div>
    </div>
  )
}
export default Prices;