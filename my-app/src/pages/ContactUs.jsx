import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import styles from "./contact.module.css";
const ContactUs = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.contactparent_mr}>
      <div className={styles.headsection_mr}>
        <div className={styles.tagStyle_mr}>SERVICES</div>
        <div className={styles.mainHead_mr}>
          Wanna To Chat Further ?<br />
          We'd Love To Hear From You .
        </div>
        <div className={styles.headcollection}>
          <div className={styles.subHead1}>
            <p>
              We build and activate brands through cultural insight, strategic
              vision.
            </p><br></br>
            <p>We’re interested in</p>
            <br />
            <p>working together</p>
            <br />
            <p>+1 827 48 89</p>
          </div>
          <div className={styles.subHead2}>
            <p>
              We build and activate brands through cultural insight, strategic
              vision.
            </p><br></br>
            <p>Have a project in mind?</p>
            <br />
            <p>Send a message</p>
            <br />
            <p>info@hub.com</p>
          </div>
        </div>
        
      </div>
      
    </div>
    <img width="100%" src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/04/bridge.jpeg"></img>
    <div className={styles.contactgrp_mr}>
      <div className={styles.group1}>
        <img className={styles.icons_mr} src="https://s3-us-west-2.amazonaws.com/handel-architects/images/general_170911_183005.svg"></img>
        <div className={styles.heading_mr}>General Inquiries</div>
        <div className={styles.subhead_mr}>Don't know which office to contact? Click to submit your request to our mailbox.</div>
      </div>
      <div className={styles.group2}>
        <img className={styles.icons_mr} src="https://s3-us-west-2.amazonaws.com/handel-architects/images/stationary_170911_183022.svg"></img>
        <div className={styles.heading_mr}>New Business And Press</div>
        <div className={styles.subhead_mr}>Don't know which office to contact? Click to submit your request to our mailbox.</div>
      </div>
    </div>
    <div className={styles.mapandgroup}>
      <div className={styles.blockgroup_mr}>
        <div className={styles.item1_mr}>
        <div className={styles.group3}>
        <img  className={styles.icons_mr}src="https://s3-us-west-2.amazonaws.com/handel-architects/images/stationary_170911_183022.svg"></img>
        <div className={styles.heading_mr}>New Business And Press</div>
        <div className={styles.subhead_mr}>Don't know which office to contact? Click to submit your request to our mailbox.</div>
      </div></div>
        <div className={styles.item4_mr}><div class="mango">
            <img className={styles.icons_mr} src="images/whatsapp.png" width="12%" height="12%" style={{marginRight: "1em"}}/>
            <div>
              <div class="Request" className={styles.heading_mr}><h4>Request A Call</h4></div>
              <div class="text" className={styles.subhead_mr}>
                it usually takes us 12-16hrs to respond. please be patience.
                connect us on
                <font style={{color: "green"}}>whatsapp : +91 90451 87480</font>
              </div>
            </div>
          </div></div>
      </div>
      <div className={styles.mapsectiom_mr}>
      <div className={styles.map} id="map">
              
              <div class="holder map-holder" className={styles.heading_mr}>
                <h3>Open in Maps</h3>

                <a href="" style={{
                    fontSize: "small",
                    color: "gray",
                    textDecoration: "underline",
                  }}>Click here to see full map</a>

                <iframe class="mapframe" style={{height: "350px", marginTop: "1em"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.2378765886474!2d-73.97644805915624!3d40.69075842971381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bb6c6fe52c7%3A0x2b3bb16e97b13c01!2sFort+Greene+Tennis+Courts!5e0!3m2!1sen!2str!4v1559831164025!5m2!1sen!2str" allowfullscreen=""></iframe>
              </div>

              
            </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};
export default ContactUs;
