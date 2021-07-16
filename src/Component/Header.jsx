const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link " href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/specifications.html">Specifications</a></li>
            <li className="nav-item"><a className="nav-link" href="/price-list.html">Price List</a></li>
            <li className="nav-item"><a className="nav-link" href="/location-map.html">Location Map</a></li>
            <li className="nav-item"><a className="nav-link" href="/master-plan.html">Master Plan</a></li>
            <li className="nav-item"><a className="nav-link" href="/floor-plan.html">Floor Plan</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Gallery</a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/elevation-images.html">Elevation Images</a></li>
                <li><a className="dropdown-item" href="/construction-update.html">Construction Update</a></li>
                <li><a className="dropdown-item" href="/sample-flat.html">Sample Flat</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header;
