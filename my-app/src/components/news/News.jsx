import React from 'react'
import './news.css'
import CardItems from '../cardItems/CardItems'
const News = () => {
  return (
    <div className="news_section">
    <div className="upper_section">
        <div className="heading">
        <div className="heading1">
        Latest 
        </div>
        <div className="heading2">
        -Posts
        </div>
        
        </div>
        <div className="sub_heading">
    <p>As the complexity of buildings to increase, the field of architecture became multi-disciplinary with technological expertise and discpline.</p>
        </div>
        </div>
        <div className="maincard" >
<div className="subcard">
<div className="card1" >
    <CardItems/>
     </div>
     <div className="card2" >
        <CardItems/>
        </div>
       </div>
       <div className="card3" >
           <CardItems/>
           </div>
    </div>
    </div>
  )
}

export default News