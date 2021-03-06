import React from 'react';

const ManageProduct = ({ service, refetch }) => {
    const { _id, name, price, quantity, description, rate, available, img,setDeleting } = service;
    const deleteOrder = (id) => {
        console.log(id)

        fetch(`https://desolate-hamlet-69672.herokuapp.com/data/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                window.location.reload()


            });
    };
    return (

        <div class="card w-50 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {name}
                    <div class="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <p> Available:{available}</p>
                <p>Price : ${price}</p>
                <div class="card-actions justify-end">
                    
                    <button onClick={() => deleteOrder(_id)} class="btn btn-error">Delete</button>

                </div>
            </div>




        </div>




    );
};

export default ManageProduct;