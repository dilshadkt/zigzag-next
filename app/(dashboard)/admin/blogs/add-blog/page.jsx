"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FieldArray from "./FieldArray";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import axios from "axios";
import Image from "next/image";

const defaultValues = {
  test: [
    {
      name: "",
      nestedArray: [{ subhead: "", desc: "", img: "" }],
    },
  ],
};
const page = () => {
  const [waiter, setWaiter] = useState(false);
  const [image, setImage] = useState([]);
  const [previewImg, setPreviewImg] = useState(null);
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
    const result = data.test.map((item) =>
      item.nestedArray.map((sub) => ({
        image: sub.img[0],
        head: sub.subhead,
      }))
    );
    blog.append("image", image);

    setWaiter(true);
    blog.append("blog", JSON.stringify(data));
    blog.append("photos", image);
    axios
      .post("http://localhost:8080/blogs", blog)
      .then((res) => {
        setImage(res.data);
        setWaiter(false);
      })
      .catch((err) => console.log(err));
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      setPreviewImg(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-[5%] border p-3 rounded-xl bg-gray-100"
    >
      <div className="w-full h-[250px] border ">
        <label
          className={`${
            image.length === 0 ? `flex` : `hidden`
          }  text-black flex opacity-30 cursor-pointer h-full  items-center justify-center p-1 rounded-full `}
        >
          <input
            {...register("photos")}
            type="file"
            className="hidden "
            name="photos"
            onChange={onImageChange}
          />
          <AddAPhotoIcon className="text-[100px]" />
        </label>
        {image.length !== 0 && (
          <div className="w-full h-full">
            <Image
              src={previewImg}
              alt="preview image"
              width={150}
              height={150}
              className="w-full h-full object-cover"
            />
          </div>
        )}
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
      <textarea
        {...register("conclustion")}
        className="w-full p-5 border rounded-xl mt-6"
        placeholder="conculstion ....."
      />
      <div className="my-4 rounded-xl  p-5 border ">
        <label className="grid grid-cols-5 my-2 ">
          <h5 className="text-lg font-semibold mr-2">meta title :</h5>
          <input
            type="text"
            {...register("metaTitle")}
            className="w-full  p-2"
          />
        </label>
        <label className="grid grid-cols-5 my-2 ">
          <h5 className="text-lg font-semibold mr-2">meta description :</h5>
          <input
            type="text"
            {...register("metaDescription")}
            className="w-full p-2"
          />
        </label>
      </div>
      <div className="flex my-[5%] justify-between">
        <button
          type="button"
          className="py-2 px-5 bg-blue-500 rounded-xl text-white font-semibold"
          onClick={() => reset(defaultValues)}
        >
          Reset
        </button>

        <input
          className={`${
            waiter ? `cursor-wait` : `cursor-pointer`
          }  hover:bg-red-600 py-2 px-5 bg-red-500 rounded-xl text-white font-semibold`}
          type="submit"
        />
      </div>
    </form>
  );
};

export default page;
