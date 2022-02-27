import React from 'react'
import Cdata from './Cdata.json'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carouselmain from "./Carouselmain";
import "./Carousel.css"

const Carouselmap = () =>{
    return(

        <div className="carousel-wrapper mt-5 pt-5">
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} interval={3000} autoPlay ={true} stopOnHover={false} transitionTime={1000}>
             {   
                Cdata.map((val,index)=>{
                    return(              
                      <Carouselmain 
                      id={index}
                       img={val.img}
                       content={val.content}
                       title={val.title}
                       btntext={val.btntext}
                       pos={index}
                      />
             )})
                    }
                   
        </Carousel>
    </div>
       

    )
}

export default Carouselmap