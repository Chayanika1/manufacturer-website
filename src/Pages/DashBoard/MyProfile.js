import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Spinner from '../Spinner/Spinner';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()
    const [datas, setDatas] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/profile/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setDatas(data));
    }, [user]);

    if (loading) {
        return <Spinner></Spinner>
    }

    console.log(datas);

    const navigateEdit = () => {
        navigate('/DashBoard/EditProfile')
    }

    return (
        <div>
            <div className="text-center">
            <div className="w-1/2">
                <img className="w-1/4 mx-auto rounded-full" src={datas[0]?.img} alt="" />
                <h1>user id: {datas[0]?._id}</h1>
                <h1>email: </h1>
                <h1>user role: {datas[0]?.role}</h1>
                <h1>user id: {datas[0]?.phone}</h1>
                <h1>user id: {datas[0]?.linkdin}</h1>
                <h1>user id: {datas[0]?.facebook}</h1>
                <div>
                    <button onClick={navigateEdit} className="btn btn-primary px-20 mt-10">Edit</button>
                </div>
            </div>
        </div>
        </div>
        
    );
};



export default MyProfile;