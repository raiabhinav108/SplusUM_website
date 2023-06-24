import { useScroll,motion} from "framer-motion";
import styles from "./projects.module.css";



const Projects = () => {


  return (
    
      <div className={styles.Projectsets}>
        <div className={styles.headplussub}> 
        <div className={styles.intro1}>
          CASE STUDIES
        </div>
          <div className={styles.pjofhead}>
            <h2>Recent Projects</h2>
          </div>
          <div className={styles.subhead_pj}>
          <p>Hub Construction employs over 2000 employ, the majority of whom are based on project sites. We embrace holistic development.</p>
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
                <h5>South Florida Towers</h5>
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
                <h5>South Florida Towers</h5>
                </div>
             
              
             
              
              </div>
              <div className={styles.projepara}>
              <p>Our process applies techniques from a variety of disciplines, values distinction in detail and gives.
</p>
            </div>
            </div>
          </div>
     
          
        </div>
  
      </div>
   
  );
};
export default Projects;
