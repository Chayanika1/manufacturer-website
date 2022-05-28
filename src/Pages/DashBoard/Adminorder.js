import React, { useState } from "react";

const Adminorder = ({ refetch, user, _id, order, quntity }) => {
  
  const { buyer, booking, paid, } = user
  const deleteOrder = (id) => {

    fetch(`https://desolate-hamlet-69672.herokuapp.com/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        refetch()

      });
  };

  return (
    <tr>
      <th>2</th>
      <td>{buyer}</td>
      <td>{booking}</td>
      <td>
        <div>
          <label for="my-modal-4" class="btn btn-xs btn-error">Delete</label>



          {paid ? (<p className=" ml-6 text-green-400 font-bold" > (Paid)</p>) : (<button onClick={() => deleteOrder(user?._id)} className="btn btn-xs px-6 bg-red-600 ml-5">delete</button>)}


        </div>


      </td>

    </tr >

  );
};

export default Adminorder;