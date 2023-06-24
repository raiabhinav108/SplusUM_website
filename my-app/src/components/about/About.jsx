import styles from "./about.css";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "@material-ui/core";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore from 'swiper/core';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {  motion} from "framer-motion";


SwiperCore.use([Pagination]);
const About = () => {
  const [number, setNumber] = useState(1);
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const handleSlideChange = (swiper) => {
      const activeIndex = swiper.activeIndex + 1; // Swiper indexes start from 0
      setNumber(activeIndex);
     
    };
    const shouldDisplayPaginationNew = isTablet;
  return (
    <div className="main_about">
      <p>About</p>
      <div className="hr1"></div>
      <div className="aboutSection">
        <div className="swiperSection">
        <div className="swiperContainer">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            speed={1000}
            onSlideChange={handleSlideChange} 
            
        onSwiper={(swiper) => console.log(swiper)}
        pagination={shouldDisplayPaginationNew ? { clickable: true } : false}
        
        navigation={ { prevEl: ".arrow3",
              nextEl: ".arrow4",
            }}
          >
            <SwiperSlide>
              <div
                className="aboutHead"
                
              >
                <h2>
                  Influential
                  </h2>
                  <h2>
                  -Architecture
                </h2>
              </div>
              <div
              className="aboutBody"
              >

              Since the 1980s, as the complexity of buildings began to increase, the field of architecture became multi-disciplinary with specializations for each project type, technological expertise. Through a unique combination of engineering, construction and design disciplines.
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="aboutHead"
               
              >
              <h1>
                  Influential
                  </h1>
                  <h1>
                  -Architecture
                </h1>
              </div>
              <div
                className="aboutBody"
                
              >
               Since the 1980s, as the complexity of buildings began to increase, the field of architecture became multi-disciplinary with specializations for each project type, technological expertise. Through a unique combination of engineering, construction and design disciplines and expertise
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="aboutHead"
              
              >
            <h1>
                  Influential
                  </h1>
                  <h1>
                  -Architecture
                </h1>
              </div>
              <div
                className="aboutBody"
                
              >
      Since the 1980s, as the complexity of buildings began to increase, the field of architecture became multi-disciplinary with specializations for each project type, technological expertise. Through a unique combination of engineering, construction and design disciplines and expertise
              </div>
            </SwiperSlide>
          </Swiper>
         
          {shouldDisplayPaginationNew && <div style={{display:'flex',justifyContent:'flex-start'}} className="swiper-pagination"></div>}
</div>
          <div className='arrows_abt'>
  <img
    className="arrow3"
    src="images/arrow-left-solid.svg"
    alt="images"
    onClick={() => setNumber(prevNumber => Math.max(prevNumber , 1))}
  ></img>

  <span>{number} - 3</span>

  <img
    className="arrow4"
    src="images/arrow-right-solid.svg"
    alt="images"
    onClick={() => setNumber(prevNumber => Math.min(prevNumber , 3))}
  ></img>
</div>
        </div>

        <div className="pic">
          <motion.img 
          className="about_image"
 src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/caro-img-1.jpg"></motion.img>
        </div>
      </div>
     
      <div className="hr2">
        <hr></hr>
      </div>
    </div>
  );
};

export default About;
