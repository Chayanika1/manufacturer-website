import React from 'react';
import Banner1 from '../../Images/businessman-work-closeup-top-view-man-working-laptop.jpg';
import Banner2 from '../../Images/Banner2.jpg';
import Banner3 from '../../Images/Banner3.jpg';

const Banner = () => {
    return (
        <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img style={{height:'450px'}}src={Banner1} class="w-full"/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img style={{height:'450px'}}src={Banner2} class="w-full"/>  
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img style={{height:'450px'}}src={Banner3} class="w-full"/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img style={{height:'450px'}}src={Banner2} class="w-full"/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;