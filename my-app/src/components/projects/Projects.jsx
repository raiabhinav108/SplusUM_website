import { useScroll,motion} from "framer-motion";
import styles from "./projects.module.css";



const Projects = () => {


  return (
    
      <div className={styles.Projectsets}>
        <div className={styles.headplussub}> 
        <div className={styles.intro}>
          CASE STUDIES
        </div>
          <div className={styles.head_pj}>
            <h1>Recent Projects</h1>
          </div>
          <div className={styles.subhead_pj}>
          Hub Construction employs over 2000 employees, the majority of whom are based on project sites. We embrace holistic development.
          </div>
        </div>

        <div className={styles.cardsSet}>
          <div  className={styles.card_l}>
         
            <div  className={styles.cardimg}>
            <motion.img id="zoomImage"  className={styles.projimage}src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/Img-2.jpg" />
            </div>
        
        
            <div className={styles.cardDescrip}>
            <div className={styles.projehead}>
            <div className={styles.projemainhead}>
                <h4>South Florida Towers</h4>
                </div>
             
              
              
              </div>
              <div className={styles.projepara}>
              <p>Our process applies techniques from a variety of disciplines, values distinction in detail and gives.
</p>
            </div>
            </div>
          </div>
          <div  className={styles.card_r}>
          
    
            <div  className={styles.cardimg}>
            <motion.img className={styles.projimage}  src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/Img-2.jpg" />
            </div>
         
           
            <div className={styles.cardDescrip}>
            <div className={styles.projehead}>
            <div className={styles.projemainhead}>
                <h4>South Florida Towers</h4>
                </div>
             
              
             
              
              </div>
              <div className={styles.projepara}>
              <p>Our process applies techniques from a variety of disciplines, values distinction in detail and gives.
</p>
            </div>
            </div>
          </div>
     
          
        </div>
        <div className={styles.cardsSet_second}>
          <div  className={styles.card_l}>
          
            <div  className={styles.cardimg}>
            <motion.img className={styles.projimage}   src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/Img.jpg" />
         
       
            </div>
            <div className={styles.cardDescrip}>
            <div className={styles.projehead}>
            <div className={styles.projemainhead}>
                <h4>Sydney Opera House</h4>
                </div>
             
              
              
              </div>
              <div className={styles.projepara}>
              <p>Through a unique combination of engineering, construction and design disciplines and expertise,</p>
            </div>
            </div>
          </div>
          <div  className={styles.card_r}>
          

            <div  className={styles.cardimg}>
            <motion.img className={styles.projimage}   src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/03/Img.jpg" />
            </div>
         
            <div className={styles.cardDescrip}>
            <div className={styles.projehead}>
            <div className={styles.projemainhead}>
                <h4>Sydney Opera House</h4>
                </div>
             
              
              
              </div>
              <div className={styles.projepara}>
              <p>Through a unique combination of engineering, construction and design disciplines and expertise,</p>
            </div>
            </div>
          </div>
     
          
        </div>
      </div>
   
  );
};
export default Projects;
