import React from 'react';
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
const locationMap = (props) => {
  return (
    <>
      <Header />
      <section className="inner_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{`Location Map -  ${window.name} Sector 108`}</h1>
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                <SwiperSlide><div class="inner">
                  <div class="inner__left">
                    <div class="h4">Living Room</div>
                    <p>The living room in Sobha City Apartments is well-designed with sufficient space even after placing furniture.</p>
                  </div>
                  <div class="inner__right">
                    <a href="images/gallery/sa/sa-01.jpg" data-fancybox="gallery" data-caption="Living Room">
                      <img src="images/gallery/sa/sa-01.jpg" class="img-fluid w-100" alt="Living Room" />
                    </a>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div class="inner">
                  <div class="inner__left">
                    <div class="h4">Living Room</div>
                    <p>Superior quality vitrified tile flooring and plastic emulsion paint on wall & ceiling. Equipped with Split AC, television, and telephone point.</p>
                  </div>
                  <div class="inner__right">
                    <a href="images/gallery/sa/sa-02.jpg" data-fancybox="gallery" data-caption="Living Room">
                      <img src="images/gallery/sa/sa-02.jpg" class="img-fluid w-100" alt="Living Room" />
                    </a>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div class="inner">
                  <div class="inner__left">
                    <div class="h4">Living Room</div>
                    <p>A different view of the living room to give you a complete idea about spaciousness.</p>
                  </div>
                  <div class="inner__right">
                    <a href="images/gallery/sa/sa-03.jpg" data-fancybox="gallery" data-caption="Living Room">
                      <img src="images/gallery/sa/sa-03.jpg" class="img-fluid w-100" alt="Living Room" />
                    </a>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div class="inner">
                  <div class="inner__left">
                    <div class="h4">Living Room</div>
                    <p> Here you can see the space between the Living room & dining area, this area is quite spacious for easy movement of inhabitants & furniture as well,</p>
                  </div>
                  <div class="inner__right">
                    <a href="images/gallery/sa/sa-04.jpg" data-fancybox="gallery" data-caption="Living Room">
                      <img src="images/gallery/sa/sa-04.jpg" class="img-fluid w-100" alt="Living Room" />
                    </a>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div class="inner">
                  <div class="inner__left">
                    <div class="h4">Dining Area</div>
                    <p> Living area is equipped with Superior quality vitrified tile flooring and plastic emulsion paint on the wall & ceiling and Split AC.</p>
                  </div>
                  <div class="inner__right">
                    <a href="images/gallery/sa/sa-05.jpg" data-fancybox="gallery" data-caption="Dining Area">
                      <img src="images/gallery/sa/sa-05.jpg" class="img-fluid w-100" alt="Dining Area" />
                    </a>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div class="inner">
                  <div class="inner__left">
                    <div class="h4">Dining Area</div>
                    <p>Spacious dining area in Sobha City Apartments have a full-size French window for adequate sunlight & ventilation.</p>
                  </div>
                  <div class="inner__right">
                    <a href="images/gallery/sa/sa-06.jpg" data-fancybox="gallery" data-caption="Dining Area">
                      <img src="images/gallery/sa/sa-06.jpg" class="img-fluid w-100" alt="Dining Area" />
                    </a>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div class="inner">
                  <div class="inner__left">
                    <div class="h4">Bedrooms</div>
                    <p>Bedrooms in Sobha City Apartments are equipped with full height French window, attach washroom, and wardrobe.</p>
                  </div>
                  <div class="inner__right">
                    <a href="images/gallery/sa/sa-07.jpg" data-fancybox="gallery" data-caption="Bedrooms">
                      <img src="images/gallery/sa/sa-07.jpg" class="img-fluid w-100" alt="Bedrooms" />
                    </a>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div class="inner">
                  <div class="inner__left">
                    <div class="h4">Bedrooms</div>
                    <p>Superior quality vitrified tile flooring and skirting, plastic emulsion paint on walls & ceiling, split AC, TV, and point for a landline.</p>
                  </div>
                  <div class="inner__right">
                    <a href="images/gallery/sa/sa-08.jpg" data-fancybox="gallery" data-caption="Bedrooms">
                      <img src="images/gallery/sa/sa-08.jpg" class="img-fluid w-100" alt="Bedrooms" />
                    </a>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div class="inner">
                  <div class="inner__left">
                    <div class="h4">Master Bedroom</div>
                    <p>Master bedroom in Sobha City Apartments are come with attach balcony & french window gives eye-catching views.</p>
                  </div>
                  <div class="inner__right">
                    <a href="images/gallery/sa/sa-09.jpg" data-fancybox="gallery" data-caption="Master Bedroom">
                      <img src="images/gallery/sa/sa-09.jpg" class="img-fluid w-100" alt="Master Bedroom" />
                    </a>
                  </div>
                </div></SwiperSlide>
                <SwiperSlide><div class="inner">
                  <div class="inner__left">
                    <div class="h4">Kitchen</div>
                    <p>Smartly design kitchen in Sobha City Apartment is available with adequate electronic points to make sure every equipment keeps working. Equipped with stainless steel single bowl sink with drainboard and exhaust fan etc.</p>
                  </div>
                  <div class="inner__right">
                    <a href="images/gallery/sa/sa-10.jpg" data-fancybox="gallery" data-caption="">
                      <img src="images/gallery/sa/sa-10.jpg" class="img-fluid w-100" alt="" />
                    </a>
                  </div>
                </div></SwiperSlide>
                <div class="counting"> <span class="sta_img_value"></span> / <span class="fraction"></span></div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <DecisionCorner />
      <Footer />
    </>
  )
};

export default locationMap;
