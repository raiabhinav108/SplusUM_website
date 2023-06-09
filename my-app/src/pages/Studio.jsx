import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import NewNav from '../components/newnav/NewNav'
import ImageMarquee from '../studioComponents/imageMarquee/ImageMarquee'
import Intro from '../studioComponents/intro/Intro'
import ParaEff from '../studioComponents/paraEff/ParaEff'
import ParallaxEffect from '../studioComponents/parallaxEffect/ParallaxEffect'
import './studio.css'
const Studio = () => {
  return (
    <div>
      <NewNav/>
      <Intro/>
      <ImageMarquee/>
      <ParallaxEffect/>
      <ParaEff/>
      <Footer/>
    </div>
  )
}

export default Studio