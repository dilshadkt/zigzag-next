import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
const EditClients = ({ isEdit, setIsEdit, clients }) => {
  const { register, watch } = useForm({
    defaultValues: {
      name: clients.name,
    },
  });
  const remove = (id) => {
    axios
      .delete(`http://localhost:8080/clients/${id}`)
      .then(() => location.reload())
      .catch((err) => console.log(err));
  };
  const updateClients = (id) => {
    axios
      .patch(`http://localhost:8080/clients/${id}`, watch())
      .then(() => location.reload())
      .catch((err) => console.log(err));
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
    </>
  );
};

export default EditClients;
