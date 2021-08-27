import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { DecisionCorner } from '../Component/DecisionCorner';
const locationMap = (props) => {
  return (
    <>
      <Helmet>
        <title>Location Map of Sobha City Near Dwarka Expressway Gurgaon</title>
        <meta
          name='description'
          content='Find the location map of the Sobha city Sector 108 Gurgaon. Connectivity to the Dwarka Expressway.'
        />
        <link rel='canonical' href='/location-map.html' />
      </Helmet>
      <Header />
      <section className='inner_bg'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1>{`Location Map -  ${window.name} Sector 108`}</h1>
              <a href='images/sobha-city-location-map.webp' data-fancybox='gallery' data-caption={`Location Map of ${window.name}`}>
                <img width='1400' height='700' src='images/sobha-city-location-map.webp' className='img-fluid' alt={`Location Map of ${window.name}`} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <DecisionCorner />
      <Footer />
    </>
  );
};

export default locationMap;
