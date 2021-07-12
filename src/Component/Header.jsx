function Header() {
  return (
  <header id="mainNav">
    <div className="menu-container">
      <div className="grt-menu-row">
        <div className="grt-menu-logo">
          <a href="/some/valid/uri" className="grt-logo">
            <img src="assets/images/logo.svg" className="img-fluid" alt="Logo" />
          </a>
        </div>
        <div className="grt-menu-right">
          <nav>
            <button className="grt-mobile-button"><span className="line1"></span><span className="line2"></span><span className="line3"></span></button>
            <ul className="grt-menu">
              <li><a href="#top-pg" className="nav-link js-scroll-trigger">Home</a></li>
              <li><a href="#despc" className="nav-link js-scroll-trigger">Overview</a></li>
              <li><a href="#priceId" className="nav-link js-scroll-trigger">Price List</a></li>
              <li><a href="#amentiId" className="nav-link js-scroll-trigger">Amenities</a></li>
              <li><a href="#locationId" className="nav-link js-scroll-trigger">Location</a></li>
              <li><a href="gallery.html">Gallery</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
</header>
  );
}
export default Header;
