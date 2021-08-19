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
const ConstructionUpdate = (props) => {
  return (
    <>
      <Helmet>
        <title>Sobha City Gurgaon construction update</title>
        <meta
          name='description'
          content='Check here timely updates of the construction in Sobha city at Sector 108,Gurgaon. These forthcoming flats provide plenty of rich facilities at your doorstep.'
        />
        <link rel='canonical' href='/construction-update.html' />
      </Helmet>
      <Header />
      <section className='inner_bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='slider_area mt-4'>
                <h1 className='text-center mb-4'>{`${window.name} Construction Update`}</h1>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true, type: 'fraction' }}
                  scrollbar={{ draggable: true }}
                  className=' slider-main'
                >
                  <SwiperSlide>
                    <div class='inner'>
                      <div class='inner__left'>
                        <div class='h4'>Tower A1</div>
                        <p>
                          Superstructure is ready, work on flooring (Superior
                          quality vitrified tile flooring & skirting) and other
                          fixture fittings work is in progress.
                        </p>
                      </div>
                      <div class='inner__right'>
                        <a
                          href='images/gallery/cu/tower-a1.jpg'
                          data-fancybox='gallery'
                          data-caption='Tower A1'
                        >
                          <img
                            src='images/gallery/cu/tower-a1.jpg'
                            class='img-fluid w-100'
                            alt='Tower A1'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class='inner'>
                      <div class='inner__left'>
                        <div class='h4'>Tower A2</div>
                        <p>
                          Construction work of tower A2 is in full swing with
                          the 6th-floor roof slab in progress.
                        </p>
                      </div>
                      <div class='inner__right'>
                        <a
                          href='images/gallery/cu/tower-a2.jpg'
                          data-fancybox='gallery'
                          data-caption='Tower A2'
                        >
                          <img
                            src='images/gallery/cu/tower-a2.jpg'
                            class='img-fluid w-100'
                            alt='Tower A2'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class='inner'>
                      <div class='inner__left'>
                        <div class='h4'>Tower B1</div>
                        <p>
                          Superstructure is ready, work on flooring (Superior
                          quality vitrified tile flooring & skirting) and other
                          fixture fitting is in progress.
                        </p>
                      </div>
                      <div class='inner__right'>
                        <a
                          href='images/gallery/cu/tower-b1.jpg'
                          data-fancybox='gallery'
                          data-caption='Tower B1'
                        >
                          <img
                            src='images/gallery/cu/tower-b1.jpg'
                            class='img-fluid w-100'
                            alt='Tower B1'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class='inner'>
                      <div class='inner__left'>
                        <div class='h4'>Tower B2 </div>
                        <p>
                          1 Basement + Stilt + 5th floor is completed and works
                          on the 6th-floor slab is in progress.
                        </p>
                      </div>
                      <div class='inner__right'>
                        <a
                          href='images/gallery/cu/tower-b2.jpg'
                          data-fancybox='gallery'
                          data-caption='Tower B2'
                        >
                          <img
                            src='images/gallery/cu/tower-b2.jpg'
                            class='img-fluid w-100'
                            alt='Tower B2'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class='inner'>
                      <div class='inner__left'>
                        <div class='h4'>Tower B3 </div>
                        <p>
                          Construction work of tower B3 is in full-swing and
                          basement roof slab in progress
                        </p>
                      </div>
                      <div class='inner__right'>
                        <a
                          href='images/gallery/cu/tower-b3.jpg'
                          data-fancybox='gallery'
                          data-caption='Tower B3'
                        >
                          <img
                            src='images/gallery/cu/tower-b3.jpg'
                            class='img-fluid w-100'
                            alt='Tower B3'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class='inner'>
                      <div class='inner__left'>
                        <div class='h4'>Tower C1 </div>
                        <p>
                          1 Basement + Stilt + 24 floors are ready and work on
                          flooring (Superior quality vitrified tile flooring &
                          skirting) and other fixture fitting is in progress
                        </p>
                      </div>
                      <div class='inner__right'>
                        <a
                          href='images/gallery/cu/tower-c1.jpg'
                          data-fancybox='gallery'
                          data-caption='Tower C1'
                        >
                          <img
                            src='images/gallery/cu/tower-c1.jpg'
                            class='img-fluid w-100'
                            alt='Tower C1'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class='inner'>
                      <div class='inner__left'>
                        <div class='h4'>Tower C2 </div>
                        <p>
                          1 Basement + Stilt + 13th floor is ready and works on
                          the 14th-floor slab is in progress.
                        </p>
                      </div>
                      <div class='inner__right'>
                        <a
                          href='images/gallery/cu/tower-c2.jpg'
                          data-fancybox='gallery'
                          data-caption='Tower C2'
                        >
                          <img
                            src='images/gallery/cu/tower-c2.jpg'
                            class='img-fluid w-100'
                            alt='Tower C2'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class='inner'>
                      <div class='inner__left'>
                        <div class='h4'>Tower C3 </div>
                        <p>
                          1 Basement + Stilt + 4th floor is ready and works on
                          the 5th floor is in progress.
                        </p>
                      </div>
                      <div class='inner__right'>
                        <a
                          href='images/gallery/cu/tower-c3.jpg'
                          data-fancybox='gallery'
                          data-caption='Tower C3'
                        >
                          <img
                            src='images/gallery/cu/tower-c3.jpg'
                            class='img-fluid w-100'
                            alt='Tower C3'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class='inner'>
                      <div class='inner__left'>
                        <div class='h4'>Club Oval 1 </div>
                        <p>
                          Construction work of clubhouse is in full-swing and
                          structure in progress
                        </p>
                      </div>
                      <div class='inner__right'>
                        <a
                          href='images/gallery/cu/club-oval-1.jpg'
                          data-fancybox='gallery'
                          data-caption='Club Oval 1'
                        >
                          <img
                            src='images/gallery/cu/club-oval-1.jpg'
                            class='img-fluid w-100'
                            alt='Club Oval 1'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class='inner'>
                      <div class='inner__left'>
                        <div class='h4'>Cricket Ground </div>
                        <p>
                          Actual size cricket ground is almost ready within the
                          project premises, leveling & grass work around the
                          pitch in progress and RCC drain work around the
                          cricket ground is in progress.{' '}
                        </p>
                      </div>
                      <div class='inner__right'>
                        <a
                          href='images/gallery/cu/cricket-ground.jpg'
                          data-fancybox='gallery'
                          data-caption='Cricket Ground'
                        >
                          <img
                            src='images/gallery/cu/cricket-ground.jpg'
                            class='img-fluid w-100'
                            alt='Cricket Ground'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class='inner'>
                      <div class='inner__left'>
                        <div class='h4'>EWS </div>
                        <p>
                          The superstructure of the EWS dedicated tower is
                          ready.
                        </p>
                      </div>
                      <div class='inner__right'>
                        <a
                          href='images/gallery/cu/ews.jpg'
                          data-fancybox='gallery'
                          data-caption='EWS'
                        >
                          <img
                            src='images/gallery/cu/ews.jpg'
                            class='img-fluid w-100'
                            alt='EWS'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div class='inner'>
                      <div class='inner__left'>
                        <div class='h4'>STP</div>
                        <p>
                          Structure of Sewage Treatment Plant is ready and
                          further work is in progress.{' '}
                        </p>
                      </div>
                      <div class='inner__right'>
                        <a
                          href='images/gallery/cu/stp.jpg'
                          data-fancybox='gallery'
                          data-caption='STP'
                        >
                          <img
                            src='images/gallery/cu/stp.jpg'
                            class='img-fluid w-100'
                            alt='STP'
                          />
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div class='row'>
            <div class='col-lg-12 mt-4'>
              <div class='gall_des'>
                <h2>Sobha City Gurgaon Construction update</h2>
                <p class=''>
                  Sobha City Gurgaon's construction is in full swing.
                  Construction pictures are real to give you the actual
                  construction update. The project is offered by one of the most
                  reputed real estate developers.
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

export default ConstructionUpdate;