import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditProfile = () => {
  const { id } = useParams();
  console.log(id);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const users = { ...data, img: imgUrl };
    fetch(`http://localhost:5000/profile/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.success("successfully done");
    reset();
  };

  const [imgUrl, setImgUrl] = useState("");

  //imgbb

  const handelImagUpload = (e) => {
    const image = e.target.files[0];

    const fromData = new FormData();
    fromData.set("image", image);
    axios
      .post(
        "https://api.imgbb.com/1/upload?key=c41b5fa5bb7a5e365ff9532690613577",
        fromData
      )
      .then((res) => {
        setImgUrl(res.data.data.display_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(imgUrl);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="linkdin account"
          className="input input-bordered mt-2 w-2/4"
          {...register("linkdin")}
        />

        <br />
        <input
          placeholder="facebook account"
          className="input input-bordered mt-2 w-2/4"
          {...register("facebook")}
        />
        <br />
        <input
          placeholder="name"
          className="input input-bordered mt-2 w-2/4"
          {...register("name")}
        />

        <br />
        <input
          type="file"
          placeholder="imgae"
          className="input input-bordered mt-2 w-2/4"
          {...register("img")}
          onChange={handelImagUpload}
        />
        <br />
        <input
          placeholder="phone number"
          className="input input-bordered mt-2 w-2/4"
          type="number"
          {...register("phone")}
        />
        <br />
        <input
          placeholder="age"
          className="input input-bordered mt-2 w-2/4"
          type="number"
          {...register("age")}
        />
        <br />
        <input className=" px-20 btn btn-primary mt-8" type="submit" />
      </form>
    </div>
  );
};

export default EditProfile;