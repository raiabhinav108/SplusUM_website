import React, { useState } from 'react';
import  Button  from './Button';
import { Link } from 'react-router-dom';
import './navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          S+UM
          
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/single'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              TOB
            </Link>
   
          </li>
          <li className='nav-item'>
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              OUR SERVICES
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/multi'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              PROJECTS
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              CONTACT
            </Link>
          </li>
          <li>
            <button
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              <i class="fas fa-magnifying-glass"></i>
              </button>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;