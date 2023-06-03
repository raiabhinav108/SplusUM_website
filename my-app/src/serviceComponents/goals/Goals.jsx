

import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import React from 'react'
import './goals.css'
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px  ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0
  },
  "&:before": {
    display: "none"
  },
  backgroundColor:
    theme.palette.mode === "dark" ? "#f8f8f8" : "#f8f8f8"
})
);
const Goals = () => {
    const [expanded, setExpanded] = useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <div className="main_gl">
    <div className="main_subset1_gl">
        <div className="sub1_gl">
      
    <div className="hd_gl"><span>ABOUT US</span></div>
    <div className="desc_gl"><h2>Connecting people around the world.</h2></div>
    <div className="para_gl_sub1"><p>Our team can add creativity to your project, whether that means taking inspiration from the local environment or making your dream home as functional as it is stunning.</p></div>
    <div className="Accordion_gl">
        <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary 
        style={{padding:0,  '@media only and screen (max-width: 767px)': {
        width: '100%',},
        width: '87%'} }
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         
        >
          <Typography ><h4>Developing award-winning designs</h4></Typography>
        </AccordionSummary>
        <AccordionDetails
         style={{padding:0,
         marginTop:15,
         marginBottom:15,
         width:'490px'
         }}>
    
          <Typography style={{  fontSize: 0.95+'rem',
         lineHeight: 1.5+'rem',letterSpacing: 0.035+'em'}}>
         Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data in the digital world.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
             style={{padding:0,  '@media only and screen (max-width: 767px)': {
        width: '100%',},
        width: '87%',} }
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4>Smart design process and applications</h4></Typography>
        </AccordionSummary>
        <AccordionDetails style={{padding:0,
         marginTop:15,
         marginBottom:15,
         width:'490px'
         }}>
          <Typography style={{  fontSize: 0.95+'rem',
         lineHeight: 1.5+'rem',letterSpacing: 0.035+'em'}}>
           Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data in the digital world.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
     style={{padding:0, 
        width: '87%' ,'@media only and screen (max-width: 767px)': {
        width: '100%',} }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4>Tailor-made architecture and interior solutions</h4></Typography>
        </AccordionSummary>
        <AccordionDetails style={{padding:0,
         marginTop:15,
         marginBottom:15,
         width:'490px'
         }}>
          <Typography style={{  fontSize: 0.95+'rem',
         lineHeight: 1.5+'rem',letterSpacing: 0.035+'em'}}>
          Hub IT allows your business and technology computers to store, transmit, analyze, and manipulate big data in the digital world.
          </Typography>
        </AccordionDetails>
      </Accordion>
  
        </div>
        </div>
        <div className="sub2_gl">
            <img src="	https://arcstudio.liquid-themes.com/wp-content/uploads/2022/04/1.jpg" />
            </div>
    </div>
    <div className="main_subset2_gl">
    <div className="sub2_gl">
            <img src="	https://arcstudio.liquid-themes.com/wp-content/uploads/2022/04/2.jpg" />
            </div>
        <div className="sub1_gl">
      
    <div className="hd_gl"><span>ABOUT US</span></div>
    <div className="desc_gl"><h2>Empowering the architecture industry</h2></div>
    <div className="para_gl_sub1"><p>As a leading digital agency in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with. We create brand identities, digital experiences, and print materials that communicate clearly achieve marketing goals, and look fantastic.</p></div>
</div>

    </div>
    <div className="main_subset3_gl">
  
        <div className="sub1_gl">
      
    <div className="hd_gl"><span>ABOUT US</span></div>
    <div className="desc_gl"><h2>We are committed to equity in access to housing.</h2></div>
    <div className="para_gl_sub1"><p>Handel Architects is at the forefront of urban senior living. We understand how to optimize a senior housing program for high-rise construction, and we’re able to leverage our hospitality and interiors experience to create communities with vibrant communal spaces.</p></div>

</div>
  <div className="sub2_gl">
            <img src="	https://s3-us-west-2.amazonaws.com/handel-architects/images/_regular/01.092.11.003.jpg" />
            </div>

    </div>
    <div className="main_subset4_gl">
    <div className="sub2_gl">
            <img src="	https://arcstudio.liquid-themes.com/wp-content/uploads/2022/04/2.jpg" />
            </div>
        <div className="sub1_gl">
      
    <div className="hd_gl"><span>ABOUT US</span></div>
    <div className="desc_gl"><h2>Empowering the architecture industry</h2></div>
    <div className="para_gl_sub1"><p>As a leading digital agency in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with. We create brand identities, digital experiences, and print materials that communicate clearly achieve marketing goals, and look fantastic.</p></div>
</div>

    </div>
    </div>
  )
}

export default Goals