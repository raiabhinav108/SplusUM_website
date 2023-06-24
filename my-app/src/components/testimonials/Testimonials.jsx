
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import React, { useState } from 'react';
import { useMediaQuery } from "@material-ui/core";
import SwiperCore from 'swiper/core';
// Import Swiper styles
import "swiper/css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useScroll,motion,useTransform } from "framer-motion";

import './testimonials.css'

SwiperCore.use([Pagination]);


const Testimonials = () => {

    
    let {scrollYProgress} = useScroll();
    const [number, setNumber] = useState(1);
    const isMobile = useMediaQuery("(max-width: 767px)");
    const isTablet = useMediaQuery("(max-width: 1024px)");
    const handleSlideChange = (swiper) => {
        const activeIndex = swiper.activeIndex + 1; // Swiper indexes start from 0
        setNumber(activeIndex);
      };
    let y = useTransform(scrollYProgress,[0,1],["100%","-70%"]);
    const shouldDisplayPagination = isTablet;
  return (
    <div className="fd_section">
    <div className="heading_fd">
        TESTIMONIALS
    </div>
    <div style={{width:'99%'}} className="hr1"></div>
    <div className="heading_main1">
       <h2>
        Hear From</h2>
       <h2>Customers</h2>
 
        </div>
       
        <div className="main_pagination" >
        <div className="fd_imagequotes">
        <div className="fd_imagequotes_sub">
        <img className="quotes_img1" src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/quote.svg" alt="Quote" width="128" height="83"></img>
        </div>
        <div className="fd_imagequotes_sub">
        <img className="quotes_img1 blow" src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/quote.svg" alt="Quote" width="128" height="83"></img>
        </div>
        <div className="fd_imagequotes_sub">
        <img className="quotes_img blow diss " src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/quote.svg" alt="Quote" width="128" height="83"></img>
        </div>
        </div>
    <Swiper style={{ width: '100%'}}
      modules={[Navigation, Pagination, Scrollbar, A11y]}

        speed={1500}
        slidesPerView={isMobile ? 1 : (isTablet ? 2 : 3)}

        onSlideChange={handleSlideChange} 
        onSwiper={(swiper) => console.log(swiper)}
        pagination={shouldDisplayPagination ? { clickable: true } : false}
        navigation={ { prevEl: ".arrow3",
              nextEl: ".arrow4",
            }}
      >


                         
 
             <SwiperSlide ><div className="imageparent1"><motion.div style={{y}} className="sliderimages" >

        <div className="fd_desc"><p>Urban design draws together the many strands of place-making, environmental stewardship, social equity and economic viability into the creation of places .</p></div>
            <div className="fd_para"><h3>Samantha John, ceo</h3></div>
        </motion.div></div></SwiperSlide>
        
        
        <SwiperSlide><div className="imageparent1"><motion.div style={{y}} >
            <div className="fd_desc"><p>Through a unique combination of engineer, construction and design disciplines and expertise, Concor delivers world class infrastructure .</p></div>
            <div className="fd_para"><h3>Jose Sanchez, liquid</h3></div>
        </motion.div></div></SwiperSlide>

  
        <SwiperSlide><div className="imageparent1"><motion.div style={{y}} className="sliderimages" >
        <div className="fd_desc"><p>Our process applies techniques from a variety of disciplines, values distinction in detail and gives careful. Since the 1980s, as the complexity of buildings began to increase.</p></div>
            <div className="fd_para"><h3>Daniel mark, Envato</h3></div>
        </motion.div></div></SwiperSlide>
        

        <SwiperSlide><div className="imageparent1"><motion.div style={{y}} className="sliderimages" >
        <div className="fd_desc"><p>Urban design draws together the many strands of place-making, environmental stewardship, social equity and economic viability into the creation of places with distinct beaut.</p></div>
            <div className="fd_para"><h3>Samantha John, ceo</h3></div>
        </motion.div></div></SwiperSlide>
        
        
        <SwiperSlide className="dissp_fd"><div className="imageparent1"><motion.div style={{y}} >
            <div className="fd_desc"><p>Through a unique combination of engineer, construction and design disciplines and expertise, Concor delivers world class infrastructure solutions and more.</p></div>
            <div className="fd_para"><h3>Jose Sanchez, liquid</h3></div>
        </motion.div></div></SwiperSlide>

  
        <SwiperSlide className="dissp_fd"><div className="imageparent1"><motion.div style={{y}} className="sliderimages" >
        <div className="fd_desc"><p>Our process applies techniques from a variety of disciplines, values distinction in detail and gives careful. Since the 1980s, as the complexity of buildings began to increase.</p></div>
            <div className="fd_para"><h3>Daniel mark, Envato</h3></div>
        </motion.div></div></SwiperSlide>
        
   
      </Swiper>
      {shouldDisplayPagination && <div className="swiper-pagination"></div>}
    </div>

    <div className="arrows_fd">
  <img
    className="arrow3"
    src="images/arrow-left-solid.svg"
    alt="images"
    onClick={() => setNumber(prevNumber => Math.max(prevNumber , 1))}
  ></img>

  <span>{number} - 4</span>

  <img
    className="arrow4"
    src="images/arrow-right-solid.svg"
    alt="images"
    onClick={() => setNumber(prevNumber => Math.min(prevNumber , 4))}
  ></img>
</div>

      </div>
  )
}

export default Testimonials