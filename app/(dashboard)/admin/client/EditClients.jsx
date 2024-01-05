"use client";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "@/app/(dashboard)/admin/components/Loading";
const EditClients = ({ isEdit, setIsEdit, clients }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, watch } = useForm({
    defaultValues: {
      name: clients.name,
    },
  });
  const remove = (id) => {
    setIsLoading(!isLoading);
    axios
      .delete(`https://zigzag.onrender.com/clients/${id}`)
      .then(() => {
        setIsLoading(false);
        location.reload();
        toast.success("successfully removed");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.warning(err);
      });
  };
  const updateClients = (id) => {
    setIsLoading(!isLoading);
    axios
      .patch(`https://zigzag.onrender.com/clients/${id}`, watch())
      .then(() => {
        setIsLoading(false);
        location.reload();
        toast.success("successfully updated");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.warning(err);
      });
  };
  return (
    <>
      <div
        onClick={() => setIsEdit(!isEdit)}
        className={` fixed top-0 right-0 left-0 bottom-0 m-auto bg-black opacity-50`}
      ></div>
      <div className="fixed top-0 right-0 left-0 bottom-0 m-auto w-[25%] bg-white h-fit rounded-xl p-3">
        <div
          onClick={() => setIsEdit(!isEdit)}
          className="opacity-50 p-1 cursor-pointer hover:bg-gray-300 rounded-full w-fit"
        >
          <CloseIcon />
        </div>
        <div className="p-2 border h-[220px] rounded-xl my-2">
          <div className="w-full h-full">
            <Image
              src={clients.image}
              alt="added image"
              width={150}
              height={150}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="my-3">
          <input
            {...register("name")}
            type="text"
            placeholder={clients.name}
            className="border w-full p-3 rounded-xl "
          />
        </div>
        <div className="flex  items-center justify-between w-full">
          <button
            onClick={() => remove(clients._id)}
            className="border hover:bg-blue-500 hover:text-white  px-4 py-3 rounded-xl font-medium my-2"
          >
            Remove
          </button>
          <button
            onClick={() => updateClients(clients._id)}
            className="bg-red-500 text-white px-4 py-3 rounded-xl font-medium my-2"
          >
            Edit
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {isLoading && <Loading />}
    </>
  );
};

export default EditClients;
