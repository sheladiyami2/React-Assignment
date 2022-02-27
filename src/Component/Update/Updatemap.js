import React, {useState} from 'react'
import Udata from './Udata.json'
import Updatemain from './Updatemain'

function Updatemap () {
    
    const [len, setLen] = useState(3);
 

 function show() {
     /* eslint-disable no-unused-expressions */
    len!=3 ? setLen(3): setLen(Udata.length); 

}

    return(
      <>
      <div class="container-fluid  ">
      <div class="feature-all">
         <div class="featured-content">
            <h2>Updates
            </h2>
         </div>
         <div class="view-all">
            <a href="artfaitlist-b-login.html">View all</a>
         </div>
      </div>
   </div>
   <div className="container-fluid " id="update">
   <div className="row ">
        {   
            Udata.slice(0,len).map((val,index)=>{
           return(              
             <Updatemain 
             id={index}
              imgsrc={val.imgsrc}
              content={val.content}
              date={val.date}
             />
    )})
            }       
            </div>
            </div>

            <div class="view-all-wrapper">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12 text-center border-top">
                     <p style={{cursor:"pointer"}} onClick={show}>{ len!=3 ? "View Less":"View More"}</p> 
                  </div>
               </div>
            </div>
         </div>

            </>
        
)
}

export default Updatemap