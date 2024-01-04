"use client";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "@/app/(dashboard)/admin/components/Loading";
interface Props {
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  testimonial: Client;
}
interface Client {
  photos: string;
  name: string;
  description: string;
  designation: string;
  _id: string;
  color: string;
  role: string;
}
const EditTest = ({ isEdit, setIsEdit, testimonial }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, watch } = useForm({
    defaultValues: {
      name: testimonial?.name,
      description: testimonial.description,
      designation: testimonial.designation,
      role: testimonial.role,
      color: "",
    },
  });
  const remove = (id: any) => {
    setIsLoading(!isLoading);
    axios
      .delete(`https://zigzag.onrender.com/testimonial/${id}`)
      .then(() => {
        setIsLoading(false);
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  const updateClients = (id: any) => {
    setIsLoading(!isLoading);
    axios
      .patch(`https://zigzag.onrender.com/testimonial/${id}`, watch())
      .then(() => {
        setIsLoading(false);
        location.reload();
        toast.success("successfully updated");
      })
      .catch((err) => {
        console.log(err);
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
              src={testimonial?.photos}
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
            placeholder={testimonial?.name}
            className="border w-full p-3 rounded-xl "
          />
          <textarea
            {...register("description")}
            placeholder={testimonial?.name}
            className="border w-full p-3 rounded-xl mt-2 "
          />
          <input
            {...register("designation")}
            type="text"
            placeholder={testimonial?.designation}
            className="border w-full p-3 rounded-xl "
          />
          <input
            {...register("role")}
            type="text"
            placeholder={testimonial?.role}
            className="border w-full p-3 rounded-xl my-2 "
          />
          <div className="p-2 border rounded-xl flex justify-between">
            <input type="color" {...register("color")} />
            <h4>{watch().color}</h4>
          </div>
        </div>
        <div className="flex  items-center justify-between w-full">
          <button
            onClick={() => remove(testimonial?._id)}
            className="border hover:bg-blue-500 hover:text-white  px-4 py-3 rounded-xl font-medium my-2"
          >
            Remove
          </button>
          <button
            onClick={() => updateClients(testimonial?._id)}
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

export default EditTest;
