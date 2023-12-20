"use client";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState([]);
  const [previewImg, setPreviewImg] = useState(null);
  const addWorks = () => {
    const datas = new FormData();
    datas.append("photos", image);
    datas.append("category", watch().category);
    datas.append("star", watch().star);
    axios
      .post("http://localhost:8080/work", datas)
      .then(() => router.back())
      .catch((err) => console.log(err));
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      setPreviewImg(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div>
      <div className="flex items-center justify-start my-[2%]">
        <Link href={"/admin/works"}>
          <div className="cursor-pointer hover:text-red-500">
            <ArrowBackIcon />
          </div>
        </Link>
      </div>
      <div className="flex justify-center">
        <div className="p-5 border  rounded-lg flex flex-col items-center flex-wrap">
          <form
            className="flex flex-col"
            onSubmit={handleSubmit(() => {
              addWorks();
            })}
          >
            <div className="w-[500px] h-[200px] flex items-center mb-[5%] justify-center">
              <label
                className={` ${
                  image.length === 0 ? `flex` : `hidden`
                } text-black  opacity-30 cursor-pointer  items-center justify-center p-1 rounded-full `}
              >
                <input
                  {...register("photos", { required: "Image is required" })}
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

            <p className="text-red-500 text-center font-medium">
              {errors.photos?.message}
            </p>
            <div className="w-full flex flex-col items-center justify-center">
              <select
                {...register("category", {
                  required: "you to specify the category",
                })}
                className="border p-3 rounded-lg w-[250px]"
              >
                <option
                  value="Brand Identity
"
                >
                  Brand Identity
                </option>
                <option
                  value="Social Media
"
                >
                  Social Media
                </option>
              </select>
              <p className="text-red-500 font-medium">
                {errors.category?.message}
              </p>
              <select
                {...register("star", {
                  required: "you have to whether it is stared or not",
                })}
                className="border p-3 rounded-lg w-[250px] my-[5%]"
              >
                <option value="false">Not stared ✖️</option>
                <option value="true"> Stared ⭐</option>
              </select>
              <p className="text-red-500 font-medium ">
                {errors.star?.message}
              </p>
              <button className="px-5 py-3 w-[250px] font-medium bg-red-500 text-white rounded-xl">
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
