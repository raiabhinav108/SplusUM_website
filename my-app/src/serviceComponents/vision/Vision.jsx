import React,{useEffect} from 'react'
import './vision.css'
const Vision = () => {
    
  useEffect(() => {
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
  
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      // Remove the scroll event listener when the component is unmounted
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

    
 
    
    

  return (
    <div className="vision_kr">
       <div className="image_vision_kr">
       <img src="http://arcstudio.liquid-themes.com/wp-content/uploads/2022/05/slider1-1.jpeg"/>
       </div>
       <div className="vision_sub_kr">
        <p>About us</p>
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
    <div className="pp"><span>Projects</span></div>
    <div className="pp"><span>Sustainability</span></div>
    <div className="pp"><span>People and More</span></div>
    <div className="pp"><span>Market Research</span></div>
    <div className="pp"><span>The Building Process</span></div>
    <div className="pp"><span>Research-Developement</span></div>
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

export default Vision