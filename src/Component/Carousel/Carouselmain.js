import React from 'react'

function Carouselmain(props) {
  return (
    <div className="item w-100">
    <div className={"row " + (props.pos!=0? "d-flex flex-row-reverse" : "")}>
       <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="artwork-img">
             <img src={props.img} className="img-fluid" />
          </div>
       </div>
       <div className="col-lg-6 col-md-12 col-sm-12 text-left">
       <div className={props.pos!=0?"pl-5":"pr-5"}>
       <div className="artwork-content">
          <div className="artwork-title">
             <h1>{props.title}</h1>
          </div>
          <div className="artwork-notes">
             <p>
             {props.content}
                <br />
                and communication, content is the information and
                experiences that are directed toward an end-user or
                audience.
             </p>
          </div>
          <div className="artwork-button">
             <button className="btn-primary btn">{props.btntext}</button>
          </div>
       </div>
          </div>
       </div>
    </div>
 </div>
       
        
         
  )
}

export default Carouselmain