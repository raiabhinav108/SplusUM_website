import styles from "./imageSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import "swiper/css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useScroll,motion,useTransform } from "framer-motion";


const ImageSlider = () => {
  let {scrollYProgress} = useScroll();
    let y = useTransform(scrollYProgress,[0,1],["100%","-30%"]);
  
  return (
    <div className={styles.SliderParent}>
    <div >
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}

        spaceBetween={100}
        slidesPerView={1.29}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={ { prevEl: ".arrow3",
              nextEl: ".arrow4",
            }}
      >
        <SwiperSlide><div className={styles.imageparent}><motion.img style={{y}} className={styles.sliderimages} src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/Slider-11.jpg"></motion.img></div></SwiperSlide>
        <SwiperSlide><div className={styles.imageparent}><motion.img style={{y}} className={styles.sliderimages} src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/Slider-2.jpg"></motion.img></div></SwiperSlide>
        <SwiperSlide><div className={styles.imageparent}><motion.img style={{y}} className={styles.sliderimages} src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/Slider-1.jpg"></motion.img></div></SwiperSlide>
        
      </Swiper>
    </div>

      <div className={styles.arrows}>
      <img className="arrow3" src="images/arrow-left-solid.svg"  ></img>
      <img className="arrow4" src="images/arrow-right-solid.svg"  ></img>
      </div>
    </div>
  );
};

export default ImageSlider;
