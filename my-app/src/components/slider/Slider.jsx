import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./slider.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";

const Slider = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x -25,
      y: mousePosition.y - 120,
    },
  };
  
  
  return (
    <div className={styles.parent} >
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <motion.div
            className={styles.curser}
            variants={variants}
            animate="default"
            whileTap={{ scale: 0.6 }}
            id="mango"
          >
            Drag
          </motion.div>
          <div>
            <img
              className={styles.img1}
              src="images/image1.jpg"
              width="100%"
              height="100%"
            ></img>
          </div>
          <div className={styles.description}>
            <h1>Lorem Ipsem</h1>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tempus semper ultrices. Pellentesque sit amet ipsum ac felis
              interdum dictum.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div
            className={styles.curser}
            variants={variants}
            animate="default"
            whileTap={{ scale: 0.6 }}
          >
            Drag
          </motion.div>
          <div>
            <img
              className={styles.img1}
              src="images/image2.png"
              width="100%"
              height="100%"
            ></img>
          </div>
          <div className={styles.description}>
            <h1>Lorem Ipsem</h1>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              tempus semper ultrices. Pellentesque sit amet ipsum ac felis
              interdum dictum.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
