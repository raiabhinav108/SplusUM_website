import React from 'react'
import Navbar from '../components/navbar/Navbar'
import ImageMarquee from '../studioComponents/imageMarquee/ImageMarquee'
import Intro from '../studioComponents/intro/Intro'
import ParaEff from '../studioComponents/paraEff/ParaEff'
import ParallaxEffect from '../studioComponents/parallaxEffect/ParallaxEffect'
import './studio.css'
const Studio = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <ImageMarquee/>
      <ParallaxEffect/>
      <ParaEff/>
    </div>
  )
}

export default Studio