import ProjectForm from '../Component/MainForm';
// const currentYear = document.getElementById('currentYear').innerHTML = new Date().getFullYear;
// const currentYear = new Date().getFullYear;
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/location-map.html">Location Map</a></li>
                <li><a href="/gallery.html">Gallery</a></li>
                <li><a href="/disclaimer.html" rel="nofollow">Disclaimer</a></li>
              </ul>
              <div className="copyright">Copyright &copy; domainName 2014 - <span></span> | All Rights Reserved</div>
            </div>
          </div>
        </div>
      </footer>

      <div className="aside_btn">
        <div className="asd_item1"><i className="fas fa-ellipsis-v"></i></div>
        <div className="asd_item2"><input type="button" className="btn btn-primary btn-block" value="Enquire Now" data-toggle="modal" data-target="#ftrForm" /></div>
      </div>

      <div className="display_popup">
        <ul>
          <li><a href="tel:+91 98 1199 9666"><i className="fas fa-phone-alt"></i> <span>Call Now</span></a></li>
          <li><a href="https://api.whatsapp.com/send?phone=+919811999666&amp;text=Hey%20I'm%20interested%20in%20%20godrej serenity gurgaon" rel="nofollow"><i className="fab fa-whatsapp"></i> <span>Whatsapp Now</span></a></li>
        </ul>
      </div>

      <div className="modal fade" id="ftrForm" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content shadow">
            <div className="modal-header">
              <div className="modal-content_heading">EXPRESS YOUR INTEREST</div>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body">
              <div className="mmessages" id="modalcontact-div" style={{ display: 'none' }}>
                <div id="modalpost_status"></div>
              </div>
              <ProjectForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
