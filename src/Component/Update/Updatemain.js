import React from 'react'
import Updatemap from './Updatemap'

function Updatemain(props) {
    return (
        <>
        
        <div class="col-lg-4">
        <div class="item">
        <a href="artfaitlistdetal-b-login.html">
           <div class="art-text">            
                    <img src={props.imgsrc} alt="" />
                    <div class="feature-text" style={{color:"#000", textDecoration:"none", border:"none"}}>
                        <div class="d-flex justify-content-between">
                            <h3>{props.content}</h3>
                        </div>
                        <h5>{props.date}</h5>
                    </div>
                </div>
            </a>
        </div>
    </div>
        </>

    )
}
export default Updatemain


