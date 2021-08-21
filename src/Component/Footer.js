import { Link } from 'react-router-dom';
import MainForm from './MainForm';
import WeDeliver from '../Component/WeDeliver';

import $ from "jquery";
// import tawkTo from "tawkto-react";

const Footer = () => {
  // const tawkToPropertyId = '5d564ec377aa790be32f2580'
  // const tawkToKey = 'a33be46f147009fc74816b1a735ae317f12653f7'
  // useEffect(() => {
  //   tawkTo(tawkToPropertyId, tawkToKey)
  // }, []);

  $(document).ready(function () {
    $('.more_btn').on('click scroll', function (e) {
      $('.display_popup').stop(true).slideToggle(20);
    });

    $(document).on('click scroll', function (e) {
      if (!$(e.target).closest('.more_btn').length) {
        $('.display_popup').stop(true).slideUp(20);
      }
    });
  });

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
          <li className="xs_w-20"><button className="btn btn-primary btn-block more_btn"><i className="fas fa-ellipsis-v"></i></button></li>
          {/* <li className="xs_w-20"><button className="btn btn-primary btn-block" onClick={() => alert('hi')}><i className="fas fa-ellipsis-v"></i></button></li> */}
          <li className="xs_w-40 d-grid"><Link className="btn btn-primary btn-block" to="" data-bs-toggle="modal" data-bs-target="#ftrForm">Enquire Now</Link></li>
        </ul>
      </div>
      <div className="display_popup">
        <ul>
          <li><Link to="tel:+911149500008"><i className="fas fa-phone-alt"></i></Link></li>
          <li><Link to="https://api.whatsapp.com/send?phone=+919999428963&amp;text=I'm%20interested%20in%20Sobha%20City%20Gurgaon%20Sector-108" rel="nofollow"><img src="images/whatsapp.svg" alt="Whatsapp" width='30' height="30" /></Link></li>
        </ul>
      </div>
      <div className="modal fade" id='ftrForm' tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="h4 pb-3 text-center font-weight-bold">EXPRESS YOUR INTEREST</div>
              <MainForm />
              <WeDeliver />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
