import styles from "./about.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useScroll, useTransform ,motion} from "framer-motion";
const About = () => {
  
  
  return (
    <div className={styles.yo}>
      <p>About</p>
      <div className={styles.hr}></div>
      <div className={styles.aboutSection}>
        <div className={styles.swiperSection}>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: ".arrow1",
              nextEl: ".arrow2",
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div
                className="aboutHead"
                style={{ paddingBottom: "200px", fontSize: "20px" }}
              >
                <h1>
                  Lorem <br />
                  -Ipsum
                </h1>
              </div>
              <div
                className="aboutBody"
                style={{
                  fontWeight: 300,
                  fontSize: "15px",
                  textAlign: "justify",
                  paddingBottom: "100px",
                  width: "80%",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                aliquam purus vel lectus blandit fringilla. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Integer ullamcorper viverra orci vel rutrum. In lobortis
                mauris et erat tincidunt fermentum.
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="aboutHead"
                style={{ paddingBottom: "200px", fontSize: "20px" }}
              >
                <h1>
                  Lorem <br />
                  -Ipsum
                </h1>
              </div>
              <div
                className="aboutBody"
                style={{ fontWeight: 300, fontSize: "15px", width: "80%" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                aliquam purus vel lectus blandit fringilla. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Integer ullamcorper viverra orci vel rutrum. In lobortis
                mauris et erat tincidunt fermentum.
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="aboutHead"
                style={{ paddingBottom: "200px", fontSize: "20px" }}
              >
                <h1>
                  Lorem <br />
                  -Ipsum
                </h1>
              </div>
              <div
                className="aboutBody"
                style={{ fontWeight: 300, fontSize: "15px", width: "80%" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                aliquam purus vel lectus blandit fringilla. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Integer ullamcorper viverra orci vel rutrum. In lobortis
                mauris et erat tincidunt fermentum.
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.pic}>
          <motion.img 
 src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/caro-img-1.jpg"></motion.img>
        </div>
      </div>
      <div className={styles.arrows}>
      <img className="arrow1" src="images/arrow-left-solid.svg"  ></img>
      <img className="arrow2" src="images/arrow-right-solid.svg"  ></img>
      </div>

      <div className={styles.hr2}>
        <hr></hr>
      </div>
    </div>
  );
};

export default About;
