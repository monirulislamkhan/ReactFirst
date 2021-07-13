function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul>
                <li><a href="<?= _BASEURL_ ?>">Home</a></li>
                <li><a href="<?= _BASEURL_ ?>location-map.html">Location Map</a></li>
                <li><a href="<?= _BASEURL_ ?>gallery.html">Gallery</a></li>
                <li><a href="<?= _BASEURL_ ?>disclaimer.html" rel="nofollow">Disclaimer</a></li>
              </ul>
              <div className="copyright">Copyright &copy; domainName 2014 - <span id="currentYear"></span> | All Rights Reserved</div>
            </div>
          </div>
        </div>
      </footer>

      <div className="aside_btn">
        <div className="asd_item1"><i className="fas fa-ellipsis-v"></i></div>
        <div className="asd_item2"><input type="button" className="btn btn-primary btn-block" value="Enquire Now" onclick="leadFunction('Enquire Now','Lead');" data-toggle="modal" data-target="#ftrForm" /></div>
      </div>

      <div className="display_popup">
        <ul>
          <li><a href="tel:+91 98 1199 9666" onclick="divFunction('Click to Call','Phone Call')"><i className="fas fa-phone-alt"></i> <span>Call Now</span></a></li>
          <li><a href="https://api.whatsapp.com/send?phone=+919811999666&amp;text=Hey%20I'm%20interested%20in%20%20godrej serenity gurgaon" rel="nofollow" onclick="WhatsappLead('Whatsapp','Whatsapp Click')"><i className="fab fa-whatsapp"></i> <span>Whatsapp Now</span></a></li>
        </ul>
      </div>

      <div className="modal fade" id="ftrForm" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content shadow">
            <div className="modal-header">
              <div className="modal-content_heading">EXPRESS YOUR INTEREST</div>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body">
              <div className="mmessages" id="modalcontact-div" style={{ display: 'none' }}>
                <div id="modalpost_status"></div>
              </div>
              <form role="form" id="Modalcontactform" name="form1" method="post">
                <div className="mb-3"><input type="text" name="name" className="form-control" placeholder="Name" required /></div>
                <div className="mb-3"><input type="email" name="email" className="form-control" placeholder="Email" /></div>
                <input type="hidden" name="pname" value="<?php echo $pname; ?>" />
                <input type="hidden" name="event_cat" className="event_cat" value="POPFSubmit" />
                <div className="mb-3"><select name="country" id="country1" onchange="countrycode(this.options[this.selectedIndex].value)" className="form-control" required="required">
                  <option value="">Select Country</option>
                </select></div>
                <input type="hidden" name="comment" value="I need to know more about this.." />
                <input type="hidden" name="utm_source" value="<?php echo $utm; ?>" />
                <input type="hidden" name="deviceInfo" value="<?php echo $device; ?>" />
                <div className="mb-3">
                  <div className="input-group">
                    <div className="input-group-prepend"><span className="input-group-text" id="phonecode"></span></div>
                    <input type="hidden" name="phonecodeVal" id="phonecodeVal" value="" />
                    <input type="tel" name="phone" placeholder="Phone No." className="form-control phone" value="" required="required" />
                  </div>
                </div>
                <button type="submit" name="submit" className="btn btn-primary btn-block" id="modalcontact-form-btn"><i className="sym_contact-filled"></i> Assured Callback in 5 Mins</button>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
