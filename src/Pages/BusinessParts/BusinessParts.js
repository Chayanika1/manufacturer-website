import React from 'react';
import Person from '../../Images/Person1.png';
import Business from '../../Images/business1.jpg';
import Project from '../../Images/Project.png'
import './BusinessParts.css';
const BusinessParts = () => {
    return (
        <div className='container' style={{ marginTop: '100px' }} id="cont">
            <h3 className='text-2xl font-bold text-red-900 text-center' id="head">Your Business Our Trust</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 'id="gap">
                <div class="card  bg-base-100 shadow-xl " style={{ width: '75%' }}>
                    <div class="card-body">
                        <img style={{ height: '100px', width: '100px', marginLeft: '40%' }} src={Person} alt="" />
                        <p className='text-2xl text-center text-red-700'>500k+ Happy clients</p>
                        <div class="card-actions justify-end">

                        </div>
                    </div>
                </div>
                <div class="card  bg-base-100 shadow-xl" style={{ width: '75%' }}>
                    <div class="card-body">
                        <img style={{ height: '100px', width: '100px', marginLeft: '40%' }} src={Business} alt="" />
                        <p className='text-2xl text-center text-green-900'>20 + countries</p>
                        <div class="card-actions justify-end">

                        </div>
                    </div>
                </div><div class="card  bg-base-100 shadow-xl" style={{ width: '75%' }}>
                    <div class="card-body">
                        <img style={{ height: '100px', width: '100px', marginLeft: '40%' }} src={Project} alt="" />
                        <p className='text-2xl text-center text-sky-900'>500+ projects</p>
                        <div class="card-actions justify-end">

                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default BusinessParts;