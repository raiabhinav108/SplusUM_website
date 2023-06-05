import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ImageMarquee from '../studioComponents/imageMarquee/ImageMarquee'
import Intro from '../studioComponents/intro/Intro'
import ParallaxEffect from '../studioComponents/parallaxEffect/ParallaxEffect'
import './studio.css'
const Studio = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <ImageMarquee/>
      <ParallaxEffect/>
    </div>
  )
}

export default Studio