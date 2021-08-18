import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { DecisionCorner } from '../Component/DecisionCorner';
const locationMap = (props) => {
  return (
    <>
      <Header />
      <section className="inner_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{`Floor Plan -  ${window.name} Sector 108`}</h1>
              <div className="flr_plan">
                <div className="topplan">2 Bedroom Floor Plan</div>
                <div className="topplan1">1381 Sq. Ft.</div>
                <div className="row">
                  <figure className="col-lg-4 col-md-6 flr_list"><a href="images/floor-plan/2bhk-tower-a1-a4-unit-type-a-1381-sqft.jpg" data-fancybox="gallery" data-caption="2 Bedroom, Type - A, Tower - A1 - A4: 1381 Sq. Ft.">
                    <img alt='2 Bedroom, Type - A, Tower - A1 - A4: 1381 Sq. Ft.' src="images/floor-plan/2bhk-tower-a1-a4-unit-type-a-1381-sqft.jpg" className="img-fluid" /><figcaption>2 Bedroom, Type - A, Tower - A1 - A4: 1381 Sq. Ft.</figcaption></a></figure>
                </div>
                <div className="topplan">3 Bedroom Floor Plan</div>
                <div className="topplan1">1711 - 2343 Sq. Ft.</div>
                <div className="row">
                  <figure className="col-lg-4 col-md-6 flr_list"><a href="images/floor-plan/3bhk-tower-a1-a4-unit-type-b-1711-sqft.jpg" data-fancybox="gallery" data-caption="3 Bedroom, Type - B, Tower - A1 - A4: 1711 Sq. Ft.">
                    <img alt='3 Bedroom, Type - B, Tower - A1 - A4: 1711 Sq. Ft.' src="images/floor-plan/3bhk-tower-a1-a4-unit-type-b-1711-sqft.jpg" className="img-fluid" /><figcaption>3 Bedroom, Type - B, Tower - A1 - A4: 1711 Sq. Ft.</figcaption></a></figure>
                  <figure className="col-lg-4 col-md-6 flr_list"><a href="images/floor-plan/3bhk-tower-b1-b4-unit-type-b-1711-sqft.jpg" data-fancybox="gallery" data-caption="3 Bedroom, Type - B, Tower - B1 - B4: 1711 Sq. Ft.">
                    <img alt='3 Bedroom, Type - B, Tower - B1 - B4: 1711 Sq. Ft.' src="images/floor-plan/3bhk-tower-b1-b4-unit-type-b-1711-sqft.jpg" className="img-fluid" /><figcaption>3 Bedroom, Type - B, Tower - B1 - B4: 1711 Sq. Ft.</figcaption></a></figure>
                  <figure className="col-lg-4 col-md-6 flr_list"><a href="images/floor-plan/3bhk-tower-b1-b4-unit-type-c-2003-sqft.jpg" data-fancybox="gallery" data-caption="3 Bedroom, Type - C, Tower - B1 - B4: 2003 Sq. Ft.">
                    <img alt='3 Bedroom, Type - C, Tower - B1 - B4: 2003 Sq. Ft.' src="images/floor-plan/3bhk-tower-b1-b4-unit-type-c-2003-sqft.jpg" className="img-fluid" /><figcaption>3 Bedroom, Type - C, Tower - B1 - B4: 2003 Sq. Ft.</figcaption></a></figure>
                  <figure className="col-lg-4 col-md-6 flr_list"><a href="images/floor-plan/3bhk-tower-c1-c4-unit-type-d-2072-sqft.jpg" data-fancybox="gallery" data-caption="3 Bedroom, Type - D, Tower - C1 - C4: 2072 Sq. Ft.">
                    <img alt='3 Bedroom, Type - D, Tower - C1 - C4: 2072 Sq. Ft.' src="images/floor-plan/3bhk-tower-c1-c4-unit-type-d-2072-sqft.jpg" className="img-fluid" /><figcaption>3 Bedroom, Type - D, Tower - C1 - C4: 2072 Sq. Ft.</figcaption></a></figure>
                  <figure className="col-lg-4 col-md-6 flr_list"><a href="images/floor-plan/3bhk-tower-c1-c4-unit-type-e-2343-sqft.jpg" data-fancybox="gallery" data-caption="3 Bedroom, Type - e, Tower - C1 - C4: 2343 Sq. Ft.">
                    <img alt='3 Bedroom, Type - e, Tower - C1 - C4: 2343 Sq. Ft.' src="images/floor-plan/3bhk-tower-c1-c4-unit-type-d-2072-sqft.jpg" className="img-fluid" /><figcaption>3 Bedroom, Type - e, Tower - C1 - C4: 2343 Sq. Ft.</figcaption></a></figure>
                </div>
              </div>
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
