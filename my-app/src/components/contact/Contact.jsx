import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="contact_sec">
     <div className="hed_sec">
        <div className="hed1">
<span> Have a project in mind?</span>
        </div>
        <div className="hed2">
            <span>Do not hesitate to say hello.</span>
            </div>
            </div>
            <div className="cont">
            <Link to='sign-up'>
        <button className='cont_btn'>LET'S BUILD</button>
    </Link>
            </div>
    </div>
  )
}

export default Contact