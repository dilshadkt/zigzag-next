"use client";
import Loading from "@/app/(dashboard)/admin/components/Loading";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImagePicker from "../components/shared/ImagePicker";

const EditExpert: React.FC<EditExpertProps> = ({
  expert,
  setIsEdit,
  isEdit,
  setData,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | File>(
    expert?.image as string
  );
  const { register, watch } = useForm({
    defaultValues: {
      name: expert?.name ?? "",
      role: expert?.role ?? "",
      image: "",
    },
  });
  const remove = (id: string | undefined) => {
    setIsLoading(!isLoading);
    axios
      .delete(`${process.env.NEXT_PUBLIC_BASE_URL}/experts/${id}`)
      .then((res) => {
        setIsLoading(false);
        setData(res.data.experts);
        setTimeout(() => {
          setIsEdit(false);
        }, 800);
        toast.success("successfully deleted");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.warning(err);
      });
  };

  const updateExperts = (id: string | undefined) => {
    const formData = new FormData();
    if (typeof currentImage === "object") {
      formData.append("photos", currentImage);
    }
    formData.append("name", watch().name);
    formData.append("role", watch().role);
    setIsLoading(!isLoading);
    axios
      .patch(`${process.env.NEXT_PUBLIC_BASE_URL}/experts/${id}`, formData)
      .then((res) => {
        setIsLoading(false);
        setData(res.data.experts);
        setTimeout(() => {
          setIsEdit(false);
        }, 800);
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
      <div className="fixed top-0 right-0 left-0 bottom-0 m-auto  md:w-[25%] w-[95%] bg-white h-fit rounded-xl p-3">
        <div
          onClick={() => setIsEdit(!isEdit)}
          className="opacity-50 p-1 cursor-pointer hover:bg-gray-300 rounded-full w-fit"
        >
          <CloseIcon />
        </div>
        <div className="p-2 border h-[220px] rounded-xl my-2">
          <ImagePicker
            image={expert?.image}
            setCurrentImage={setCurrentImage}
          />
        </div>
        <div className="my-3">
          <input
            {...register("name")}
            type="text"
            placeholder={expert?.name}
            className="border w-full bg-white p-3 rounded-xl "
          />
          <input
            {...register("role")}
            type="text"
            placeholder={expert?.role}
            className="border bg-white mt-3 w-full p-3 rounded-xl "
          />
        </div>
        <div className="flex  items-center justify-between w-full">
          <button
            onClick={() => remove(expert?._id)}
            className="border hover:bg-blue-500 hover:text-white  px-4 py-3 rounded-xl font-medium my-2"
          >
            Remove
          </button>
          <button
            onClick={() => updateExperts(expert?._id)}
            className="bg-blue-500 text-white px-4 py-3 rounded-xl font-medium my-2"
          >
            Save
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

export default EditExpert;
