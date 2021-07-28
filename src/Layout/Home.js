import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Component/Header';
import Banner from '../Component/Banner';
import ProjectForm from '../Component/MainForm';
import Prices from '../Component/Prices';
import HowDownload from '../Component/HowDownload';
import HowConsultant from '../Component/HowConsultant';
import HowSiteVisit from '../Component/HowSiteVisit';
import HowBestDeal from '../Component/HowBestDeal';
// import Wedelever from '../Component/WeDeliver';
import Footer from '../Component/Footer';

const Home = (props) => {
  const article = '';
  const priceData = [
    {
      unittype: '2 BHK',
      typename: 'Tower : A1 | Unit Type : A',
      sizes: '1381 Sq. Ft.',
      price: '1.20'
    },
    {
      unittype: '3 BHK',
      typename: 'Tower : A1 B1 | Unit Type : B',
      sizes: '1711 Sq. Ft.',
      price: '1.52'
    },
    {
      unittype: '3 BHK',
      typename: 'Tower : B3 | Unit Type : B',
      sizes: '1711 Sq. Ft.',
      price: '1.69'
    },
    {
      unittype: '3 BHK',
      typename: 'Tower : B1 | Unit Type : C',
      sizes: '2003 Sq. Ft.',
      price: '1.78'
    }
  ];

  return (
    <>
      <Header />
      <Banner />
      <section className='banner_info'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='p_tit'>
                <h1>{window.name}</h1>
                <div className='tit_tag'>
                  Spacious 3 Bedroom & Home Office Residences with incredible
                  benefits.
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 order-lg-1'>
              <div className='right_form'>
                <div className='frm_call'>
                  <a href='tel:+911149500008' rel='nofollow'>
                    <i className="fas fa-phone-alt"></i> +91 11 4950 0008
                  </a>
                </div>
                <div className='frm_heading'>EXPRESS YOUR INTEREST.</div>
                <div className='frm_inner'>
                  <ProjectForm />
                  <div className='mt-2 nshare'>
                    <small>
                      We will not share your email &amp; Number. No spam.
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-8 order-lg-0'>
              <div className='p_det'>
                <div className='row'>
                  <div className='col-lg-6 col-md-4 col-sm-6 col-6'>
                    <span>30 : 70 </span>
                    <p>easy to own payment plan</p>
                  </div>
                  <div className='col-lg-6 col-md-4 col-sm-6 col-6'>
                    <span>39+ acre </span>
                    <p>of a big scale group housing development</p>
                  </div>
                  <div className='col-lg-6 col-md-4 col-sm-6 col-6'>
                    <span>8.5 ACRE </span>
                    <p>of urban park & open green spaces</p>
                  </div>
                  <div className='col-lg-6 col-md-4 col-sm-6 col-6'>
                    <span>32 METER </span>
                    <p>grand entrance plaza</p>
                  </div>
                  <div className='col-lg-6 col-md-4 col-sm-6 col-6'>
                    <span>15 MINS </span>
                    <p>from IGI Airport</p>
                  </div>
                  <div className='col-lg-6 col-md-4 col-sm-6 col-6'>
                    <span>16 SPORTS </span>
                    <p>& social amenities</p>
                  </div>
                  <div className='col-lg-6 col-md-4 col-sm-6 col-6'>
                    <span>2 CLUBHOUSES </span>
                    <p>spread over 40,000 sq.ft.</p>
                  </div>
                  <div className='col-lg-6 col-md-4 col-sm-6 col-6'>
                    <span>HALF AN ACRE </span>
                    <p>of resort style lakelet</p>
                  </div>
                </div>
              </div>

              <div className='p_config'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='h5 conf_heading'>Configurations</div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-4 col-6'>
                    <div className='config_item'>
                      <i className='fas fa-home'></i> <span>Property Type </span>
                      <p>Apartments</p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-4 col-6'>
                    <div className='config_item'>
                      <i className='fas fa-map-marked'></i>{' '}
                      <span>Location </span>
                      <p>Sector 108, Gurgaon</p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-4 col-6'>
                    <div className='config_item'>
                      <i className="fas fa-ruler-combined"></i> <span>Sizes </span>
                      <p>1381 - 2343 Sq.Ft.</p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-4 col-6'>
                    <div className='config_item'>
                      <i className="fas fa-building"></i> <span>Towers </span>
                      <p>22 Towers</p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-4 col-6'>
                    <div className='config_item'>
                      <i className="fas fa-bed"></i> <span>Bedroom </span>
                      <p>2 BHK, 3 BHK</p>
                    </div>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-4 col-6'>
                    <div className='config_item'>
                      <i className="fas fa-rupee-sign"></i> <span>Price </span>
                      <p>
                        1.20* Cr. <small>Onwards</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='des_con'>
        <div className='container'>
          <div className='row mb-5'>
            <figure className='col-lg-5'>
              <img src='images/overview-01.jpg' alt='' className='img-fluid' />
            </figure>
            <div className='col-lg-7'>
              <div className='des_heading text-start'>
                <h2 className='mb-2'>{`${window.name} Monirul`}</h2>
              </div>
              <p>
                <strong>Sobha City Gurgaon</strong> – “Enjoy the life surrounded
                with peace of luxury and serenity” with satisfaction that takes
                life to next level.
              </p>
              <p>
                <strong>Sobha City</strong> has deliberately crafted at Sector
                108 Dwarka Expressway which is the fastest developing region of
                Gurgaon. This is a residential project to which you can call a
                dream home for a generation. Passionately created 2 & 3 BHK
                Apartments with the best in class amenities,
                <strong>Sobha City Dwarka Expressway</strong> is for those who
                wish for a delighted lifestyle. Spread over 39 acres of land
                where only 14% of the total land is dedicated for the
                construction of towers and the rest is for open green areas &
                amenities.
              </p>
              <p>
                Sobha City Gurugram is a pioneering and extensive community
                planned to give you everything you wish for in a home, just made
                superior with modern technology. Step in with your family and
                experience peace of mind where your metropolitan lifestyle is
                straightforward, smart, and stress-free.
              </p>
            </div>
          </div>

          <div className='row mb-5'>
            <figure className='col-lg-5 order-lg-1'>
              <img
                src='images/overview-02.jpg'
                alt={window.name}
                className='img-fluid'
              />
            </figure>
            <div className='col-lg-7 order-lg-0'>
              <h4>USP’s of Sobha City Gurgaon</h4>
              <p>
                Living in Sobha City Gurgaon comes with many perks that other
                residential communities in Gurgaon have lacked. Some of the best
                are:-
              </p>
              <ul>
                <li>86% open &amp; green areas</li>
                <li>2 clubhouses spread over 40,000 sq. Ft</li>
                <li>16+ sports &amp; social amenities</li>
                <li>
                  700+ elite families have already chosen Sobha City Sector 108
                </li>
                <li>8.5 acres of urban park</li>
                <li>
                  0.6 Acres of resort-style lakelet with an island deck &
                  toddler’s pool
                </li>
                <li>1.25 acres of party lawn and dedicated camping ground</li>
                <li>500m frontage on an operational 75m road</li>
                <li>Surrounded by Delhi’s Reserved Greens on two sides</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='prce_list'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h2 className='text-lg-center mb-4'>{window.name} - Price List</h2>
              <div className='row justify-content-center'>
                {
                  priceData.map((article, index) => {
                    return (
                      <Prices key={index} unittype={article.unittype} typename={article.typename} sizes={article.sizes} price={article.price} />
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='consul_area'>
        <div className='container'>
          <div className='row gx-0 justify-content-lg-center'>
            <div className='col-lg-12'>
              <div className='h2 text-center'>How We works</div>
              <p className='text-center mb-4'>
                <strong>
                  Your Dream Home is Just a Few Clicks &amp; Scrolls Away!
                </strong>
              </p>
            </div>
            <div className='col-md-3'>
              <div className='consul__inner no_bdr'>
                <Link to='#' className="stretched-link" data-bs-toggle="modal" data-bs-target="#downloadForm">
                  <i className='fas fa-download'></i>
                </Link>
                <strong>Download</strong>
                <span>
                  Click here to download the latest information about the
                  project.
                </span>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='consul__inner'>
                <Link to='#' className="stretched-link" data-bs-toggle="modal" data-bs-target="#consulForm">
                  <i className='far fa-handshake'></i>
                </Link>
                <strong>Consultant</strong>
                <span>
                  Consult With Our Dedicated Executives For Every Query In Mind.
                </span>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='consul__inner'>
                <Link to='#' className="stretched-link" data-bs-toggle='modal' data-bs-target='#SitevisitForm'>
                  <i className='fas fa-car-alt'></i>
                </Link>

                <strong>Site Visit</strong>
                <span>
                  Get A Deep Knowledge Of The Site With Our Executive.
                </span>
              </div>
            </div>
            <div className='col-md-3'>
              <div className='consul__inner no_bdr'>
                <Link to='#' className="stretched-link" data-bs-toggle='modal' data-bs-target='#BestdealForm'>
                  <i className='fas fa-gifts'></i>
                </Link>
                <strong>Best Deal</strong>
                <span>Enjoy Special Festive Or Seasonal Offers.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='des_ameni'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='h1'>Amenities</div>
              <div className='h5 mb-4'>
                Everything here in this wonderful residential community evokes
                man-made & natural beauty and luxury. Adorned with modern
                amenities that are considered around your needs of leisure,
                happiness, health, and engagement in recreation. Experience the
                comfort of life in
                <strong>Sobha City Sector 108 Gurgaon</strong> that’s up and
                above everything else.
              </div>
              <div className='h4 mb-4'>Two Clubhouses</div>
            </div>
            <figure className='col-lg-6 col-md-6 mb-5'>
              <img src='images/clubhouses-image1.jpg' alt='' />
              <figcaption>Clubhouse Oval-1</figcaption>
            </figure>
            <figure className='col-lg-6 col-md-6 mb-5'>
              <img src='images/clubhouses-image2.jpg' alt='' />
              <figcaption>Clubhouse Oval-2</figcaption>
            </figure>

            <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
              <div className='ameni_item'>
                <i class="fas fa-dice"></i> Clubhouse
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
              <div className='ameni_item'>
                <i class="fas fa-dumbbell"></i> Gym
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
              <div className='ameni_item'>
                <i class="fas fa-swimming-pool"></i> Swimming Pool
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
              <div className='ameni_item'>
                <i class="fas fa-table-tennis"></i> Tennis Court
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
              <div className='ameni_item'>
                <i class="fas fa-child"></i> Children's Play Area
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
              <div className='ameni_item'>
                <i class="fas fa-baseball-ball"></i> Cricket Pitch
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
              <div className='ameni_item'>
                <i className='sym_community-hall'></i> Multi-Purpose Hall
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
              <div className='ameni_item'>
                <i class="fas fa-baseball-ball"></i> Basketball Court
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
              <div className='ameni_item'>
                <i class="fas fa-glass-cheers"></i> Party Lawn
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
              <div className='ameni_item'>
                <i className='sym_amphitheater'></i> Camping Ground
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
              <div className='ameni_item'>
                <i class="fas fa-parking"></i> Pet Park
              </div>
            </div>
          </div>
        </div>
      </section>
      <HowDownload />
      <HowConsultant />
      <HowSiteVisit />
      <HowBestDeal />
      <Footer />
    </>
  )
};

export default Home;
