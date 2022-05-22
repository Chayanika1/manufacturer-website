import React, { useEffect, useState } from 'react';
import AllReview from '../AllReview/AllReview';

const Reviews = () => {
    const[reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('review.json')
        .then(response=>response.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='container'>
            <div className='row'>
            {
                reviews.map( review=><AllReview review={review}></AllReview>)
            }

            </div>
            
            
        </div>
    );
};

export default Reviews;