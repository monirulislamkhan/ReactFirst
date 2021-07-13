function ProjectForm() {
  return (
    <>
      <div className="messages" id="contact-div" style={{ display: 'none' }} >
        <a href="#" className="closeMessage"></a>
        <p id="post_status"></p>
      </div>
      <form role="form" name="form1" method="post" className="contactform1">
        <div className="mb-3"><input type="text" name="name" className="form-control" placeholder="Name" required /></div>
        <div className="mb-3"><input type="email" name="email" className="form-control" placeholder="Email" /></div>
        <input type="hidden" name="pname" value="<?php echo $pname; ?>" />
        <input type="hidden" name="event_cat" className="event_cat" value="IFSubmit" />
        <div className="mb-3"><select name="country" id="country" onchange="countrycode(this.options[this.selectedIndex].value)" className="form-control" required>
          <option value="">Select Country</option>
        </select></div>
        <input type="hidden" name="comment" value="I need to know more about this.." />
        <input type="hidden" name="utm_source" value="<?php echo $utm; ?>" />
        <input type="hidden" name="deviceInfo" value="<?php echo $device; ?>" />
        <div className="mb-3">
          <div className="input-group">
            <div className="input-group-prepend"><span className="input-group-text" id="phonecode1"></span></div>
            <input type="hidden" name="phonecodeVal" id="phonecodeVal1" value="" />
            <input type="tel" name="phone" placeholder="Phone No." className="form-control phone" value="" required />
          </div>
        </div>
        <button type="submit" name="submit" className="btn btn-primary btn-block" id="contact-form-btn"><i className="sym_contact-filled"></i> Assured Callback in 5 Mins</button>

      </form>

      <div className="pol_con">
        <div className="our_pro"><span>We Deliver</span></div>
        <ul>
          <li><i className="far fa-check-circle"></i><span>Assured<br /> Privacy</span></li>
          <li><i className="fas fa-headset"></i><span>Expert<br /> Consultation</span></li>
          <li><i className="fas fa-car-alt"></i><span>Free<br /> Site Visit</span></li>
          <li><i className="fas fa-rupee-sign"></i><span>Best<br /> Price</span></li>
        </ul>
      </div>
      <div className="acp">Call will be Facilitated by Authorized CP</div>
    </>
  )
}

export default ProjectForm;