import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ScrollButton from './ScrollButton';

const Header = (props) => {
  return (
    <nav className='navbar navbar-expand-lg fixed-top navbar-dark bg-dark'>
    <ScrollButton />
      <Link className='navbar-brand' to='/'>
        <img src='/images/logo.svg' alt={`${window.name}`} title={`${window.name}`} height='50' width='153' />
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
          <li
            className={`nav-item ${props.location.pathname === '/' ? 'active' : ''
              }`}
          >
            <Link className='nav-link ' to='/'>
              Home
            </Link>
          </li>
          <li
            className={`nav-item ${props.location.pathname === '/specifications.html'
              ? 'active'
              : ''
              }`}
          >
            <Link className='nav-link' to='/specifications.html'>
              Specifications
            </Link>
          </li>
          <li
            className={`nav-item ${props.location.pathname === '/price-list.html' ? 'active' : ''
              }`}
          >
            <Link className='nav-link' to='/price-list.html'>
              Price List
            </Link>
          </li>
          <li
            className={`nav-item ${props.location.pathname === '/location-map.html' ? 'active' : ''
              }`}
          >
            <Link className='nav-link' to='/location-map.html'>
              Location Map
            </Link>
          </li>
          <li
            className={`nav-item ${props.location.pathname === '/master-plan.html' ? 'active' : ''
              }`}
          >
            <Link className='nav-link' to='/master-plan.html'>
              Master Plan
            </Link>
          </li>
          <li
            className={`nav-item ${props.location.pathname === '/floor-plan.html' ? 'active' : ''
              }`}
          >
            <Link className='nav-link' to='/floor-plan.html'>
              Floor Plan
            </Link>
          </li>
          <li
            className={`nav-item dropdown ${props.location.pathname === '/elevation-images.html'
              ? 'active'
              : ''
              } : ${props.location.pathname === '/construction-update.html'
                ? 'active'
                : ''
              } : ${props.location.pathname === '/sample-flat.html' ? 'active' : ''
              }`}
          >
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
              <li className={`nav-item`}>
                <Link
                  className={`dropdown-item ${props.location.pathname === '/elevation-images.html'
                    ? 'active'
                    : ''
                    }`}
                  to='/elevation-images.html'
                >
                  Elevation Images
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  className={`dropdown-item ${props.location.pathname === '/construction-update.html'
                    ? 'active'
                    : ''
                    }`}
                  to='/construction-update.html'
                >
                  Construction Update
                </Link>
              </li>
              <li className={`nav-item`}>
                <Link
                  className={`dropdown-item ${props.location.pathname === '/sample-flat.html'
                    ? 'active'
                    : ''
                    }`}
                  to='/sample-flat.html'
                >
                  Sample Flat
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default withRouter(Header);
