"use client";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import axios from "axios";
import { useForm } from "react-hook-form";
import Loading from "@/app/(dashboard)/admin/components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { categories } from "@/constant";
import { nanoid } from "nanoid";
const EditBox = ({ setIsEditOpen, isEditOpen, dataToEdit }) => {
  const [isOpenNewField, setIsOpenNewField] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, watch, setValue } = useForm({
    defaultValues: {
      type: dataToEdit.type.trim(),
      stared: dataToEdit.stared.trim(),
    },
  });

  ///////// remove data 👨‍🔧👨‍🔧👨‍🔧///////
  const removeWorks = (id) => {
    setLoading(!loading);
    axios
      .delete(`${process.env.NEXT_PUBLIC_BASE_URL}/work/${id}`)
      .then(() => {
        setLoading(false);
        setIsEditOpen(!isEditOpen);
        location.reload();
        toast.success("successfully  removed");
      })
      .catch((err) => {
        setLoading(false);
        toast.warning(err);
      });
  };

  ////// edit works 🤡🤡🤡///////

  const editWork = (e) => {
    e.preventDefault();
    const id = dataToEdit._id;
    setLoading(!loading);
    axios
      .patch(`${process.env.NEXT_PUBLIC_BASE_URL}/work/${id}`, watch())
      .then(() => {
        setIsEditOpen(!isEditOpen);
        location.reload();
        setLoading(false);
        toast.success("successfully updated");
      })
      .catch((err) => {
        setLoading(false);
        toast.warning(err);
      });
  };
  const handleSelectChange = (event) => {
    const value = event.target.value;
    if (value === "custom") {
      setValue("type", null);
      setIsOpenNewField(true);
    }
  };
  console.log(watch());
  return (
    <>
      <div
        onClick={() => setIsEditOpen(!isEditOpen)}
        className={` fixed top-0 right-0 left-0 bottom-0 m-auto bg-black opacity-50`}
      ></div>
      <div
        className={`${
          isEditOpen ? `` : `hidden`
        } bg-white fixed top-0 right-0 left-0 bottom-0 m-auto md:w-[30%] w-[95%] h-fit  rounded-xl`}
      >
        <div className="p-5">
          <div
            onClick={() => setIsEditOpen(!isEditOpen)}
            className="opacity-50 hover:bg-gray-300 w-fit p-1 rounded-full cursor-pointer"
          >
            <CloseIcon />
          </div>
          <div className="p-2 border w-full h-[220px] mt-2 rounded-xl flex items-center justify-center">
            {
              <Image
                src={dataToEdit.image}
                alt="edit"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-xl"
              />
            }
          </div>
          <div className="p-2">
            <form onSubmit={(e) => editWork(e)} className="my-2  w-full">
              <div className="w-full flex flex-col items-center justify-center">
                {!isOpenNewField && (
                  <select
                    {...register("type", {
                      required: "you to specify the category",
                    })}
                    onChange={handleSelectChange}
                    className="bg-white border p-3 rounded-lg w-full"
                  >
                    {categories.map((item) => (
                      <option key={nanoid()} value={item}>
                        {item}
                      </option>
                    ))}
                    <option value="custom">add new category</option>
                  </select>
                )}

                {isOpenNewField && (
                  <>
                    <label className="ml-2 text-left w-full text-sm font-semibold text-gray-600">
                      Add new category :
                    </label>
                    <input
                      className="bg-white border p-3 mt-2 rounded-lg w-full"
                      placeholder="Add new category"
                      type="text"
                      {...register("type")}
                    />
                  </>
                )}
                <select
                  {...register("stared", {
                    required: "you have to whether it is stared or not",
                  })}
                  className="bg-white border p-3 rounded-lg w-full my-2"
                >
                  <option value="false">Not stared ✖️</option>
                  <option value="true"> Stared ⭐</option>
                </select>
                <div className="flex justify-between w-full mt-4">
                  <div
                    onClick={() => removeWorks(dataToEdit._id)}
                    className="px-5 flex items-center justify-center py-3 w-[150px] font-medium border  cursor-pointer hover:bg-blue-400 hover:text-white rounded-xl"
                  >
                    Remove
                  </div>
                  <button className="px-5 py-3 w-[150px] font-medium bg-blue-500 text-white rounded-xl">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
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
      {loading && <Loading />}
    </>
  );
};

export default EditBox;
