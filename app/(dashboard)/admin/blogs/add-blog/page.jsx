"use client";
import React from "react";
import { useForm } from "react-hook-form";
import FieldArray from "./FieldArray";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import axios from "axios";
const defaultValues = {
  test: [
    {
      name: "",
      nestedArray: [{ subhead: "", desc: "" }],
    },
  ],
};
const page = () => {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    errors,
    reset,
    setValue,
  } = useForm({
    defaultValues,
  });
  const onSubmit = (data) => {
    const blog = new FormData();

    Object.keys(data).forEach((key) => {
      blog.append(key, data[key]);
    });
    blog.append("photos", data.photos[0]);
    axios
      .post("http://localhost:8080/blogs", blog)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-[5%] border p-3 rounded-xl bg-gray-100"
    >
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
          {...register("description")}
          type="text"
          placeholder="description"
          className="w-full p-5 text-lg my-2 h-fit"
        />
      </div>
      <FieldArray
        {...{ control, register, defaultValues, getValues, setValue, errors }}
      />
      <div className="flex my-[5%] justify-between">
        <button
          type="button"
          className="py-2 px-5 bg-blue-500 rounded-xl text-white font-semibold"
          onClick={() => reset(defaultValues)}
        >
          Reset
        </button>

        <input
          className="py-2 px-5 bg-red-500 rounded-xl text-white font-semibold"
          type="submit"
        />
      </div>
    </form>
  );
};

export default page;
