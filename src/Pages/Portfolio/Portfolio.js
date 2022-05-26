import React from 'react';
import Mypic from '../../Images/mypic.jpg';
import Education from '../../Images/Education.png'

const Portfolio = () => {
    return (
        <div className='container' style={{ maxWidth:'1200px', textAlign:'center',justifyContent:'center',marginLeft:'15%'}}>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img style={{ height: '600px' }} src={Mypic} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">CHAYANIKA CHAKRABORTY</h2>
                    <p>FrontEnd Developer, Electronics Engineer</p>
                    <p>Hello I am chayanika.I am from India.I am a quick Learner, self Motivated person.
                        I love to learn new things. I love coding.
                    </p>
                </div>
            </div>
              <h3 style={{marginTop:'30px'}}>EDUCATION</h3>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' style={{marginTop:'70px'}}>
             <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                    <img style={{height:'50px',width:'50px',borderRadius:'50%',marginLeft:'40%'}} src={Education} alt=""/>
                    
                    <p>WestBengal Board Of Secondary Education </p><br/>
                    <p>From</p><br/>
                    <p>Tarasundari Balika Vidya Bhaban</p>

                    
                </div>
            </div>
            <div class="card w-96 bg-primary text-primary-content">
                <div class="card-body">
                <img style={{height:'50px',width:'50px',borderRadius:'50%',marginLeft:'40%'}} src={Education} alt=""/>
                <p>WestBengal Board Of Higher Secondary Education </p><br/>
                    <p>From</p><br/>
                    <p>Santragachi Kedarnath Institutions For Girls</p>
                    
                </div>
            </div>
            <div class="card w-96 bg-primary text-primary-content">
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
              <button class="btn btn-primary">HTML</button>
              <button class="btn btn-primary">CSS</button>
              <button class="btn btn-primary">JS</button>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4'>
              <button class="btn btn-primary">BOOTSTRAP</button>
              <button class="btn btn-primary">TAILWIND</button>
              <button class="btn btn-primary">REACT JS</button>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
              <button class="btn btn-primary">NODE JS</button>
              <button class="btn btn-primary">MONGO DB</button>
              
              </div>
        </div>
    );
};

export default Portfolio;