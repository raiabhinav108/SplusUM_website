
import './parallaxeffect.css'
import React, { useEffect, useState } from 'react';

const ParallaxEffect = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.main_sub_div_px');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isVisible);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main_px">
        <div className={`main_sub_div_px ${isVisible ? 'fade-in active' : 'fade-in'}`}>
            <div className="head_px"><span>THE PROCESS</span></div>
            <div className="desc_px"><h2>Building the future cities.</h2></div>
        </div>
        <div className={`sub_div_px ${isVisible ? 'fade-in1 active' : 'fade-in1'}`}>
        <div className="sub_head_px">
        <div className="head_num"><span>01</span></div>
        <div className="head_desc"><h3>/ Analysis</h3></div>
        </div>
            <div className="sub_desc_px"><p>Urban design draws together the many strands of place-making, environmental stewardship, social equity and economic viability into the creation of places with distinct beauty and identity</p></div>
        </div>
        <div className={`sub_div_px ${isVisible ? 'fade-in2 active' : 'fade-in2'}`}>
        <div className="sub_head_px">
        <div className="head_num"><span>02</span></div>
        <div className="head_desc"><h3>/ Schematic</h3></div>
        </div>
            <div className="sub_desc_px"><p>Through a unique combination of engineering, construction and design disciplines and expertise, Concor delivers world class infrastructure solutions to customers and stakeholders across a broad range of industry sectors.</p></div>
        </div>
        <div className={`sub_div_px ${isVisible ? 'fade-in3 active' : 'fade-in3'}`}>
        <div className="sub_head_px">
        <div className="head_num"><span>03</span></div>
        <div className="head_desc"><h3>/ Concept</h3></div>
        </div>
            <div className="sub_desc_px"><p>Since the 1980s, as the complexity of buildings began to increase, the field of architecture became multi-disciplinary with specializations for each Through a unique combination of engineering, construction and design disciplines and expertise.</p>
</div>
        </div>
        <div className={`sub_div_px ${isVisible ? 'fade-in4 active' : 'fade-in4'}`}>
        <div className="sub_head_px">
        <div className="head_num"><span>04</span></div>
        <div className="head_desc"><h3>/ Offer</h3></div>
        </div>
            <div className="sub_desc_px"><p>Hub embraces holistic development and support for employees the aim of being a first-choice employer our sectors. Since the 1980s, as the complexity of buildings began to increase, the field of architecture became multi-disciplinary</p>
</div></div>





    </div>
  )
}

export default ParallaxEffect