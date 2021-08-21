const Prices = (props) => {
  return (
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
  )
}
export default Prices;