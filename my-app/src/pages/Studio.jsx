import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ImageMarquee from '../studioComponents/imageMarquee/ImageMarquee'
import Intro from '../studioComponents/intro/Intro'
import './studio.css'
const Studio = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <ImageMarquee/>
    </div>
  )
}

export default Studio