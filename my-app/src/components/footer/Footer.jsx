import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    
        <div className="foot">
        <div align="right" className="logo">
S+UM
 </div>
 <div className="head_section">
Let's Build Something Great Together
 </div>
 <div className="mid_section">
 <div className="sub_head">
    London
    </div>
    <div className="details">
    <div className="sub_details">
    <div className="details1">
    <p>21 Valentin Paterson</p>
    <p> Road 24, London</p>
    </div>
    <div className="details2">
    <p>+ 124 875 89 90</p>
    <p>info @polar-dot.com</p>
    </div>
    </div>
    <div className="details3">
    Interior design is the art and science of enhancing the interiors, sometimes including the exterior, of a space or building, to achieve a healthier and more aesthetically.
    </div>
    </div>
 </div>
 <div className="low_section">
 <div className="sub_head">
    Paris
    </div>
    <div className="details">
    <div className="sub_details">
    <div className="details1">
    <p> 290 Maryam Springs</p>
    <p> Courbevoie, Paris</p>
    </div>
    <div className="details2">
    <p>+11 21 5941 295</p>
    
    </div>
    </div>

    </div>
</div>
 <div className="end_section">
 <div className="contact_box" >

<div className="contact_menu">
  <div className= "icons">
    <a href="/contact"><i class="fab fa-facebook-f"></i></a>
    </div>
  <div className= "icons">
    <a href="/contact"><i class="fab fa-twitter"></i></a>
  </div>
  <div className= "icons">
    <a href="/contact"><i class="fab fa-linkedin-in"></i></a>
  </div>
  <div className= "icons">
    <a href="/contact"><i class="fab fa-google-plus-g"></i></a>
  </div>
 
</div>
</div>

<div align="right" className= "foot_section">
          <div className='foot_item'>
            <Link to='/' className='foot_links' >
              Company
            </Link>
          </div>
          <div
            className='foot_item'
          
          >
            <Link
              to='/studio'
              className='foot_links'
              
            >
              Careers
            </Link>
           
          </div>
          <div className='foot_item'>
            <Link
              to='/services'
              className='foot_links'
              
            >
              Services
            </Link>
          </div>
          <div className='foot_item'>
            <Link
              to='/projects'
              className='foot_links'
              
            >
              Projects
            </Link>
          
          </div>
</div>
</div>


        </div>
    
  )
}

export default Footer