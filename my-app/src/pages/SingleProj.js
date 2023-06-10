import Navbar from "../components/navbar/Navbar";
import styles from "./singleproj.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@material-ui/core";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer"
import NewNav from "../components/newnav/NewNav";
import Display from "../sinprojComponents/display/Display";
import TabularData from "../sinprojComponents/tabularData/TabularData";
const SingleProject = () => {
    const [number, setNumber] = useState(1);
    const handleSlideChange = (swiper) => {
        const activeIndex = swiper.activeIndex + 1; // Swiper indexes start from 0
        setNumber(activeIndex);
      };
    const isMobile = useMediaQuery("(max-width: 767px)");
  return (
    <div>
      <div className={styles.singleparent}>
        <NewNav />
        <div className={styles.tob}>The Only Burger</div>
        <div className={styles.line}>
          <hr className={styles.hore}></hr>
        </div>

        <div className={styles.information}>
          <div className={styles.set1}>
            <p className={styles.infohead}>CLIENT</p>
            <p className={styles.infoabout}>The Only Burger</p>
          </div>
          <div className={styles.set2}>
            <p className={styles.infohead}>LOCATION</p>
            <p className={styles.infoabout}>Patna, Bihar</p>
          </div>
          <div className={styles.set3}>
            <p className={styles.infohead}>PROJECTS TYPE</p>
            <p className={styles.infoabout}>Shop, Business</p>
          </div>
          <div className={styles.set4}>
            <p className={styles.infohead}>STATUS</p>
            <p className={styles.infoabout}>Completed in 2022</p>
          </div>
        </div>
        <img src="images/tob.jpg" height="500px" width="100%"></img>
      </div>
      <div className={styles.intro}>
        <div className={styles.introhead}>
        Madison House is a slender luxury residential visually defined by delicate vertical banding and a sharp skyline presence.
        </div>
        <div className={styles.introbody}>
          Serif and The Line Hotel is a new 12-story mixed-use hotel and
          residential building occupying the majority of a triangular block
          where San Francisco’s Union Square, Tenderloin and South of Market
          districts meet. The 34,000 sq. ft. site shares the block with the
          historic Warfield Theater. The scale and aesthetic of the project are
          designed to relate to the context of adjacent buildings in the
          Tenderloin and along Market Street. The building massing addresses the
          challenging proportions of the irregularly-shaped site while also
          carving out a generous outdoor plaza for the public realm on Turk
          Street.
        </div>
      </div>
      <div className={styles.swipper}>
        <div className={styles.swipperhead}>
        Site & Context
        </div>
        <div>
        <div >
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      speed={200}
        spaceBetween={100}
        slidesPerView={1}
        onSlideChange={handleSlideChange} 
        
        onSwiper={(swiper) => console.log(swiper)}
        navigation={ { prevEl: ".arrow3",
              nextEl: ".arrow4",
            }}
      >
        <SwiperSlide><div className={styles.imageparent}><img  className={styles.sliderimages} src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/Slider-11.jpg" height="500px"></img></div></SwiperSlide>
        <SwiperSlide><div className={styles.imageparent}><img  className={styles.sliderimages} src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/Slider-2.jpg" height="500px"></img></div></SwiperSlide>
        <SwiperSlide><div className={styles.imageparent}><img  className={styles.sliderimages} src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/Slider-1.jpg" height="500px"></img></div></SwiperSlide>
        
      </Swiper>
    </div>

      <div className={styles.arrows_slider}>
      <img className="arrow3" src="images/arrow-left-solid.svg"  onClick={() => setNumber(prevNumber => Math.max(prevNumber , 1))}></img>
      <div className={styles.counter}><div className={styles.changingno}>{number}</div><div style={styles.dash}>-</div><div style={styles.notchanging}>3</div></div>
      <img className="arrow4" src="images/arrow-right-solid.svg"  onClick={() => setNumber(prevNumber => Math.min(prevNumber , 3))}></img>
      </div>
        </div>
      </div>
      <Display/>
      <TabularData/>
      <Contact/>
      <div className={styles.void}>
      </div>
      <Footer/>
    </div>
    
  );
};

export default SingleProject;
