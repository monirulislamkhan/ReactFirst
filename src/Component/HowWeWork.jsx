const HowWeWork = () => {
  let H1 = 'Sobha City Gurgaon';
  return (
    <>
      <div class="form-group">
        <span class="invalid_name">Please enter valid name.</span>
        <input type="text" name="name" class="form-control" placeholder="Enter Your Name" value="" />
      </div>

      <div class="form-group">
        <span class="invalid_email">Please enter valid Email.</span>
        <input type="email" name="email" class="form-control" placeholder="Enter email" value="" />
      </div>

      <input type="hidden" name="pname" value="<?= H1 ?>" />

      <div class="form-group">
        <select name="country" onchange="countrycode(this.options[this.selectedIndex].value)" class="form-control country">
          <option value="">Country</option>
        </select>
      </div>

      <div class="form-group">
        <span class="invalid_phone">Please enter valid Phone Number.</span>
        <div class="input-group">
          <div class="input-group-prepend"><span class="input-group-text phonecode"></span></div>
          <input type="hidden" name="phonecodeVal" id="phonecodeVal" value="" class="phonecodeVal" />
          <input type="tel" name="phone" placeholder="Phone No." class="form-control" value="" />
        </div>
      </div>

      <input type="hidden" name="utm_source" value="<?php echo $utm; ?>" />
      <input type="hidden" name="comment" value="I need to know more about this project." />
      <div class="text-center">
        <input type="submit" name="Submit" class="btn btn-primary btn-block we-work-form" id="special-submit" value="REQUEST A CALL" />
      </div>















      <div className="modal fade" id="downloadForm" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content schedule_con">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="sch_modal">
                <div className="h4"><i className="sym_download"></i> Download</div>
                <p>Allow us to help you with more downloadable information. By filling this form you will get a mail with given below downloadable items:</p>
                <ul>
                  <li>Master Plan</li>
                  <li>Floor Plan</li>
                  <li>Unit Plan</li>
                  <li>Location Map</li>
                </ul>
                <form className="contactform">
                  <div className="sch_form">
                    <HowWeWork />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="modal fade" id="consulForm" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content schedule_con">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="sch_modal">
                <div className="h4"><i className="sym_agent"></i> Consultant</div>
                <p>We are trusted by buyers, builders, and sellers. We are an authorized channel partner for {H1}. </p>
                <p>Here you will get the best advice on:-</p>
                <ul>
                  <li className="w-100">Unit facing, floor rise, and apartment type.</li>
                  <li className="w-100">Home loan, down payment and payment plan.</li>
                  <li className="w-100">Or any other questions in your mind. </li>
                </ul>

                <form className="contactform">
                  <input type="hidden" name="event_cat" className="event_cat" value="ConsultantFormSubmit" />
                  <div className="sch_form">
                    <HowWeWork />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="SitevisitForm" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content schedule_con">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="sch_modal">
                <div className="h4"><i className="sym_cab"></i> Site Visit</div>
                <p>The site visit is very important for homebuyers to enhance the understanding of real construction practice. With our doorstep site visit service you will get a deep understanding about:-</p>
                <ul>
                  <li>Construction Quality</li>
                  <li>Actual sizes of the rooms</li>
                  <li>Site Area</li>
                  <li>Familiarity with neighborhood</li>
                </ul>
                <form className="contactform">
                  <input type="hidden" name="event_cat" className="event_cat" value="SiteVisitFormSubmit" />
                  <div className="sch_form">
                    <HowWeWork />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="BestdealForm" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content schedule_con">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="sch_modal">
                <div className="h4"><i className="sym_np-deals-offers"></i> Best Deal</div>
                <p>We know that you are here for the best deal and so we are. By filling this form you will get the best deals by:-</p>
                <ul>
                  <li>Best Deals</li>
                  <li>Periodic/Festival Offers</li>
                  <li>Best unit in your budget</li>
                </ul>
                <form className="contactform">
                  <input type="hidden" name="event_cat" className="event_cat" value="BestDealFormSubmit" />
                  <div className="sch_form">
                    <HowWeWork />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowWeWork;