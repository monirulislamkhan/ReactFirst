import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { DecisionCorner } from '../Component/DecisionCorner';
import { Loader } from '@googlemaps/js-api-loader';
const locationMap = (props) => {
  const loader = new Loader({
    apiKey: 'AIzaSyDJIz0yVbcgq6o9Ou03wkge1oLJ19_NHa0',
    version: 'weekly',
    libraries: ['places'],
  });
  const mapOptions = {
    center: {
      lat: 28.411053,
      lng: 77.043217,
    },
    zoom: 4,
  };
  loader
    .load()
    .then((google) => {
      new google.maps.Map(document.getElementById('map'), mapOptions);
    })
    .catch((e) => {
      // do something
    });
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
              <div className='hm_map'>
                <div id='map'></div>
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

export default locationMap;
