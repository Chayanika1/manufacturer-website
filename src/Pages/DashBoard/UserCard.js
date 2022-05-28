import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const UserCard = ({ user, refetch }) => {
  const { email, role } = user;
  //console.log(user)
  const makeAdmin = () => {
    fetch(`https://desolate-hamlet-69672.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => {
        if (res.status === 403) {
          toast.error('failed to make admin')
        }
        return res.json()
      })
      .then((data) => {

        if (data.modifiedCount > 0) {
          refetch();
          toast.success("successfully made an admin")

        }
      }
      );

  }
  return (

    <tr>
      <th>2</th>
      <td>{email}</td>
      <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
      <td><button class="btn btn-xs btn-error">Remove</button></td>
      <ToastContainer />
    </tr>












  );
};

export default UserCard;