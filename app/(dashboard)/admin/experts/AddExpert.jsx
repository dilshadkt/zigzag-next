"use client";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "@/app/(dashboard)/admin/components/Loading";
const AddExpert = ({ setIsAddExpertOpen, isAddExpertOpen }) => {
  const { register, watch } = useForm();
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);
  const addNewExperts = () => {
    setIsLoading(!isLoading);
    const data = new FormData();
    data.append("photos", image);
    data.append("name", watch().name);
    data.append("role", watch().role);
    axios
      .post("https://zigzag.onrender.com/experts", data)
      .then((res) => {
        setImage(res.data);
        setIsAddExpertOpen(!isAddExpertOpen);
        location.reload();
        setIsLoading(false);
        toast.success("successfully added");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.warning(err);
      });
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      setPreviewImg(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <>
      <div
        onClick={() => setIsAddExpertOpen(!isAddExpertOpen)}
        className={` fixed top-0 right-0 left-0 bottom-0 m-auto bg-black opacity-50`}
      ></div>
      <div className="fixed top-0 right-0 left-0 bottom-0 m-auto w-[25%] bg-white h-fit rounded-xl p-3">
        <div
          onClick={() => setIsAddExpertOpen(!isAddExpertOpen)}
          className="opacity-50 p-1 cursor-pointer hover:bg-gray-300 rounded-full w-fit"
        >
          <CloseIcon />
        </div>
        <div className="p-2 border h-[220px] rounded-xl my-2">
          <label
            className={`${
              image.length === 0 ? `flex` : `hidden`
            }  text-black flex opacity-30 cursor-pointer h-full  items-center justify-center p-1 rounded-full `}
          >
            <input
              {...register("photos")}
              type="file"
              className="hidden"
              name="photos"
              onChange={onImageChange}
            />
            <AddAPhotoIcon className="text-[100px]" />
          </label>

          {image.length !== 0 && (
            <div className="w-full h-full">
              <Image
                src={previewImg}
                alt="added image"
                width={150}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        <div className="my-3">
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="border bg-white w-full p-3 rounded-xl "
          />
          <input
            {...register("role")}
            type="text"
            placeholder="Role"
            className="border bg-white mt-3 w-full p-3 rounded-xl "
          />
        </div>
        <button
          onClick={() => addNewExperts()}
          className="bg-red-500 text-white px-4 py-2 rounded-xl font-medium my-2"
        >
          Add
        </button>
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

export default AddExpert;
