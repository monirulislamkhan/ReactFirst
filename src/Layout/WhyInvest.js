import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { DecisionCorner } from '../Component/DecisionCorner';
const WhyInvest = (props) => {
  return (
    <>
      <Helmet>
        <title>Properties in Dwarka Expressway with High ROI</title>
        <meta
          name='description'
          content='Dwarka Expressway Properties like Sobha City Gurgaon by Sobha Ltd with high return over investment, ultra luxury amenities,easy payment plan and smart apartments.'
        />
        <link
          rel='canonical'
          href='/properties-in-dwarka-expressway-with-high-roi.html'
        />
      </Helmet>
      <Header />
      <DecisionCorner />
      <Footer />
    </>
  );
};

export default WhyInvest;
