import React from 'react';
import Mypic from '../../Images/mypic.jpg';
import Education from '../../Images/Education.png'

const Portfolio = () => {
    return (
        <div className='container'>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img  src={Mypic} alt="Album" /></figure>
                <div class="card-body mx-auto">
                    <h2 class="card-title mx-auto">CHAYANIKA CHAKRABORTY</h2>
                    <p>FrontEnd Developer, Electronics Engineer
                    Hello I am chayanika.I am from India.I am a quick Learner, self Motivated person.
                        I love to learn new things. I love coding.I love travelling. I also love painting and gardening.
                        Actually this is my hobby. I am a pet lover.
                    </p>
                </div>
            </div>
              <h3 style={{marginTop:'30px'}}>EDUCATION</h3>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' style={{marginTop:'70px'}}>
             <div class="card w-96 bg-primary text-primary-content"style={{width:'50%'}}>
                <div class="card-body">
                    <img style={{height:'50px',width:'50px',borderRadius:'50%',marginLeft:'40%'}} src={Education} alt=""/>
                    
                    <p>WestBengal Board Of Secondary Education </p><br/>
                    <p>From</p><br/>
                    <p>Tarasundari Balika Vidya Bhaban</p>

                    
                </div>
            </div>
            <div class="card  bg-primary text-primary-content" style={{width:'50%'}}>
                <div class="card-body">
                <img style={{height:'50px',width:'50px',borderRadius:'50%',marginLeft:'40%'}} src={Education} alt=""/>
                <p>WestBengal Board Of Higher Secondary Education </p><br/>
                    <p>From</p><br/>
                    <p>Santragachi Kedarnath Institutions For Girls</p>
                    
                </div>
            </div>
            <div class="card w-96 bg-primary text-primary-content"style={{width:'50%'}}>
                <div class="card-body">
                <img style={{height:'50px',width:'50px',borderRadius:'50%',marginLeft:'40%'}} src={Education} alt=""/>
                     <p>Batchilor of Technology in Electronics and Comunication Engineering</p><br/>
                    <p>From</p><br/>
                    <p>Supreme Knowledge Foundation Group Of Institutions </p>
                    
                </div>
            </div>

             </div>
              <h4 style={{marginTop:'30px'}}>Skills</h4>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4' style={{marginTop:'30px'}}>
              <button class=" btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"style={{width:'50%'}}>HTML</button>
              <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"style={{width:'50%'}}>CSS</button>
              <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"style={{width:'50%'}}>JS</button>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4'>
              <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"style={{width:'50%'}}>BOOTSTRAP</button>
              <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"style={{width:'50%'}}>TAILWIND</button>
              <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"style={{width:'50%'}}>REACT JS</button>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"style={{width:'50%'}}>NODE JS</button>
              <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"style={{width:'50%'}}>MONGO DB</button>
              
              </div>
        </div>
    );
};

export default Portfolio;