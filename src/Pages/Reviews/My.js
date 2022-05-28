import React, { useEffect, useState } from 'react';
import AllReview from '../AllReview/AllReview';

const My = () => {
    const[reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('https://desolate-hamlet-69672.herokuapp.com/review')
        .then(response=>response.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='container'>
            <h2 style={{textAlign:'center',marginTop:'30px'}} className="text-2xl">CUSTOMER REVIEWS</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' style={{textAlign:'center'}}>
            {
                reviews.map( review=><AllReview review={review}></AllReview>)
            }

            </div>
            
            
        </div>
    );
};

export default My;