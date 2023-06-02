import React from 'react'
import { Dialog } from '@mui/material'
import './contactPage.css'

const ContactPage = ({open,setOpen}) => {
    const handleClose=()=>{
        setOpen(false);
    }
    
  return (
    <Dialog open={open} onClose={handleClose}>
        <div className="cnt_form">
<div className="banner">
<h1> Get a quote</h1>
</div>
<div className="subBanner">
<p>We’re here to help and answer any question you might have. We look forward to hearing from you 🙂✨</p>
</div>
    <form class="" action="/" method="post">
     <div className="dts">
     <div className="subdts1">
     <div className="subdivpara">
    <p>Nice to meet you</p>
     </div>
     <div className="subdiv_input">
     <input type="text" placeholder="What's your name" name="email" size="30" id="cont" required/><br/>
      </div>
      </div>
      <div className="subdts2">
     <div className="subdivpara">
    <p>Email adrdess</p>
     </div>
     <div className="subdiv_input">
     <input type="text" placeholder="Enter your email address" name="email" size="30" id="cont" required/><br/>
      </div>
      </div>
      

</div>
     <div className="dts">
     <div className="subdts1">
     <div className="subdivpara">
    <p>Nice to meet you</p>
     </div>
     <div className="subdiv_input">
     <input type="text" placeholder="What's your name" name="email" size="30" id="cont" required/><br/>
      </div>
      </div>
      <div className="subdts2">
     <div className="subdivpara">
    <p>Email adrdess</p>
     </div>
     <div className="subdiv_input">
     <input type="text" placeholder="Enter your email address" name="email" size="30" id="cont" required/><br/>
      </div>
      </div>
      

</div>
     <div className="dts">
     <div className="subdts1">
     <div className="subdivpara">
    <p>Optional</p>
     </div>
     <div className="subdiv_input">
     <input type="text" placeholder="What's your name" name="email" size="30" id="cont" required/><br/>
      </div>
      </div>
      <div className="subdts2">
     <div className="subdivpara">
    <p>Subject</p>
     </div>
     <div className="subdiv_input">
     <input type="text" placeholder="Enter your email address" name="email" size="30" id="cont" required/><br/>
      </div>
      </div>
      

</div>
 
<div className="desc_text">
<textarea  placeholder='Tell us about your project' rows="7" cols="70"></textarea>
</div>



      
<button type="submit" class="registerbtn">Send Message</button> 

    


  </form>

        </div>
        
    </Dialog>
  )
}

export default ContactPage