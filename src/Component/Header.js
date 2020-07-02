import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Header extends Component {
  render() {
    const { location } = this.props;

    const homeClass = location.pathname === '/' ? 'active' : '';
    const conversionClass = location.pathname.match(/^\/conversion/)
      ? 'active'
      : '';

    return (
      <header>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <Link className='navbar-brand' to='#'>
            Conversion App
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink to='/' activeClassName={homeClass}>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/conversion' activeClassName={conversionClass}>
                  Conversion
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
