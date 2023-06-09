import { useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import NewNav from "../components/newnav/NewNav";
import styles from "./contact.module.css";
const ContactUs = () => {
  const [change, nochange] = useState("https://s3-us-west-2.amazonaws.com/handel-architects/images/general_170911_183005.svg")
  function changebackground (){
    document.getElementById("grp1").style.backgroundColor="#30A2FF";
    nochange("https://s3-us-west-2.amazonaws.com/handel-architects/images/general-white_170911_183002.svg")
  }
  function changebackgroundtowhite(){
    document.getElementById("grp1").style.backgroundColor="white";
    nochange("https://s3-us-west-2.amazonaws.com/handel-architects/images/general_170911_183005.svg")
  }
  const [change2, nochange2] = useState("https://s3-us-west-2.amazonaws.com/handel-architects/images/stationary_170911_183022.svg")
  function changebackground2 (){
    document.getElementById("grp2").style.backgroundColor="#30A2FF";
    nochange2("https://s3-us-west-2.amazonaws.com/handel-architects/images/stationary-white_170911_183020.svg")
  }
  function changebackgroundtowhite2(){
    document.getElementById("grp2").style.backgroundColor="white";
    nochange2("https://s3-us-west-2.amazonaws.com/handel-architects/images/stationary_170911_183022.svg")
  }
  const [change3, nochange3] = useState("https://s3-us-west-2.amazonaws.com/handel-architects/images/case_170911_183017.svg")
  function changebackground3 (){
    document.getElementById("grp3").style.backgroundColor="#30A2FF";
    nochange3("https://s3-us-west-2.amazonaws.com/handel-architects/images/case-white_170911_183014.svg")
  }
  function changebackgroundtowhite3(){
    document.getElementById("grp3").style.backgroundColor="white";
    nochange3("https://s3-us-west-2.amazonaws.com/handel-architects/images/case_170911_183017.svg")
  }
  function changebackground4 (){
    document.getElementById("grp4").style.backgroundColor="#80ED99";
    
  }
  function changebackgroundtowhite4(){
    document.getElementById("grp4").style.backgroundColor="white";
    
  }
  return (
    <div>
      <NewNav/>
      <div className={styles.contactparent_mr}>
      <div className={styles.headsection_mr}>
        <div className={styles.tagStyle_mr}>SERVICES</div>
        <div className={styles.mainHead_mr}>
          Want to chat further ?<br />
          We'd love to hear from you .
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
    <img width="100%" className={styles.contactimg_mr} src="https://arcstudio.liquid-themes.com/wp-content/uploads/2022/04/bridge.jpeg"></img>
    
    <form class={styles.main_form_kr} action="/" method="post">
     <div className={styles.dts_kr}>
     <div className={styles.subdts1_kr}>
     <div className={styles.subdivpara_kr}>
    <p>Nice to meet you</p>
     </div>
     <div className={styles.subdiv_input_kr}>
     <input type="text" placeholder="What's your name" name="email" size="30" id="cont" required/><br/>
      </div>
      </div>
      <div className={styles.subdts2_kr}>
     <div className={styles.subdivpara_kr}>
    <p>Email adrdess</p>
     </div>
     <div className={styles.subdiv_input_kr}>
     <input type="text" placeholder="Enter your email address" name="email" size="30" id="cont" required/><br/>
      </div>
      </div>
      

</div>
     <div className={styles.dts_kr}>
     <div className={styles.subdts1_kr}>
     <div className={styles.subdivpara_kr}>
    <p>Optional</p>
     </div>
     <div className={styles.subdiv_input_kr}>
     <input type="text" placeholder="Your phone number" name="email" size="30" id="cont" required/><br/>
      </div>
      </div>
      <div className={styles.subdts2_kr}>
     <div className={styles.subdivpara_kr}>
    <p>Subject</p>
     </div>
     <div className={styles.subdiv_input_kr}>
     <input type="text" placeholder="How can i help you" name="email" size="30" id="cont" required/><br/>
      </div>
      </div>
      

</div>
     <div className={styles.dts_kr}>
     <div className={styles.subdts1_kr}>
     <div className={styles.subdivpara_kr}>
    <p>Budget</p>
     </div>
     <div className={styles.subdiv_input_kr}>
     <input type="text" placeholder="Your budget" name="email" size="30" id="cont" required/><br/>
      </div>
      </div>
      <div className={styles.subdts2_kr}>
     <div className={styles.subdivpara_kr}>
    <p>Interested Service</p>
     </div>
     <div className={styles.subdiv_input_kr}>
     <input type="text" placeholder="Construction" name="email" size="30" id="cont" required/><br/>
      </div>
      </div>
      

</div>
 
<div className={styles.desc_text_kr}>

<textarea  placeholder='Tell us about your project' rows="8" cols="70"></textarea>
</div>



      
<button type="submit" class={styles.registerbtn_kr}>Send Message</button> 

    


  </form>
    
    
    
    
    <div className={styles.contactgrp_mr}>
      <div className={styles.group1} id="grp1" onMouseOver={changebackground} onMouseLeave={changebackgroundtowhite}>
        <img className={styles.icons_mr} src={change}></img>
        <div className={styles.heading_mr}>General Inquiries</div>
        <div className={styles.subhead_mr}>Don't know which office to contact? Click to submit your request to our mailbox.</div>
      </div>
      <div className={styles.group2} id="grp2" onMouseOver={changebackground2} onMouseLeave={changebackgroundtowhite2}>
        <img className={styles.icons_mr} src={change2}></img>
        <div className={styles.heading_mr}>New Business And Press</div>
        <div className={styles.subhead_mr}>Don't know which office to contact? Click to submit your request to our mailbox.</div>
      </div>
    </div>
    <div className={styles.mapandgroup}>
      <div className={styles.blockgroup_mr}>
        <div className={styles.item1_mr}>
        <div className={styles.group3} id="grp3" onMouseOver={changebackground3} onMouseLeave={changebackgroundtowhite3}>
        <img  className={styles.icons_mr}src={change3}></img>
        <div className={styles.heading_mr}>Career</div>
        <div className={styles.subhead_mr}>See our current job opening.</div>
      </div></div>
        <div className={styles.item4_mr} id="grp4" onMouseOver={changebackground4} onMouseLeave={changebackgroundtowhite4}><div class="mango">
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
      <div className={styles.mapsectiom_mr} >
      <div className={styles.map} id="map" >
              
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
