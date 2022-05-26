import React from 'react';
import Person from '../../Images/Person1.png';
import Business from '../../Images/business1.jpg';
import Project from '../../Images/Project.png'

const BusinessParts = () => {
    return (
        <div className='container' style={{marginTop:'100px'}}>
            <h3 className='text-2xl font-bold text-red-900 text-center'>Your Business Our Trust</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <img style={{height:'100px',width:'100px'}}src={Person} alt=""/>
                    <p>500k+ Happy clients</p>
                    <div class="card-actions justify-end">
                        
                    </div>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                <img  style={{height:'100px',width:'100px'}}src={Business} alt=""/>
                    <p>20 + countries</p>
                    <div class="card-actions justify-end">
                       
                    </div>
                </div>
            </div><div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                <img style={{height:'100px',width:'100px'}} src={Project} alt=""/>
                    <p>500+ projects</p>
                    <div class="card-actions justify-end">
                        
                    </div>
                </div>
            </div>

        </div>

        </div>
        
    );
};

export default BusinessParts;