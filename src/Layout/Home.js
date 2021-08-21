import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../Component/Header';
import Banner from '../Component/Banner';
import { BannerInfo } from '../Component/BannerInfo';
import Prices from '../Component/Prices';
import { HowDownload } from '../Component/HowDownload';
import { HowConsultant } from '../Component/HowConsultant';
import { HowSiteVisit } from '../Component/HowSiteVisit';
import { HowBestDeal } from '../Component/HowBestDeal';
import { DecisionCorner } from '../Component/DecisionCorner';
import Footer from '../Component/Footer';

import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation, A11y]);

const Home = (props) => {
  const priceData = [
    {
      unittype: '2 BHK',
      typename: 'Tower : A3 & A4 | Unit Type : A',
      sizes: '1381 Sq. Ft.',
      price: '1.52',
    },
    {
      unittype: '3 BHK',
      typename: 'Tower : A3 & A4 | Unit Type : B',
      sizes: '1711 Sq. Ft.',
      price: '1.84',
    },
    {
      unittype: '3 BHK',
      typename: 'Tower : B3 & B4 | Unit Type : C',
      sizes: '2003 Sq. Ft.',
      price: '2.15',
    },
    {
      unittype: '3 BHK',
      typename: 'Tower : C5 & C6 | Unit Type : D',
      sizes: '2072 Sq. Ft.',
      price: '2.35',
    },
    {
      unittype: '3 BHK',
      typename: 'Tower : C5 & C6 | Unit Type : E',
      sizes: '2343 Sq. Ft.',
      price: '2.60',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sobha City Gurgaon Sector 108- Just Pay 30% Now</title>
        <meta
          name='description'
          content='Pay 30% Now & Rest on Possession, Sobha City Gurgaon offering 2 & 3 BHK apartments with home office, urban park residences with modern amenities in the fast-developing region.'
        />
        <link rel='canonical' href='/' />
      </Helmet>
      <Header />
      <Banner DBanner='home-page-banner' MBanner='home-page-banner-small' />
      <BannerInfo />
      <section className='des_con'>
        <div className='container'>
          <div className='row mb-5'>
            <figure className='col-lg-5'>
              <img src='images/overview-01.jpg' width='600' height='550' alt='Overview' className='img-fluid' />
            </figure>
            <div className='col-lg-7'>
              <div className='des_heading text-start'>
                <h2 className='mb-2'>{`${window.name} Sector 108`}</h2>
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
                width='418' height='334'
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
              <h2 className='text-lg-center mb-4'>
                {window.name} - Price List
              </h2>
              <div className='row justify-content-center'>
                <div className="col-lg-12">
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{ clickable: true }}
                    breakpoints={{
                      "640": {
                        "slidesPerView": 2
                      },
                      "768": {
                        "slidesPerView": 3
                      },
                      "1024": {
                        "slidesPerView": 4
                      }
                    }}
                  >
                    {priceData.map((article, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <Prices unittype={article.unittype} typename={article.typename} sizes={article.sizes} price={article.price} />
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                </div>
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
                <Link
                  to='#'
                  className='stretched-link'
                  data-bs-toggle='modal'
                  data-bs-target='#downloadForm'
                >
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
                <Link
                  to='#'
                  className='stretched-link'
                  data-bs-toggle='modal'
                  data-bs-target='#consulForm'
                >
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
                <Link
                  to='#'
                  className='stretched-link'
                  data-bs-toggle='modal'
                  data-bs-target='#SitevisitForm'
                >
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
                <Link
                  to='#'
                  className='stretched-link'
                  data-bs-toggle='modal'
                  data-bs-target='#BestdealForm'
                >
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
              <img
                width='590' height='330'
                className='img-fluid'
                src='images/clubhouses-image1.jpg'
                alt=''
              />
              <figcaption>Clubhouse Oval-1</figcaption>
            </figure>
            <figure className='col-lg-6 col-md-6 mb-5'>
              <img
                width='590' height='330'
                className='img-fluid'
                src='images/clubhouses-image2.jpg'
                alt=''
              />
              <figcaption>Clubhouse Oval-2</figcaption>
            </figure>

            <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
              <div className='ameni_item'>
                <i className='fas fa-dice'></i> Clubhouse
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
              <div className='ameni_item'>
                <i className='fas fa-dumbbell'></i> Gym
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
              <div className='ameni_item'>
                <i className='fas fa-swimming-pool'></i> Swimming Pool
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
              <div className='ameni_item'>
                <i className='fas fa-table-tennis'></i> Tennis Court
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
              <div className='ameni_item'>
                <i className='fas fa-child'></i> Children's Play Area
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-4 col-6'>
              <div className='ameni_item'>
                <i className='fas fa-baseball-ball'></i> Cricket Pitch
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
              <div className='ameni_item'>
                <i className='sym_community-hall'></i> Multi-Purpose Hall
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
              <div className='ameni_item'>
                <i className='fas fa-baseball-ball'></i> Basketball Court
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
              <div className='ameni_item'>
                <i className='fas fa-glass-cheers'></i> Party Lawn
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
              <div className='ameni_item'>
                <i class="fas fa-campground"></i> Camping Ground
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
              <div className='ameni_item'>
                <i className='fas fa-parking'></i> Pet Park
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='new_sec'>
        <svg
          className='custom-svg3'
          width='100%'
          height='298'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='svg_2'
            fill='#ffffff'
            stroke='#000'
            strokeWidth='0'
            d='m-19.87006,126.33922c0,0 2.16796,-1.48437 6.92379,-3.91356c4.75584,-2.42918 12.09956,-5.80319 22.45107,-9.58247c20.70303,-7.55856 53.43725,-16.7382 101.56202,-23.22255c48.12477,-6.48434 111.6401,-10.27339 193.90533,-7.05074c41.13262,1.61132 88.20271,5.91306 140.3802,12.50726c52.17748,6.59421 -86.4742,-15.61273 171.02458,26.26208c64.37469,10.4687 130.09704,0.19531 175.01626,-5.4736c44.91922,-5.66892 49.93384,-12.28022 191.44685,-45.34647c141.51301,-33.06625 221.34662,-61.99188 426.81438,-59.4919c102.73388,1.24999 203.44102,29.65927 398.99543,109.88821c195.55441,80.22895 668.78972,-44.38181 814.0537,-9.88704c-76.25064,69.23438 407.49874,281.32592 331.2481,350.5603c-168.91731,29.52009 85.02254,247.61162 -83.89478,277.13171c84.07062,348.27313 -2948.95065,-242.40222 -2928.39024,-287.84045'
          ></path>
        </svg>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 position-relative mt-lg-2'>
              <div className='h1'>
                Sobha City Gurgaon Construction Well Under Way
              </div>
              <p className='pb-3'>
                With robust construction and quality development the site of
                Sobha City Dwarka Expressway is getting ready to offer its
                possession on time
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='new_list'>
                <img
                  width='404' height='303'
                  src='images/constructions-thumb.jpg'
                  className='img-fluid'
                  alt={`Construction update of ${window.name}`}
                />
                <div className='inner_det'>
                  <div className='h5 mb-3 w-50'>
                    More than 50% construction is at its finished stage
                  </div>
                  <button className='btn btn-primary'>Explore More..</button>
                </div>
                <Link
                  to='/construction-update.html'
                  className='stretched-link'
                ></Link>
              </div>
            </div>
            <div className='col-lg-6 mt-lg-0 mt-5'>
              <div className='new_list last'>
                <img
                  width='404' height='303'
                  src='images/sample-flat-thumb.jpg'
                  className='img-fluid'
                  alt={`Sample flats of ${window.name}`}
                />
                <div className='inner_det'>
                  <div className='h5 mb-3 w-50'>
                    Sample flat ready with alluring interior & futuristic
                    designs
                  </div>
                  <button type='button' className='btn btn-primary'>
                    Explore More..
                  </button>
                </div>
                <Link to='/sample-flat.html' className='stretched-link'></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='location_advan'>
        <div className='row gx-0'>
          <figure className='col-lg-6'>
            <img
              width='1000' height='650'
              src='images/sobha-city-gurgaon-location-advantage.jpg'
              className='img-fluid'
              alt='Best Location for Seamless Connectivity'
            />
          </figure>
          <div className='col-lg-6'>
            <div className='advan_inner'>
              <div className='h2'>Location Map</div>
              <p>
                Sector 108 Gurgaon is one of the best sectors on Dwarka
                Expressway. For individuals who add a spark to their lives with
                convenience and connectivity, it’s the locality to be. Right
                from the Delhi international airport and hospitals to
                world-class hotels and malls, everything is at just a few
                minutes away from Sobha City Gurgaon. IT Parks, commercial hubs,
                educational institutes, you name it and the region have it.
              </p>
              <ul>
                <li>Well Connected to Dwarka Expressway Gurgaon.</li>
                <li>Railway Station - 7 Kms</li>
                <li>10 Kms From Indra Gandhi International Airport</li>
                <li>
                  Connected to Delhi Through 75 Mtrs Wide Road: Fully Functional
                </li>
                <li>Gurgaon ISBT - 15 Kms Approx</li>
                <li>Gurgaon Central Business District - 20 Minutes</li>
                <li>South Delhi - 25 Minutes</li>
                <li>Gurgaon Central Business District - 20 Minutes</li>
              </ul>
              <div className='mt-3'>
                <Link
                  to='/location-map.html'
                  className='btn btn-outline-primary'
                >
                  More Explore <i className='sym_forward-arrow'></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-3 py-lg-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div id='faqId'>
                <h4>
                  Frequently Asked Questions
                  <hr />
                </h4>
                <div itemScope='' itemType='http://schema.org/FAQPage'>
                  <div
                    itemScope
                    itemProp='mainEntity'
                    itemType='http://schema.org/Question'
                  >
                    <h6 itemProp='name text'>
                      <strong>
                        Q. How much is the total size of the Sobha City Gurgaon
                        108 ?
                      </strong>
                    </h6>
                    <div
                      itemProp='acceptedAnswer'
                      itemScope=''
                      itemType='http://schema.org/Answer'
                    >
                      <p itemProp='text' className='albos-qna-answer'>
                        Ans. Sobha City Gurgaon is spread over 39+ acres of
                        land.
                      </p>
                    </div>
                  </div>

                  <div
                    itemScope
                    itemProp='mainEntity'
                    itemType='http://schema.org/Question'
                  >
                    <h6 itemProp='name text'>
                      <strong>
                        Q. Which banks are providing loan facility for Sobha
                        City Gurgaon?
                      </strong>
                    </h6>
                    <div
                      itemProp='acceptedAnswer'
                      itemScope=''
                      itemType='http://schema.org/Answer'
                    >
                      <p itemProp='text' className='albos-qna-answer'>
                        Ans. Many reputed government & private banks are
                        providing home loan facility for Sobha City Dwara
                        Expressway.
                      </p>
                    </div>
                  </div>

                  <div
                    itemScope
                    itemProp='mainEntity'
                    itemType='http://schema.org/Question'
                  >
                    <h6 itemProp='name text'>
                      <strong>Q. What is the project location?</strong>
                    </h6>
                    <div
                      itemProp='acceptedAnswer'
                      itemScope=''
                      itemType='http://schema.org/Answer'
                    >
                      <p itemProp='text'>
                        Ans. Sobha City is located at Sector 108 Gurgaon nearby
                        Dwara Expressway.
                      </p>
                    </div>
                  </div>

                  <div
                    itemScope
                    itemProp='mainEntity'
                    itemType='http://schema.org/Question'
                  >
                    <h6 itemProp='name text'>
                      <strong>
                        Q. Which property options are available in Sobha City ?
                      </strong>
                    </h6>
                    <div
                      itemProp='acceptedAnswer'
                      itemScope=''
                      itemType='http://schema.org/Answer'
                    >
                      <p itemProp='text'>
                        Ans. 2 & 3 bedroom apartments are available for sale in
                        this residential community.
                      </p>
                    </div>
                  </div>

                  <div
                    itemScope
                    itemProp='mainEntity'
                    itemType='http://schema.org/Question'
                  >
                    <h6 itemProp='name text'>
                      <strong>
                        Q. What is the existing price in Sobha City Gurgaon?
                      </strong>
                    </h6>
                    <div
                      itemProp='acceptedAnswer'
                      itemScope=''
                      itemType='http://schema.org/Answer'
                    >
                      <p itemProp='text'>
                        Ans. The starting price of the Sobha City Gurgaon is
                        1.23 Crore.
                      </p>
                    </div>
                  </div>

                  <div
                    itemScope
                    itemProp='mainEntity'
                    itemType='http://schema.org/Question'
                  >
                    <h6 itemProp='name text'>
                      <strong>Q. Who is the owner of Sobha City?</strong>
                    </h6>
                    <div
                      itemProp='acceptedAnswer'
                      itemScope=''
                      itemType='http://schema.org/Answer'
                    >
                      <p itemProp='text'>
                        Ans. Mr. PNC Menon is the Founder of Sobha City.
                      </p>
                    </div>
                  </div>

                  <div
                    itemScope
                    itemProp='mainEntity'
                    itemType='http://schema.org/Question'
                  >
                    <h6 itemProp='name text'>
                      <strong>
                        Q. Is Sobha City Gurgaon a Good Investment?
                      </strong>
                    </h6>
                    <div
                      itemProp='acceptedAnswer'
                      itemScope=''
                      itemType='http://schema.org/Answer'
                    >
                      <div itemProp='text'>
                        <p>
                          Ans. Sobha City Gurgaon is the most desirable housing
                          projects in Delhi NCR. Indeed the presence of this
                          project near Sector 102, Gurgaon,calls for higher
                          benefits in the future.
                        </p>
                        <p>
                          The real estate market in this area is quite deep, and
                          hence many developments are coming in a series in this
                          locality.
                        </p>
                        <p>
                          <strong>
                            So an investment point of view, Sobha City Gurgaon
                            Apartments is the lucrative option which offers: -
                          </strong>
                        </p>
                        <ul>
                          <li>
                            Quality estate work with the top-notch living
                            standard
                          </li>
                          <li>
                            State-of-the-art amenities wisely executed in one
                            place
                          </li>
                          <li>
                            Planned at the entrance of Dwarka Expressway,so
                            reachable to Delhi
                          </li>
                          <li>Closer to IGI Airport, NH 8</li>
                          <li>
                            Next to the natural surroundings of Delhi reserved
                            Greens area
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='about_dev'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <h4>About Sobha Developer</h4>
              <p>
                <strong>Sobha</strong> is one of the reputed names in Indian
                Real Estate Industry headquartered in Bangalore, India. This
                real estate developer is active in the business of construction,
                development, sale, administration, and operation, residential &
                commercial developments, townships and other real estate related
                activities. Their residential & commercial and township
                developments in 9 cities (Bangalore, Gurgaon, Chennai, Pune,
                Coimbatore, Thrissur, Calicut, Cochin, and Mysore) have
                fulfilled the desire of luxury home with international class
                features & amenities at a very reasonable price.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DecisionCorner />

      {/* <?php include('callback.php') ?> */}

      <section className='adsarea mb-4'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='ads_inner'>
                <Link
                  to='/properties-in-dwarka-expressway-with-high-roi.html'
                  target='_blank'
                  className='stretched-link'
                ></Link>
                <div className='row no-gutters'>
                  <figure className='col-md-6'>
                    <img
                      width='550' height='200'
                      src='images/property-in-dwarka-ads.jpg'
                      alt='GET YOUR FREE EUROPE TRIP ON THE SPOT'
                      className='img-fluid w-100'
                    />
                  </figure>
                  <div className='col-md-6'>
                    <div className='txt_inner'>
                      <div className='h3'>
                        Dwarka Expressway with High Investment Potential
                      </div>
                      <div className='h5'>
                        Robust Real Estate Developments Highlighting Exclusive
                        Range of Properties
                      </div>
                      <div className='h4 text-warning'>
                        Interested? Get a Free Site Visit
                      </div>
                      <div className='ads_btn'>
                        <button className='btn btn-warning'>
                          <i className='sym_arrow-right'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='blog_sec'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='h2 text-center'>Special Reading</div>
              <p className='b_desc'>
                We encourage optimistic knowledge & information to educate you
                with the best Real Estate side!
              </p>
            </div>
            <div className='col-lg-12'>
              <div className='blog'>
                <div className='blog__list'>
                  <Link
                    to='http://www.sobhacitygurgaon.org.in/blog/what-all-benefits-you-can-hope-for-in-under-construction-property-sobha-city-gurgaon'
                    className='stretched-link'
                    target='_blank'
                  ></Link>
                  <div className='blog__list__inner'>
                    <h3>
                      What all benefits you can hope for in under construction
                      property Sobha city Gurgaon?
                    </h3>
                    <div className='auth'>
                      <ul>
                        <li>Author</li>
                        <li>Jun, 16, 2021</li>
                      </ul>
                    </div>
                    <p>
                      Under Construction projects are better in terms of quality
                      and cost because one can have a check on the quality
                      development where they ...&nbsp;
                    </p>
                    <div className='readmore'>
                      Continue Reading <i className='sym_arrow-right'></i>
                    </div>
                  </div>
                </div>
                <div className='blog__list'>
                  <Link
                    to='http://www.sobhacitygurgaon.org.in/blog/why-smart-design-is-an-important-criterion-for-selecting-your-home'
                    className='stretched-link'
                    target='_blank'
                  ></Link>
                  <div className='blog__list__inner'>
                    <h3>
                      Why Smart Design Is An Important Criterion For Selecting
                      Your Home!
                    </h3>
                    <div className='auth'>
                      <ul>
                        <li>Author</li>
                        <li>Jun, 11, 2021</li>
                      </ul>
                    </div>

                    <p>
                      When you are looking for your dream home in Gurgaon, you
                      look out for wide range of different features like luxury
                      amenities, accessibi...&nbsp;
                    </p>
                    <div className='readmore'>
                      Continue Reading <i className='sym_arrow-right'></i>
                    </div>
                  </div>
                </div>
                <div className='blog__list'>
                  <Link
                    to='http://www.sobhacitygurgaon.org.in/blog/how-many-things-you-should-consider-while-watching-a-sample-flats-in-sobha-city-gurgaon'
                    className='stretched-link'
                    target='_blank'
                  ></Link>
                  <div className='blog__list__inner'>
                    <h3>
                      How many things you should consider while watching a
                      sample flats in Sobha City Gurgaon ?
                    </h3>
                    <div className='auth'>
                      <ul>
                        <li>Author</li>
                        <li>Jun, 10, 2021</li>
                      </ul>
                    </div>

                    <p>
                      <strong>Sobha City Sample Flats</strong> are
                      well-designed, captivating &amp; openhearted, just like
                      what an actual apartment would loo...&nbsp;
                    </p>
                    <div className='readmore'>
                      Continue Reading <i className='sym_arrow-right'></i>
                    </div>
                  </div>
                </div>
                <div className='blog__list'>
                  <Link
                    to='http://www.sobhacitygurgaon.org.in/blog/sobha-city-sector-108-from-the-eyes-of-site-visitors'
                    className='stretched-link'
                    target='_blank'
                  ></Link>
                  <div className='blog__list__inner'>
                    <h3>
                      Sobha City, Sector 108 : From the Eyes of Site Visitors!
                    </h3>
                    <div className='auth'>
                      <ul>
                        <li>Author</li>
                        <li>May, 29, 2021</li>
                      </ul>
                    </div>

                    <p>
                      Sobha City Sector 108 Gurgaon is a residential project on
                      39+ acres of land on Dwarka Expressway. This community is
                      dedicated exclusive...&nbsp;
                    </p>
                    <div className='readmore'>
                      Continue Reading <i className='sym_arrow-right'></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-center mt-4'>
                <Link
                  to='http://www.sobhacitygurgaon.org.in/blog/'
                  className='btn btn-outline-primary'
                >
                  Read More Blogs <i className='sym_arrow-right'></i>
                </Link>
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
  );
};

export default Home;
