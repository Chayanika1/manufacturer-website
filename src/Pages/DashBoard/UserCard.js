import React from 'react';

const UserCard = ({ user }) => {
    const{email}=user;
    //console.log(user)
    const makeAdmin =()=>{
        fetch(`http://localhost:5000//user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        res.json()
      })
      .then((data) => {
         console.log(data)
        }
      );
        
    }
    return (




        <tr>
            <th>2</th>
            <td>{email}</td>
            <td><button onClick={makeAdmin} class="btn btn-xs">Make Admin</button></td>
            <td><button class="btn btn-xs btn-error">Remove</button></td>
        </tr>



    );
};

export default UserCard;