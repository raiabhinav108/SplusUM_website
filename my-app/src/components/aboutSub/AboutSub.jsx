import React from 'react'
import './aboutSub.css'
import ContactPage from "../contactPage/ContactPage";
import { useState } from 'react';
const AboutSub = () => {
  const[open, setOpen]=useState(false);

  const openDialog=()=>{
    setOpen(true);
  }

  return (
    
    <div className="aboutsub_section">
     
          <div className="Headingpart_aboutsub">
            <h1>Collection VII</h1>
            <h1>Kitchen.</h1>
          </div>
          <div className="Contentpart_aboutsub">
          <p> Hub Construction employs over 2000 employees, the majority of whom are based on project sites. We embrace holistic development and support for employees with the aim of being a first-choice employer within our</p>
          </div>
            <div className="ButtonParent_aboutsub">
            <button onClick={() => openDialog()} className='cont_btn'></button>
        <ContactPage open={open} setOpen={setOpen}/>
          </div>
        </div>
    
    
  )
}

export default AboutSub