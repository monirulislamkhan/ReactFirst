import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div id="row">
            <div className="col-lg-12">
              <div className="footer_con">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/specifications.html">Specifications</Link></li>
                  <li><Link to="/price-list.html">Price List</Link></li>
                  <li><Link to="/location-map.html">Location Map</Link></li>
                  <li><Link to="/master-plan.html">Master Plan</Link></li>
                  <li><Link to="/floor-plan.html">Floor Plan</Link></li>
                  <li><Link to="/elevation-images.html">Gallery</Link></li>
                  <li><Link to="/properties-in-dwarka-expressway-with-high-roi.html" title="Why Dwarka Expressway Gurgaon worth investing?">Properties with High ROI</Link></li>
                </ul>
                <div className="ftr_copyright">Copyright &copy; {window.domainName} 2015 - <span>{new Date().getFullYear()}</span> | All Rights Reserved | <Link to="/disclaimer.html">Disclaimer</Link></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="enq_btn" data-toggle="modal" data-target="#ftrForm"><i className="sym_message"></i></div>

      <div className="aside_btn">
        <ul>
          <li className="xs_w-20"><button className="btn btn-primary btn-block more_btn"><i className="sym_options"></i></button></li>
          <li className="xs_w-40"><Link className="btn btn-primary btn-block" to="" data-toggle="modal" data-target="#ftrForm">Enquire Now</Link></li>
        </ul>
      </div>
      <div className="display_popup">
        <ul>
          <li><Link to="tel:+911149500008"><i className="sym_contact"></i></Link></li>
          <li><Link to="https://api.whatsapp.com/send?phone=+919999428963&amp;text=I'm%20interested%20in%20Sobha%20City%20Gurgaon%20Sector-108" rel="nofollow"><img src="images/whatsapp.svg" alt="Whatsapp" height="30" /></Link></li>
        </ul>
      </div>
    </>
  )
}

export default Footer;
