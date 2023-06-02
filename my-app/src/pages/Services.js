import React from 'react'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Collab from '../serviceComponents/collab/Collab'
import Goals from '../serviceComponents/goals/Goals'

import Intro from '../serviceComponents/introducs/Intro'
import Vision from '../serviceComponents/vision/Vision'

const Services = () => {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Vision/>
        <Goals/>
        <Contact/>
        <Collab/>
        <Footer/>
      
    </div>
  )
}

export default Services