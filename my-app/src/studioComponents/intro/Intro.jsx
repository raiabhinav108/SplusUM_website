import React,{useEffect} from 'react'
import './intro.css'

const Intro = () => {

    let prevScrollPos = window.pageYOffset;
    let isScrollingDown = false;
  
    const handleScroll = () => {
      const image = document.querySelector('.image_vision_kr img');
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const imageTop = image.getBoundingClientRect().top;
      const currentScrollPos = window.pageYOffset;
  
      if (windowWidth > 768 && currentScrollPos > prevScrollPos) {
        // Scrolling down
        if (imageTop < windowHeight) {
          // Calculate the opacity based on the position of the image
          const opacity = 1 - Math.abs(imageTop) / windowHeight;
          image.style.opacity = opacity;
        }
        isScrollingDown = true;
      } else {
        // Scrolling up or reached top
        image.style.opacity = 1;
        isScrollingDown = false;
      }
  
      prevScrollPos = currentScrollPos;
    };

  return (
    <div className="intro_main">
        <div className="head_kr_intro">
    <span>OUR VISION</span> 
  </div>
  <div className="head_kr_intro2">
    <h2>The Studio</h2>
  </div>
  <div className="image_vision_kr">
  <video  src="video/video_studio.mp4" autoplay muted loop style={{ height: '531.25'+'px'}}></video>
       </div>
       <div className="vision_sub_kr">
        <p>ABOUT US</p>
      <div className="vision_hr_kr"></div>
      <div className="service_vision_kr">
<div className="sub_service1">
    <div className="hd1"><span>SERVICES</span></div>
    <div className="desc1">
<h5>We believe innovation is the key to build a better future for our people.</h5></div>
    <div className="rate"><span>9.81</span></div>
    <div className="review"><span>TrustPilot Review</span></div>
    <div className="stars">★<span>★</span><span>★</span><span>★</span><span>★</span></div>

</div>
<div className="box_kr">
<div className="sub_service2">
<div className="hd2"><h6>Case Studies</h6></div>
    <div className="pp"><span>Architectural Design</span></div>
    <div className="pp"><span>Bespoke approach</span></div>
    <div className="pp"><span>Landscape Design</span></div>
    <div className="pp"><span>Interior Design</span></div>
    <div className="pp"><span>Lighting Design</span></div>
    <div className="pp"><span>Construction</span></div>
</div>
<div className="sub_service3">
<div className="hd3"><h6>Case Studies</h6></div>
    <div className="descrip"><p>As a leading innovator in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with. We create brand identities, digital experiences, and print materials.</p></div>
</div>
</div>
      </div>
      </div>
    </div>
  )
}

export default Intro