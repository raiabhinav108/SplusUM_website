
import React from 'react'
import './cardItems.css'
const CardItems = (props) => {



  return (
    <div className="card" >
    <div className="card_body">

        
        <div className="cardimage">
        <img src="https://arcstudio.liquid-themes.com/wp-content/uploads/2020/09/post-1-700x450.jpg" class="post_img" alt=""  data-src="https://arcstudio.liquid-themes.com/wp-content/uploads/2020/09/post-1-700x450.jpg" />
        </div>
        <div className="card_info">
         
       
        <div className="card_time">
       <span>2 years ago</span>
        </div>
        <div className="card_title">
       Utilizing wood in architecture
        </div>
        <div className="card_desc">
       Through a unique line combination of engineering, construction and design disciplines and expertise.
        </div>
        </div>        
    </div>
    </div>
  )
}

export default CardItems