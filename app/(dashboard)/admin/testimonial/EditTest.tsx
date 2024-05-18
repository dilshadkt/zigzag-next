"use client";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "@/app/(dashboard)/admin/components/Loading";
import ImagePicker from "../components/shared/ImagePicker";
interface Props {
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  testimonial: Client;
  setData: React.Dispatch<Data[]>;
}

interface Data {
  photos: string;
  name: string;
  description: string;
  designation: string;
  _id: string;
  color: string;
  role: string;
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
const EditTest = ({ isEdit, setIsEdit, testimonial, setData }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | File>(
    testimonial.photos
  );
  const { register, watch } = useForm({
    defaultValues: {
      name: testimonial?.name,
      description: testimonial.description,
      designation: testimonial.designation,
      role: testimonial.role,
      color: testimonial.color,
    },
  });
  const remove = (id: any) => {
    setIsLoading(!isLoading);
    axios
      .delete(`${process.env.NEXT_PUBLIC_BASE_URL}/testimonial/${id}`)
      .then((res) => {
        setIsLoading(false);
        setData(res.data.testimonials);
        setIsEdit(false);
        setTimeout(() => {
          toast.success("successfully removed");
        }, 800);
      })
      .catch((err) => toast.success("failed to remove"));
  };
  const updateClients = (id: any) => {
    setIsLoading(!isLoading);
    const formData = new FormData();
    if (typeof currentImage === "object") {
      formData.append("photos", currentImage);
    }
    formData.append("updation", JSON.stringify(watch()));
    axios
      .patch(`${process.env.NEXT_PUBLIC_BASE_URL}/testimonial/${id}`, formData)
      .then((res) => {
        setIsLoading(false);
        setData(res.data.testimonials);
        setTimeout(() => {
          setIsEdit(false);
        }, 800);
        toast.success("successfully updated");
      })
      .catch((err) => {
        toast.success("failed to update");
      });
  };
  return (
    <>
      <div
        onClick={() => setIsEdit(!isEdit)}
        className={` fixed top-0 right-0 left-0 bottom-0 m-auto bg-black opacity-50`}
      ></div>
      <div className="fixed top-0 right-0 left-0 bottom-0 m-auto md:w-[35%] w-[95%] md:h-[90%] md:overflow-scroll bg-white h-fit rounded-xl p-3">
        <div
          onClick={() => setIsEdit(!isEdit)}
          className="opacity-50 p-1 cursor-pointer hover:bg-gray-300 rounded-full w-fit"
        >
          <CloseIcon />
        </div>
        <div className="p-2 border h-[220px] rounded-xl my-2">
          <ImagePicker
            image={testimonial.photos}
            setCurrentImage={setCurrentImage}
          />
        </div>
        <div className="my-3">
          <input
            {...register("name")}
            type="text"
            placeholder={testimonial?.name}
            className="border bg-white w-full p-3 rounded-xl "
          />
          <textarea
            {...register("description")}
            placeholder={testimonial?.name}
            className="border bg-white w-full p-3 rounded-xl mt-2 "
          />
          <input
            {...register("designation")}
            type="text"
            placeholder={testimonial?.designation}
            className="border bg-white w-full p-3 rounded-xl "
          />
          <input
            {...register("role")}
            type="text"
            placeholder={testimonial?.role}
            className="border bg-white w-full p-3 rounded-xl my-2 "
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
