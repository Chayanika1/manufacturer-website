import React from 'react';
import Feedback from '../../src/Images/Feedback.jpg'

const Extra = () => {
    return (
        <div >
            <div class="card lg:card-side bg-base-100 shadow-xl className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4' ">
                <figure><img src={Feedback} style={{ height: '200px', width: '500px' }} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Write Your Feedback</h2>
                    <input type="text" placeholder="Your Name" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" placeholder="Your FeedBack" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" placeholder="FeedBack here" class="input input-bordered input-lg w-full max-w-xs" />
                    <div class="card-actions ">
                        <button class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Extra;