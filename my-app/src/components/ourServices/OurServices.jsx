import styles from "./OurServices.module.css";


const OurServices = () => {
  return (
    <div>
      <div>
        <div>Our Services</div>
        <div className={styles.horizontalrule}></div>
      </div>
      <div className={styles.mid}>
        <div className={styles.writtenpart}>
          <div className={styles.Headingpart}>
            <h1>Functional</h1>
            <br />
            <h1>-Ipsum</h1>
          </div>
          <div className={styles.Contentpart}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper
            risus felis, at commodo leo vehicula sed. Donec pharetra nisl eu
            tellus suscipit lacinia. Sed sollicitudin cursus nisl, eget pulvinar
            turpis. Ut dapibus et mi eget vestibulum. Duis ut erat et orci
            feugiat dictum a vitae mauris.
          </div>
        </div>
        <div className={styles.Accordion}>
           
        </div>
      </div>
    </div>
  );
};

export default OurServices;
