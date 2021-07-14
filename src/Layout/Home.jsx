import Header from '../Component/Header';
import ProjectForm from '../Component/MainForm';
import Wedelever from '../Component/WeDeliver';
import Footer from '../Component/Footer';
function Home() {
  return (
    <>
      <Header />
      <section className="bnr_sec"></section>
      <section className="bnrfirst">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="top_inner">
                <div className="top_inner__main">
                  {/* <h1><?= H1 ?></h1> */}
                  <div className="sub_head">In the heart of Sohna is a one-of-a-kind gated community, where you get the best of secure gated living with an abundance of greenery.</div>
                  <div className="ticon">
                    <div className="ticon_items"><i className="fas fa-rupee-sign"></i>
                      <div>Price <span>81 Lac Onwards</span></div>
                    </div>
                    <div className="ticon_items"><i className="fas fa-bed"></i>
                      <div>Bedroom<span>2 & 3 BHK</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form_container">
                <div className="ftr_phone"><a href="tel:+9811999666"> <i className="fas fa-phone-alt"></i>+91 98 1199 9666</a></div>
                <div className="contact_heading">Get in touch with us!</div>
                <ProjectForm />
                <Wedelever />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="descrip" id="despc">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <figure className="ovr_img">
                <img src="assets/images/godrej-serinity-overview.jpg" className="img-fluid" alt="Godrej Serenity Sohna" />
              </figure>
            </div>
            <div className="col-lg-7">
              <div className="descrip__inner">
                {/* <h2><?= H2 ?></h2> */}
                <div className="h5">Inspired by the concept of Nature Centric Living, the community will host over 800+ tress, an electronic air cleaner system, and Covid-resistant CTFA 2.0 air-purification. Here, nature is not an amenity, but a way of life. </div>
                {/* <div className="rera"><span>Project Rera: </span>ZP-1017/AD(RA)/2014/26014</div> */}
                <p><strong>Godrej Serenity in Sohna Sector 33</strong> is an idea to facilitate nature-centric living with every modern convenience. These beautiful 2 & 3 BHK apartments are set in the middle of exquisitely beautiful surroundings, open the door to a new world, unlike others.</p>
                <p>The entire community is decorated with green foliage and planned to enjoy everything that adds pleasure to the life of inhabitants. Here the mornings start with the chirping of birds, noon are passing with wafts of fresh & calm breeze, and peaceful evening with absolute contentment and pleasure.</p>

                <div className="plist">
                  <div className="plist_items"><i className="fas fa-home" aria-hidden="true"></i>Developer <span>Godrej Properties</span></div>
                  <div className="plist_items"><i className="fas fa-location-arrow" aria-hidden="true"></i>Location <span>Gurugram</span></div>
                  <div className="plist_items"><i className="fas fa-paint-roller" aria-hidden="true"></i>Project Status <span>Pre - Launch</span></div>
                  <div className="plist_items"><i className="fas fa-building" aria-hidden="true"></i>Property Type <span>Residential</span></div>
                  <div className="plist_items"><i className="fas fa-layer-group" aria-hidden="true"></i>Sub Type <span>Apartment</span></div>
                  <div className="plist_items"><i className="fas fa-chart-pie"></i> Sizes <span>1300 - 2000 Sq. Ft.</span></div>
                  <div className="plist_items"><i className="fas fa-city" aria-hidden="true"></i>Site Area <span>18.7</span></div>
                  <div className="plist_items"><i className="far fa-building" aria-hidden="true"></i>Tower/Buildings <span>12 tower</span></div>
                  <div className="plist_items"><i className="fas fa-key" aria-hidden="true"></i>Completion <span>2025</span></div>
                </div>
                {/* <div className="text-lg-center"><a className="btn btn-outline-dark btn-sm" href="<?= _BASEURL_ ?>specifications.html">Known More Specifications..</a></div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricesec" id="priceId">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="pricesec__left">
                <figure>
                  <img src="assets/images/logo.png" className="img-fluid" alt="<?= H1 ?>" />
                </figure>
                {/* <div className="h2"><?= H1 ?> <span>Price List</span></div> */}
                <p>From configurations to quality of construction, extreme planning and best possible care have gone into every sq. ft. at Godrej Serenity Sohna. This residential community presents all to live an enhanced life at the very best price.</p>
              </div>
            </div>
            <div className="col-lg-4 pr-lg-0">
              <div className="pricesec__right">
                <div className="priceslide">
                  <div className="pitems">
                    <div className="pbg_col">
                      <small>PRICE</small>
                      <div className="plist_line"><i className="fas fa-rupee-sign"></i> <span>1.95</span><small>* Cr.</small> <sub>Onwards</sub></div>
                      <div className="item_line">Super Area <span> 1252 Sq. Ft.</span></div>
                      <div className="item_line">Carpet Area <span> 741 Sq. Ft.</span></div>

                      <div className="item_line">Type <span>2 BHK + 2 Toilet</span></div>
                      <div className="item_line">Inclusive of 2 Parking slots</div>
                      <div className="penq_btn"><button className="btn btn-primary btn-block" type="button" data-toggle="modal" data-target="#ftrForm">Enquire Now</button></div>
                    </div>
                  </div>
                  <div className="pitems">
                    <div className="pbg_col">
                      <small>PRICE</small>
                      <div className="plist_line"><i className="fas fa-rupee-sign"></i> <span>2.70</span><small>* Cr.</small> <sub>Onwards</sub></div>
                      <div className="item_line">Super Area <span> 1501 Sq. Ft.</span></div>
                      <div className="item_line">Carpet Area <span> 892 Sq. Ft.</span></div>
                      <div className="item_line">Type <span>3 BHK + 2 Toilet</span></div>
                      <div className="item_line">Inclusive of 2 Parking slots</div>
                      <div className="penq_btn"><button className="btn btn-primary btn-block" type="button" data-toggle="modal" data-target="#ftrForm">Enquire Now</button></div>
                    </div>
                  </div>

                  <div className="pitems">
                    <div className="pbg_col">
                      <small>PRICE</small>
                      <div className="plist_line"><i className="fas fa-rupee-sign"></i> <span>2.95</span><small>* Cr.</small> <sub>Onwards</sub></div>
                      <div className="item_line">Super Area <span> 1775 Sq. Ft.</span></div>
                      <div className="item_line">Carpet Area <span> 1060 Sq. Ft.</span></div>
                      <div className="item_line">Type <span>3 BHK + 3 Toilet </span></div>
                      <div className="item_line">Inclusive of 2 Parking slots</div>
                      <div className="penq_btn"><button className="btn btn-primary btn-block" type="button" data-toggle="modal" data-target="#ftrForm">Enquire Now</button></div>
                    </div>
                  </div>

                  <div className="pitems">
                    <div className="pbg_col">
                      <small>PRICE</small>
                      <div className="plist_line"><i className="fas fa-rupee-sign"></i> <span>3.25</span><small>* Cr.</small> <sub>Onwards</sub></div>
                      <div className="item_line">Super Area <span> 1901 Sq. Ft.</span></div>
                      <div className="item_line">Carpet Area <span> 1135 Sq. Ft.</span></div>
                      <div className="item_line">Type <span>3 BHK + 3T + SR</span></div>
                      <div className="item_line">Inclusive of 2 Parking slots</div>
                      <div className="penq_btn"><button className="btn btn-primary btn-block" type="button" data-toggle="modal" data-target="#ftrForm">Enquire Now</button></div>
                    </div>
                  </div>

                  <div className="pitems">
                    <div className="pbg_col">
                      <small>PRICE</small>
                      <div className="plist_line"><i className="fas fa-rupee-sign"></i> <span>3.90</span><small>* Cr.</small> <sub>Onwards</sub></div>
                      <div className="item_line">Super Area <span> 2500 Sq. Ft.</span></div>
                      <div className="item_line">Carpet Area <span> --- </span></div>
                      <div className="item_line">Type <span>4 BHK + 4T + Study</span></div>
                      <div className="item_line">Inclusive of 2 Parking slots</div>
                      <div className="penq_btn"><button className="btn btn-primary btn-block" type="button" data-toggle="modal" data-target="#ftrForm">Enquire Now</button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ameni_main" id="amentiId">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5">
              <div className="ameni_slider">
                <figure><img data-lazy="assets/images/amenities/amenitie-01.jpg" className="img-fluid" alt="<?= H1 ?> - Entertainment Park" /></figure>
                <figure><img data-lazy="assets/images/amenities/amenitie-02.jpg" className="img-fluid" alt="<?= H1 ?> - Gymnasium" /></figure>
                <figure><img data-lazy="assets/images/amenities/amenitie-03.jpg" className="img-fluid" alt="<?= H1 ?> - Park" /></figure>
                <figure><img data-lazy="assets/images/amenities/amenitie-04.jpg" className="img-fluid" alt="<?= H1 ?> - Kids Play Area" /></figure>
                <figure><img data-lazy="assets/images/amenities/amenitie-05.jpg" className="img-fluid" alt="<?= H1 ?> - Kids Swimming Pool" /></figure>
                <figure><img data-lazy="assets/images/amenities/amenitie-06.jpg" className="img-fluid" alt="<?= H1 ?> - Meditation" /></figure>
                <figure><img data-lazy="assets/images/amenities/amenitie-07.jpg" className="img-fluid" alt="<?= H1 ?> - Jogging Trail" /></figure>
                <figure><img data-lazy="assets/images/amenities/amenitie-08.jpg" className="img-fluid" alt="<?= H1 ?> - Yoga Room" /></figure>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="ameni_inner">
                {/* <div className="h2">Amenities - <?= H1 ?></div> */}
                <p>Lifestyle luxuries you can expect and more are available within the peripheries in the middle of green surroundings. Everything here is attentively designed to bring the greatest comfort, functionality, and best of both the green surrounding and contemporary convenience. </p>

                <p>Get pleasure from a life of fulfilment and happiness with a wide range of lifestyle features at Godrej Serenity in Central Delhi, Karol Bagh. These amenities are specially selected for different age groups keep in mind so that everyone in your family can enjoy the beauty of life here.</p>
                <div className="h5">Amenities Like</div>
                <div className="amen_ilist">
                  <div className="amenlitem"><i className="fas fa-glass-cheers"></i> Resort Themed Clubhouse</div>
                  <div className="amenlitem"><i className="fas fa-fire-extinguisher"></i> Anti Smog Guns</div>
                  <div className="amenlitem"><i className="fas fa-hand-holding-water"></i> Centralized RO System</div>
                  <div className="amenlitem"><i className="fas fa-basketball-ball"></i> 40+ Wellness Activities</div>
                  <div className="amenlitem"><i className="fas fa-parking"></i> 2 Hectare Central Green</div>
                  <div className="amenlitem"><i className="fas fa-wind"></i> Advanced Air Purification</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="loca_sec" id="locationId">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="loca__inner">
                {/* <div className="h3">Location Advantage - <?= H1 ?></div> */}
                <p>Godrej Serenity at Godrej Nature Plus is strategically located at Sector 33 Sohna on NH 248A, makes it well-connected with other best commercial & residential developments, and strong connectivity to Suburbs, Gurgaon, and major roads like Golf Course Extension Road, NH – 8, and Southern Peripheral Road.</p>
                <div className="h4">Key of Location</div>
                <ul>
                  <li><i className="fas fa-hospital"></i>Medanta Medicity <strong> 20 Kilometre</strong></li>
                  <li><i className="fas fa-plane-departure"></i> IGI Airport T3 <strong> 39 Kilometre</strong></li>
                  <li><i className="fas fa-city"></i> Manesar <strong> 39 Kilometre</strong></li>
                  <li><i className="fas fa-road"></i>KMP Expressway <strong> 15 Kilometre</strong></li>
                  <li><i className="fas fa-road"></i> Golf Course Extension Road <strong> 14 Kilometre</strong></li>

                  <li><i className="fas fa-subway"></i> IFFCO Chowk Metro Station <strong> 26 Kilometre</strong></li>
                  <li><i className="fas fa-subway"></i> Udyog Vihar <strong> 29 Kilometre</strong></li>
                  <li><i className="fas fa-road"></i>Southern Peripheral Road <strong> 14 Kilometre</strong></li>
                  <li><i className="fas fa-plane-departure"></i> GD Goenka University <strong> 7 Kilometre</strong></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 order-lg-0">
              <figure className="figure">
                <img className="img-fluid" src="assets/images/godrej-serinity-location-map.jpg" alt="Project Location Map" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about__heading">About Developer</div>
              <p>Established in 1990 Godrej Properties Ltd. is a real estate developer; headquarter in Mumbai, with total assets of US$790 million and a leader of sustainable urbanization in India. The real estate developer is committed to altering India’s urban background through its best residential & commercial developments. </p>

              <div className="commoninfo">
                <div className="about__heading">More Information Links</div>
                <ul>
                  <li><a className="active" href="location-map.html"><i className="far fa-map"></i> Location Map </a></li>
                  <li><a href="gallery.html"><i className="far fa-image"></i> Gallery</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
