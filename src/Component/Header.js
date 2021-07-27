import React from "react";
import { Link, withRouter } from "react-router-dom";
const Header = (props) => {
  return (
    <nav className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          <img src='/images/logo.svg' alt='' height='50' />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li class={`nav-item ${props.location.pathname === "/" ? "active" : ""
              }`}>
              <Link className='nav-link ' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/specifications.html'>
                Specifications
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/price-list.html'>
                Price List
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/location-map.html'>
                Location Map
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/master-plan.html'>
                Master Plan
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/floor-plan.html'>
                Floor Plan
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <Link
                className='nav-link dropdown-toggle'
                to='/#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Gallery
              </Link>
              <ul
                className='dropdown-menu dropdown-menu-end'
                aria-labelledby='navbarDropdown'
              >
                <li>
                  <Link className='dropdown-item' to='/elevation-images.html'>
                    Elevation Images
                  </Link>
                </li>
                <li>
                  <Link
                    className='dropdown-item'
                    to='/construction-update.html'
                  >
                    Construction Update
                  </Link>
                </li>
                <li>
                  <Link className='dropdown-item' to='/sample-flat.html'>
                    Sample Flat
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default withRouter(Header);
