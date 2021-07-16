import Header from '../Component/Header';
import Banner from '../Component/Banner';
// import HowWeWork from '../Component/HowWeWork';
// import Wedelever from '../Component/WeDeliver';
import Footer from '../Component/Footer';
function Home() {
  let H1 = 'Sobha City Gurgaon';
  let H2 = 'Sobha City Gurgaon Sector 108';
  return (
    <>
      <Header />
      <Banner />
      <section className="banner_info">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="p_tit">
                <h1>{H1}</h1>
                <div className="tit_tag">Spacious 3 Bedroom & Home Office Residences with incredible benefits.</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 order-lg-1">
              <div className="right_form">
                <div className="frm_call"><a href="tel:+911149500008" rel="nofollow"><i className="sym_contact-filled"></i>+91 11 4950 0008</a></div>
                <div className="frm_heading">EXPRESS YOUR INTEREST</div>
                <div className="frm_inner">
                  <form className="contactform">
                    <div className="form-group">
                      <label>Full Name <i>*</i></label>
                      <input type="text" name="name" className="form-control" placeholder="Enter Your Name" />
                      <span className="invalid_name">Please enter valid name.</span>
                    </div>

                    <div className="form-group">
                      <label>Email ID <i>*</i></label>
                      <input type="email" name="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group"><label>Country <i>*</i></label><select name="country" onchange="countrycode(this.options[this.selectedIndex].value)" className="form-control country" required>
                      <option value="">Country</option>
                    </select>
                    </div>
                    <div className="form-group">
                      <label>Mobile No. <i>*</i></label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text phonecode"></span>
                        </div>
                        <input type="tel" name="phone" placeholder="Phone No." className="form-control" value="" />
                      </div>
                    </div>
                    <input type="hidden" name="utm_source" value="<?php echo $utm; ?>" />
                    <input type="hidden" name="comment" value="I need to know more about this project." />
                    <div className="text-center">
                      <input type="submit" name="Submit" className="btn btn-primary btn-lg btn-block" value="REQUEST A CALL" />
                    </div>
                  </form>
                  <div className="mt-2 nshare"><small>We will not share your email &amp; Number. No spam.</small></div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 order-lg-0">
              <div className="p_det">
                <div className="row">
                  <div className="col-lg-6 col-md-4 col-sm-6 col-6"><span>30 : 70 </span>
                    <p>easy to own payment plan</p></div>
                  <div className="col-lg-6 col-md-4 col-sm-6 col-6"><span>39+ acre </span><p>of a big scale group housing development</p></div>
                  <div className="col-lg-6 col-md-4 col-sm-6 col-6"><span>8.5 ACRE </span><p>of urban park & open green spaces</p></div>
                  <div className="col-lg-6 col-md-4 col-sm-6 col-6"><span>32 METER </span><p>grand entrance plaza</p></div>
                  <div className="col-lg-6 col-md-4 col-sm-6 col-6"><span>15 MINS </span><p>from IGI Airport</p></div>
                  <div className="col-lg-6 col-md-4 col-sm-6 col-6"><span>16 SPORTS </span><p>& social amenities</p></div>
                  <div className="col-lg-6 col-md-4 col-sm-6 col-6"><span>2 CLUBHOUSES </span><p>spread over 40,000 sq.ft.</p></div>
                  <div className="col-lg-6 col-md-4 col-sm-6 col-6"><span>HALF AN ACRE </span><p>of resort style lakelet</p></div>
                </div>
              </div>

              <div className="p_config">
                <div className="row">
                  <div className="col-md-12"><div className="h5 conf_heading">Configurations</div></div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6"><div className="config_item"><i className="sym_home"></i> <span>Property Type </span><p>Apartments</p></div></div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6"><div className="config_item"><i className="sym_location-filled"></i> <span>Location </span><p>Sector 108, Gurgaon</p></div></div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6"><div className="config_item"><i className="sym_flooring"></i> <span>Sizes </span><p>1381 - 2343 Sq.Ft.</p></div></div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6"><div className="config_item"><i className="sym_building"></i> <span>Towers </span>
                    <p>22 Towers</p></div></div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6"><div className="config_item"><i className="sym_bed"></i> <span>Bedroom </span><p>2 BHK, 3 BHK</p></div></div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-6"><div className="config_item"><i className="sym_rupee-alt"></i> <span>Price </span>
                    <p>1.20* Cr. <small>Onwards</small></p></div></div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>



      <section className="des_con">
        <div className="container">
          <div className="row mb-5">
            <figure className="col-lg-5"><img src="images/overview-01.jpg" alt="{H1}" className="img-fluid" /></figure>
            <div className="col-lg-7">
              <div className="des_heading text-left">
                <h2 className="mb-2">{H2}</h2>
              </div>
              <p><strong>Sobha City Gurgaon</strong> – “Enjoy the life surrounded with peace of luxury and serenity” with satisfaction that takes life to next level.</p>
              <p><strong>Sobha City</strong> has deliberately crafted at Sector 108 Dwarka Expressway which is the fastest developing region of Gurgaon. This is a residential project to which you can call a dream home
                for a generation. Passionately created 2 & 3 BHK Apartments with the best in class amenities, <strong>Sobha City Dwarka Expressway</strong> is for those who wish for a delighted lifestyle.
                Spread over 39 acres of land where only 14% of the total land is dedicated for the construction
                of towers and the rest is for open green areas & amenities.</p>
              <p>Sobha City Gurugram is a pioneering and extensive community planned to give you everything you wish for in a home, just made superior with modern technology. Step in with your family and experience peace of mind where your metropolitan lifestyle is straightforward, smart, and stress-free.</p>
            </div>
          </div>

          <div className="row mb-5">
            <figure className="col-lg-5 order-lg-1"><img src="images/overview-02.jpg" alt={H1} className="img-fluid" /></figure>
            <div className="col-lg-7 order-lg-0">
              <h4>USP’s of Sobha City Gurgaon</h4>
              <p>Living in Sobha City Gurgaon comes with many perks that other residential communities in Gurgaon have lacked. Some of the best are:-</p>
              <ul>
                <li>86% open &amp; green areas</li>
                <li>2 clubhouses spread over 40,000 sq. Ft</li>
                <li>16+ sports &amp; social amenities</li>
                <li>700+ elite families have already chosen Sobha City Sector 108</li>
                <li>8.5 acres of urban park</li>
                <li>0.6 Acres of resort-style lakelet with an island deck & toddler’s pool</li>
                <li>1.25 acres of party lawn and dedicated camping ground</li>
                <li>500m frontage on an operational 75m road</li>
                <li>Surrounded by Delhi’s Reserved Greens on two sides</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="prce_list">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="text-lg-center mb-4">{H1} - Price List</h2>
              <div className="row justify-content-center">
                <div className="col-lg-3">
                  <div className="prclist">
                    <div className="cd-price">
                      <div className="floorname">2 BHK</div>
                      <div className="prjsize">Tower : A1 | Unit Type : A</div>
                      <div className="floorname1"><small>Size </small>1381 Sq. Ft.</div>
                    </div>
                    <div className="lprice">
                      <small>Price</small>
                      <sup className="sym_rupee-alt"></sup>1.20<sub>* Cr.</sub> <span>Onwards</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="prclist">
                    <div className="cd-price">
                      <div className="floorname">3 BHK</div>
                      <div className="prjsize">Tower : A1 &amp; B1 | Unit Type : B </div>
                      <div className="floorname1"><small>Size </small>1711 Sq. Ft.</div>
                    </div>
                    <div className="lprice">
                      <small>Price</small>
                      <sup className="sym_rupee-alt"></sup>1.52<sub>* Cr.</sub> <span>Onwards</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="prclist">
                    <div className="cd-price">
                      <div className="floorname">3 BHK</div>
                      <div className="prjsize">Tower : B3 | Unit Type : B</div>
                      <div className="floorname1"><small>Size </small>1711 Sq. Ft.</div>
                    </div>
                    <div className="lprice">
                      <small>Price</small>
                      <sup className="sym_rupee-alt"></sup>1.69<sub>* Cr.</sub> <span>Onwards</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="prclist">
                    <div className="cd-price">
                      <div className="floorname">3 BHK</div>
                      <div className="prjsize">Tower : B1 | Unit Type : C</div>
                      <div className="floorname1"><small>Size </small>2003 Sq. Ft.</div>
                    </div>
                    <div className="lprice">
                      <small>Price</small>
                      <sup className="sym_rupee-alt"></sup>1.78<sub>* Cr.</sub> <span>Onwards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>








      <section className="consul_area">
        <div className="container">
          <div className="row no-gutters justify-content-lg-center">
            <div className="col-lg-12">
              <div className="h2 text-center">How We works</div>
              <p className="text-center mb-4"><strong>Your Dream Home is Just a Few Clicks &amp; Scrolls Away!</strong></p>
            </div>
            <div className="col-md-3">
              <div className="consul__inner no_bdr">
                <a href={void (0)} className="stretched-link" data-toggle="modal" data-target="#downloadForm"><i className="sym_download"></i></a> <strong>Download</strong>
                <span>Click here to download the latest information about the project.</span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="consul__inner">
                <a href={void (0)} className="stretched-link" data-toggle="modal" data-target="#consulForm"><i className="sym_agent"></i></a> <strong>Consultant</strong>
                <span>Consult With Our Dedicated Executives For Every Query In Mind.</span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="consul__inner">
                <a href={void (0)} className="stretched-link" data-toggle="modal" data-target="#SitevisitForm"><i className="sym_cab"></i></a> <strong>Site Visit</strong>
                <span>Get A Deep Knowledge Of The Site With Our Executive.</span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="consul__inner no_bdr">
                <a href={void (0)} className="stretched-link" data-toggle="modal" data-target="#BestdealForm"><i className="sym_np-deals-offers"></i></a> <strong>Best Deal</strong>
                <span>Enjoy Special Festive Or Seasonal Offers.</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="des_ameni">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="h1">Amenities</div>
              <div className="h5 mb-4">Everything here in this wonderful residential community evokes man-made & natural beauty
                and luxury. Adorned with modern amenities that are considered around your needs of leisure, happiness, health, and engagement in recreation. Experience the comfort of life in <strong>Sobha
                  City Sector 108 Gurgaon</strong> that’s up and above everything else.</div>
              <div className="h4 mb-4">Two Clubhouses</div>
            </div>
            <figure className="col-lg-6 col-md-6 mb-5"><img src="images/clubhouses-image1.jpg" alt="" />
              <figcaption>Clubhouse Oval-1</figcaption>
            </figure>
            <figure className="col-lg-6 col-md-6 mb-5"><img src="images/clubhouses-image2.jpg" alt="" />
              <figcaption>Clubhouse Oval-2</figcaption>
            </figure>

            <div className="col-lg-3 col-md-4 col-sm-4 col-6">
              <div className="ameni_item"><i className="sym_nightclub-filled"></i> Clubhouse</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-6">
              <div className="ameni_item"><i className="sym_gym"></i> Gym</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-6">
              <div className="ameni_item"><i className="sym_amenities-swimming"></i> Swimming Pool</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-6">
              <div className="ameni_item"><i className="sym_community-hall"></i> Tennis Court</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-6">
              <div className="ameni_item"><i className="sym_playarea"></i> Children's Play Area</div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-4 col-6">
              <div className="ameni_item"><i className="sym_sports"></i> Cricket Pitch</div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="ameni_item"><i className="sym_community-hall"></i> Multi-Purpose Hall</div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="ameni_item"><i className="sym_basketball"></i> Basketball Court</div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="ameni_item"><i className="sym_nightclub-filled"></i> Party Lawn</div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="ameni_item"><i className="sym_amphitheater"></i> Camping Ground</div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6">
              <div className="ameni_item"><i className="sym_ra-property"></i> Pet Park</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
