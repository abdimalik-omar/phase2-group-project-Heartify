import React from "react";
import Slide1 from '../assets/images/Slide1.webp'
import Slide2 from '../assets/images/Slide2.webp'
import Slide3 from '../assets/images/Slide3.webp'
export default function Carousel(){
    return(
        <>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Slide1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Slide2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Slide3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}