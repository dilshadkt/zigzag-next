"use client";
import React, { useState } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useForm } from "react-hook-form";
import Sample from "./Sample";
const page = () => {
  const { register, watch } = useForm();
  const [arry, setArry] = useState([0]);
  console.log(watch());
  const removeField = (id) => {
    setArry((prev) => prev.filter((item) => item !== id));
  };
  return (
    <div className=" my-[5%] border p-3 rounded-xl bg-gray-100">
      <div className="w-full h-[250px] border ">
        <label
          className={` text-black flex opacity-30 cursor-pointer h-full  items-center justify-center p-1 rounded-full `}
        >
          <input
            {...register("photos")}
            type="file"
            className="hidden "
            name="photos"
          />
          <AddAPhotoIcon className="text-[100px]" />
        </label>
      </div>
      <div className="my-3">
        <input
          {...register("mainHead")}
          type="text"
          placeholder="heading 1"
          className="bg-transparent w-full p-5 text-2xl"
        />
        <textarea
          {...register("desc")}
          type="text"
          placeholder="description"
          className="w-full p-5 text-lg my-2 h-fit"
        />
      </div>
      <div className="my-3">
        {arry.map((item, index) => (
          <Sample
            register={register}
            key={`${index}-${item}`}
            removeField={removeField}
            setArry={setArry}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
