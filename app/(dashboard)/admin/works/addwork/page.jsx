"use client";
import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loading from "@/app/(dashboard)/admin/components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { categories } from "@/constant";
import { nanoid } from "nanoid";
const Page = () => {
  const [category, setCategory] = useState(categories);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);
  const [isOpenNewCategory, setIsOpenNewCategory] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/work`)
      .then((res) => setCategory(res?.data?.category));
  }, []);

  const addWorks = () => {
    setLoading(!loading);
    const datas = new FormData();
    datas.append("photos", image);
    datas.append("category", watch().category);
    datas.append("star", watch().star);
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/work`, datas)
      .then(() => {
        router.back();
        setLoading(false);
        toast.success("successfully added");
      })
      .catch((err) => {
        toast.warning("server is busy , try later");
        setLoading(false);
      });
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      setPreviewImg(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    if (value === "costom") {
      setIsOpenNewCategory(true);
      setValue("category", null);
    }
  };
  return (
    <div>
      <div className="md:flex  items-center justify-start my-[2%] hidden">
        <Link href={"/admin/works"}>
          <div className="cursor-pointer hover:text-red-500 text-gray-500">
            <ArrowBackIcon />
          </div>
        </Link>
      </div>
      <div className="flex justify-center md:mt-5">
        <div className="p-5 border  rounded-lg flex flex-col items-center flex-wrap">
          <form
            className="flex flex-col"
            onSubmit={handleSubmit(() => {
              addWorks();
            })}
          >
            <div className="w-[500px] md:w-full h-[200px] flex items-center mb-[5%] justify-center">
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
              {!isOpenNewCategory && (
                <select
                  {...register("category", {
                    required: "must  specify the category",
                  })}
                  onChange={handleSelectChange}
                  className="border bg-white p-3 rounded-lg w-[250px]"
                >
                  <option selected disabled value={"default"}>
                    select category
                  </option>
                  {category.map((item) => (
                    <option key={nanoid()} value={item}>
                      {item}
                    </option>
                  ))}
                  <option value={"costom"}>Add new category</option>
                </select>
              )}
              {isOpenNewCategory && (
                <>
                  <label className="text-sm font-semibold w-full my-2 pl-1 text-gray-700">
                    Add new category :
                  </label>
                  <input
                    {...register("category")}
                    placeholder="Add new category"
                    className="border bg-white p-3 rounded-lg w-[250px]"
                  />
                </>
              )}

              <p className="text-red-500 font-medium">
                {errors.category?.message}
              </p>
              <select
                {...register("star", {
                  required: "you have to whether it is stared or not",
                })}
                className="border bg-white p-3 rounded-lg w-[250px] my-[5%]"
              >
                <option value="false">Not stared ✖️</option>
                <option value="true"> Stared ⭐</option>
              </select>
              <p className="text-red-500 font-medium ">
                {errors.star?.message}
              </p>
              <button className="px-5 py-3 w-[250px] font-medium bg-blue-500 text-white rounded-xl">
                ADD
              </button>
            </div>
          </form>
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
        </div>
      </div>
    </div>
  );
};

export default Page;
