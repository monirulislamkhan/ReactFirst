import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { DecisionCorner } from '../Component/DecisionCorner';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const SampleFlat = (props) => {
  return (
    <>
      <Helmet>
        <title>Sobha City Gurgaon Sample flats</title>
        <meta
          name='description'
          content='Here we have some pictures of Sobha City Gurgaon Sample flats to provide you a perfect idea of 2 & 3 BHK apartments & help you in making a decision.'
        />
        <link rel='canonical' href='/sample-flat.html' />
      </Helmet>
      <Header />
      <section className='inner_bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='slider_area mt-4'>
                <h1 className='text-center mb-4'>{`${window.name} Sample flats`}</h1>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true, type: 'fraction' }}
                  scrollbar={{ draggable: true }}
                  className=' slider-main'
                >
                  <SwiperSlide>
                    <div className='inner'>
                      <div className='inner__left'>
                        <div className='h4'>Living Room</div>
                        <p>
                          The living room in Sobha City Apartments is
                          well-designed with sufficient space even after placing
                          furniture.
                        </p>
                      </div>
                      <div className='inner__right'>
                        <a
                          href='images/gallery/sa/sa-01.webp'
                          data-fancybox='gallery'
                          data-caption='Living Room'
                        >
                          <img
                            width='700' height='550'
                            src='images/gallery/sa/sa-01.webp'
                            className='img-fluid w-100'
                            alt='Living Room'
                            title='Living Room'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='inner'>
                      <div className='inner__left'>
                        <div className='h4'>Living Room</div>
                        <p>
                          Superior quality vitrified tile flooring and plastic
                          emulsion paint on wall & ceiling. Equipped with Split
                          AC, television, and telephone point.
                        </p>
                      </div>
                      <div className='inner__right'>
                        <a
                          href='images/gallery/sa/sa-02.webp'
                          data-fancybox='gallery'
                          data-caption='Living Room'
                        >
                          <img
                            width='700' height='550'
                            src='images/gallery/sa/sa-02.webp'
                            className='img-fluid w-100'
                            alt='Living Room'
                            title='Living Room'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='inner'>
                      <div className='inner__left'>
                        <div className='h4'>Living Room</div>
                        <p>
                          A different view of the living room to give you a
                          complete idea about spaciousness.
                        </p>
                      </div>
                      <div className='inner__right'>
                        <a
                          href='images/gallery/sa/sa-03.webp'
                          data-fancybox='gallery'
                          data-caption='Living Room'
                        >
                          <img
                            width='700' height='550'
                            src='images/gallery/sa/sa-03.webp'
                            className='img-fluid w-100'
                            alt='Living Room'
                            title='Living Room'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='inner'>
                      <div className='inner__left'>
                        <div className='h4'>Living Room</div>
                        <p>
                          {' '}
                          Here you can see the space between the Living room &
                          dining area, this area is quite spacious for easy
                          movement of inhabitants & furniture as well,
                        </p>
                      </div>
                      <div className='inner__right'>
                        <a
                          href='images/gallery/sa/sa-04.webp'
                          data-fancybox='gallery'
                          data-caption='Living Room'
                        >
                          <img
                            width='700' height='550'
                            src='images/gallery/sa/sa-04.webp'
                            className='img-fluid w-100'
                            alt='Living Room'
                            title='Living Room'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='inner'>
                      <div className='inner__left'>
                        <div className='h4'>Dining Area</div>
                        <p>
                          {' '}
                          Living area is equipped with Superior quality
                          vitrified tile flooring and plastic emulsion paint on
                          the wall & ceiling and Split AC.
                        </p>
                      </div>
                      <div className='inner__right'>
                        <a
                          href='images/gallery/sa/sa-05.webp'
                          data-fancybox='gallery'
                          data-caption='Dining Area'
                        >
                          <img
                            width='700' height='550'
                            src='images/gallery/sa/sa-05.webp'
                            className='img-fluid w-100'
                            alt='Dining Area'
                            title='Dining Area'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='inner'>
                      <div className='inner__left'>
                        <div className='h4'>Dining Area</div>
                        <p>
                          Spacious dining area in Sobha City Apartments have a
                          full-size French window for adequate sunlight &
                          ventilation.
                        </p>
                      </div>
                      <div className='inner__right'>
                        <a
                          href='images/gallery/sa/sa-06.webp'
                          data-fancybox='gallery'
                          data-caption='Dining Area'
                        >
                          <img
                            width='700' height='550'
                            src='images/gallery/sa/sa-06.webp'
                            className='img-fluid w-100'
                            alt='Dining Area'
                            title='Dining Area'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='inner'>
                      <div className='inner__left'>
                        <div className='h4'>Bedrooms</div>
                        <p>
                          Bedrooms in Sobha City Apartments are equipped with
                          full height French window, attach washroom, and
                          wardrobe.
                        </p>
                      </div>
                      <div className='inner__right'>
                        <a
                          href='images/gallery/sa/sa-07.webp'
                          data-fancybox='gallery'
                          data-caption='Bedrooms'
                        >
                          <img
                            width='700' height='550'
                            src='images/gallery/sa/sa-07.webp'
                            className='img-fluid w-100'
                            alt='Bedrooms'
                            title='Bedrooms'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='inner'>
                      <div className='inner__left'>
                        <div className='h4'>Bedrooms</div>
                        <p>
                          Superior quality vitrified tile flooring and skirting,
                          plastic emulsion paint on walls & ceiling, split AC,
                          TV, and point for a landline.
                        </p>
                      </div>
                      <div className='inner__right'>
                        <a
                          href='images/gallery/sa/sa-08.webp'
                          data-fancybox='gallery'
                          data-caption='Bedrooms'
                        >
                          <img
                            width='700' height='550'
                            src='images/gallery/sa/sa-08.webp'
                            className='img-fluid w-100'
                            alt='Bedrooms'
                            title='Bedrooms'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='inner'>
                      <div className='inner__left'>
                        <div className='h4'>Master Bedroom</div>
                        <p>
                          Master bedroom in Sobha City Apartments are come with
                          attach balcony & french window gives eye-catching
                          views.
                        </p>
                      </div>
                      <div className='inner__right'>
                        <a
                          href='images/gallery/sa/sa-09.webp'
                          data-fancybox='gallery'
                          data-caption='Master Bedroom'
                        >
                          <img
                            width='700' height='550'
                            src='images/gallery/sa/sa-09.webp'
                            className='img-fluid w-100'
                            alt='Master Bedroom'
                            title='Master Bedroom'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className='inner'>
                      <div className='inner__left'>
                        <div className='h4'>Kitchen</div>
                        <p>
                          Smartly design kitchen in Sobha City Apartment is
                          available with adequate electronic points to make sure
                          every equipment keeps working. Equipped with stainless
                          steel single bowl sink with drainboard and exhaust fan
                          etc.
                        </p>
                      </div>
                      <div className='inner__right'>
                        <a
                          href='images/gallery/sa/sa-10.webp'
                          data-fancybox='gallery'
                          data-caption=''
                        >
                          <img
                            width='700' height='550'
                            src='images/gallery/sa/sa-10.webp'
                            className='img-fluid w-100'
                            alt=''
                            title=''
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  {/* <div className="counting"> <span className="sta_img_value"></span> / <span className="fraction"></span></div> */}
                </Swiper>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 mt-4'>
              <div className='gall_des'>
                <h2>Sobha City Gurgaon Sector 108 Sample flats</h2>
                <p className=''>
                  Here are some actual images of the Sobha City Gurgaon Sample
                  Flat to give you a complete idea of 2 and 3 bedroom
                  apartments. So check these images and read the description
                  carefully to make up your mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DecisionCorner />
      <Footer />
    </>
  );
};

export default SampleFlat;
