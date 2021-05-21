import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar navbar-expand navbar-dark bg-primary fixed-top'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          <i className={icon}></i> {title}
        </Link>
        <div>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'GitHub Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
