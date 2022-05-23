import React from 'react';

const AllReview = (props) => {
    const {  img,name,comment,rate } = props.review;
    return (
        <div>
            <div class="col-lg-4 col-sm-12 g-4">
                
                
                
                
                <div class="col">
                    <div class="card h-100 shadow-xl" style={{marginTop:'100px'}}>
                        <div style={{textAlign:'center',marginLeft:'45%'}}>
                        <img  style={{ height:'60px',width:'60px'}}src={img} class="card-img-top" alt="..."/>

                        </div>
                        
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">{comment}</p>
                                <h5>Ratings:{rate}/10</h5>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllReview;