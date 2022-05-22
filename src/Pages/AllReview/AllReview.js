import React from 'react';

const AllReview = (props) => {
    const { name, img } = props.service;
    return (
        <div>
            <div class="col-lg-4 col-sm-12 g-4">
                
                
                
                <div class="col">
                    <div class="card h-100">
                        <img src={img} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{name}</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllReview;