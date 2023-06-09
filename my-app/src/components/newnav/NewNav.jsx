import React from 'react'
import './newnav.css'
import { Link } from 'react-router-dom';

const NewNav = () => {
  return (
    <>
    <header class="header">
    <div className="nav_main">
    <div className="navhead">
    <a href="" class="logo">S+UM</a>
    </div>
    <div className="nav_subhead">
    <input class="menu-btn" type="checkbox" id="menu-btn" />
   
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
   
    <ul class="menu">
    <li >
    <Link  to='/' className='nav-links'>HOME</Link>
    <Link to='/studio' className='nav-links'>THE STUDIO</Link>
    <Link to='/services' className='nav-links'>OUR SERVICES</Link>
    <Link to='/multi' className='nav-links'>PROJECTS</Link>
    <Link to='/contact' className='nav-links'>CONTACT</Link>
    </li>
     
      <button className='btn'><i class="fas fa-light fa-magnifying-glass"></i></button>
    </ul>
    </div>
    </div>
  </header> 
  </>
  
  )
}

export default NewNav