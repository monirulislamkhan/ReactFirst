import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You</title>
      </Helmet>
      <Header />
      <section className="dis_con">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="thank">
                <div className="thank-you">Thank You</div>
                <p>We at www.sobhacitygurgaon.org.in would like to thank you for your interest in our services and contacting us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ThankYou;
