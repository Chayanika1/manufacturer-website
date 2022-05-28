import React, { useEffect, useState } from "react";
import Spinner from '../Spinner/Spinner';
import { useQuery } from "react-query";
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Adminorder from '../DashBoard/Adminorder';
import DeleteModal from "./DeleteModal";

const Manageorder = () => {
  const[deleting,setDeleting] = useState(null)

 const{data:orders,isLoading,refetch}= useQuery('orders',()=>fetch('https://desolate-hamlet-69672.herokuapp.com/order').then(res=>res.json()));

  if(isLoading){
      return <Spinner></Spinner>
  }
  return (
    <div>
      <h5>this is manage order</h5>
      <div className="mb-3 px-10">
        <h1 className="text-center text-3xl text-primary font-bold mb-10">
          Welcome to admin route
        </h1>
      </div>
      <div>
         <h3>All orders:{orders?.length}</h3>
      </div>
      <div class="overflow-x-auto">
                <table class="table w-full">
                   
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Product Name</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           orders?.map(user=><Adminorder
                           key={user._id}
                           setDeleting={setDeleting}
                           user={user} refetch={refetch}
                           
                           ></Adminorder>)
                       }
                    </tbody>
                </table>
            </div>
            {deleting && <DeleteModal></DeleteModal>}
    </div>
  );
};

export default Manageorder;