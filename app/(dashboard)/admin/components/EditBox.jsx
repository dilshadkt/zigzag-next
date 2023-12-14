import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import axios from "axios";
import { useForm } from "react-hook-form";
const EditBox = ({ setIsEditOpen, isEditOpen, dataToEdit }) => {
  const { register, watch } = useForm();
  console.log(watch());
  ///////// remove data 👨‍🔧👨‍🔧👨‍🔧///////
  const removeWorks = (id) => {
    axios
      .delete(`http://localhost:8080/work/${id}`)
      .then(() => {
        setIsEditOpen(!isEditOpen);
        location.reload();
      })
      .catch((err) => err);
  };

  ////// edit works 🤡🤡🤡///////

  const editWork = (id) => {
    axios
      .patch(`http://localhost:8080/work/${id}`, watch())
      .then(() => {
        setIsEditOpen(!isEditOpen);
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div
        className={` fixed top-0 right-0 left-0 bottom-0 m-auto bg-black opacity-50`}
      ></div>
      <div
        className={`${
          isEditOpen ? `` : `hidden`
        } bg-white fixed top-0 right-0 left-0 bottom-0 m-auto w-[30%] h-fit  rounded-xl`}
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
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-xl"
              />
            }
          </div>
          <div className="p-2">
            <form onSubmit={() => editWork(dataToEdit._id)} className="my-2">
              <div className="w-full flex flex-col items-center justify-center">
                <select
                  {...register("type", {
                    required: "you to specify the category",
                  })}
                  className="border p-3 rounded-lg w-[250px]"
                >
                  <option value="Brand Identity">Brand Identity</option>
                  <option
                    value="Social Media
"
                  >
                    Social Media
                  </option>
                </select>

                <select
                  defaultValue={dataToEdit.stared === "true" ? "true" : "false"}
                  {...register("stared", {
                    required: "you have to whether it is stared or not",
                  })}
                  className="border p-3 rounded-lg w-[250px] my-[5%]"
                >
                  <option value="false">Not stared ✖️</option>
                  <option value="true"> Stared ⭐</option>
                </select>
                <div className="flex justify-between w-full">
                  <div
                    onClick={() => removeWorks(dataToEdit._id)}
                    className="px-5 flex items-center justify-center py-3 w-[150px] font-medium border  cursor-pointer hover:bg-blue-400 hover:text-white rounded-xl"
                  >
                    Remove
                  </div>
                  <button className="px-5 py-3 w-[150px] font-medium bg-red-500 text-white rounded-xl">
                    Edit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBox;
