import styles from "./OurServices.module.css";

import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

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


const OurServices = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  return (
    
    <div className={styles.OurServicesParent}>
      <div>
        <div className={styles.smallOurServices}>Our Services</div>
        <div className={styles.horizontalrule}></div>
      </div>
      <div className={styles.mid}>
        <div className={styles.writtenpart}>
          <div className={styles.Headingpart}>
            <h2>Functional</h2>
            <h2>-Spaces</h2>
          </div>
          <div className={styles.Contentpart}>
          <p>Through a unique combination of engineering, construction and design disciplines and expertise, Concor delivers world class infrastructure solutions to customers and stakeholders </p>

            <div className={styles.buttonParent}>
            <button className='cont_btn'></button>
            </div>
          </div>
        </div>
        <div className={styles.Accordion}>
        <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
        style={{padding:0}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         
        >
          <Typography ><h4>Structural architecture</h4></Typography>
        </AccordionSummary>
        <AccordionDetails
         style={{padding:0,
         marginTop:15,
         marginBottom:15,
         }}>
    
          <Typography style={{  fontSize: 0.95+'rem',
         lineHeight: 1.5+'rem',letterSpacing: 0.035+'em'}}>
          Urban design draws together the many strands of place-making, environmental stewardship, social equity and economic viability into the creation of places with distinct beauty and identity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
        style={{padding:0}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4>Residence</h4></Typography>
        </AccordionSummary>
        <AccordionDetails style={{padding:0,
         marginTop:15,
         marginBottom:15,
         }}>
          <Typography style={{  fontSize: 0.95+'rem',
         lineHeight: 1.5+'rem',letterSpacing: 0.035+'em'}}>
          Urban design draws together the many strands of place-making, environmental stewardship, social equity and economic viability into the creation of places with distinct beauty and identity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
        style={{padding:0}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4>Award-winning Architecture</h4></Typography>
        </AccordionSummary>
        <AccordionDetails style={{padding:0,
         marginTop:15,
         marginBottom:15,
         }}>
          <Typography style={{  fontSize: 0.95+'rem',
         lineHeight: 1.5+'rem',letterSpacing: 0.035+'em'}}>
          Urban design draws together the many strands of place-making, environmental stewardship, social equity and economic viability into the creation of places with distinct beauty and identity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
        style={{padding:0}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><h4>Renovation</h4></Typography>
        </AccordionSummary>
        <AccordionDetails style={{padding:0,
         marginTop:15,
         marginBottom:15,
         }}>
          <Typography style={{  fontSize: 0.95+'rem',
         lineHeight: 1.5+'rem',letterSpacing: 0.035+'em'}}>
          Urban design draws together the many strands of place-making, environmental stewardship, social equity and economic viability into the creation of places with distinct beauty and identity.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
