import React, { useEffect } from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Disclaimer = () => {
  useEffect(() => {
    document.title = 'This is Disclaimer page';
  });
  return (
    <>
      <Header />
      <div className='container'>Disclaimer</div>
      <Footer />
    </>
  );
};

export default Disclaimer;
