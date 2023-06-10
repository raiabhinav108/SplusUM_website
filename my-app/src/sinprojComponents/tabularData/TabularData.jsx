import React from 'react'
import './tabulardata.scss'

const TabularData = () => {
  return (
    <div className="tabledata">
        <div class="row">
  <div class="col">

    <div class="tabs">
      <div class="tab1">
   
        <label class="tab-label" >LOCATION &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Houston, United States</label>
     
      </div>
      <div class="tab1">
     
        <label class="tab-label" >CLIENT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Robert Downey Jr.</label>
  
      </div>
      <div class="tab">
        <input type="checkbox" id="chck3"></input>
        <label class="tab-label" for="chck3">YEAR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2020 - ONGOING</label>
        <div class="tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>
      <div class="tab1">
      
        <label class="tab-label" >STATUS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Construction</label>

      </div>
      <div class="tab">
        <input type="checkbox" id="chck5"></input>
        <label class="tab-label" for="chck5">PROGRAM &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Theatre</label>
        <div class="tab-content">
          <div className="program_tb">
          <div className="sub1_tb">Total </div>
          <div className="sub2_tb">9300 m.square</div>
          </div>
        </div>
      </div>
      <div class="tab1">

        <label class="tab-label" >PARTNER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jason Long</label>

      </div>
      <div class="tab1">

        <label class="tab-label" >PROJECT ARCHITECT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Roman Reigns</label>
   
      </div>
      <div class="tab">
        <input type="checkbox" id="chck8"></input>
        <label class="tab-label" for="chck8">TEAM</label>
        <div class="tab-content">
        <div className="team_tb">
          <div className="sub1_tb">Kashyap Rishi </div>
          <div className="sub2_tb">Mangalam Raj</div>
          </div>
        </div>
      </div>
      <div class="tab">
        <input type="checkbox" id="chck9"></input>
        <label  class="tab-label last" for="chck9">COLLABORATORS</label>
        <div style={{borderBottom:'1px solid black'}} class="tab-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
        </div>
      </div>

  
    </div>
  </div>

</div>
    </div>
  )
}

export default TabularData