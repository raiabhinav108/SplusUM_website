import { useScroll, useTransform,motion, delay } from "framer-motion";
import styles from "./projects.module.css";
const Projects = () => {
  let {scrollYProgress} =useScroll();
  let y = useTransform(scrollYProgress,[0,1],["5%","-50%"]);
  let z = useTransform(scrollYProgress,[0,1],["0%","-47%"]);
  return (
    <div style={{backgroundColor:"#f8f8f8"}}>
      <div className={styles.Projectsets}>
        <div className={styles.headplussub}> 
          <div className={styles.head}>
            <h1>Recent Projects</h1>
          </div>
          <div className={styles.subhead}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
            nibh varius, fringilla enim ut, efficitur erat.
          </div>
        </div>

        <div className={styles.cardsSet}>
          <div className={styles.card}>
            <div  className={styles.cardimg}><motion.img style={{y}} className={styles.projimage}   src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/Slider.jpg" /></div>
            <div className={styles.cardDescrip}>
            <div className={styles.projehead}>
                Lorem Ipsum
                <div>
                <a href="#"><u>Explore project</u></a>
              </div>
              
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id nibh varius, fringilla enim ut, efficitur erat</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardimg}><motion.img style={{y}} className={styles.projimage} src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/Slider.jpg" /></div>
            <div className={styles.cardDescrip}>
              <div className={styles.projehead}>
                Lorem Ipsum
                <div>
                <a href="#"><u>Explore project</u></a>
              </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id nibh varius, fringilla enim ut, efficitur erat</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Projects;
