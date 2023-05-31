import React from 'react'
import './contact.css'

import ContactPage from "../contactPage/ContactPage";
import { useState } from 'react';
const Contact = () => {
  const[open, setOpen]=useState(false);

  const openDialog=()=>{
    setOpen(true);
  }

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
           
            
   
    
        <button onClick={() => openDialog()} className='cont_btn'></button>
        <ContactPage open={open} setOpen={setOpen}/>
   
            </div>
    </div>
  )
}

export default Contact