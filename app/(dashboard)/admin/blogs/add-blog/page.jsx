"use client";
import React, { useState } from "react";
import RichText from "./RichText";
import { useForm } from "react-hook-form";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import Loading from "@/app/(dashboard)/admin/components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetaData from "../../seo/add-page/MetaData";
import { metaData } from "@/constant";
const Addblog = () => {
  const [image, setImage] = useState([]);
  const [loader, setLoader] = useState(false);
  const [content, setContent] = useState("");
  const [previewImg, setPreviewImg] = useState(null);
  const { register, watch } = useForm({
    defaultValues: {
      blog: "",
      metaData: metaData,
    },
  });
  const navigator = useRouter();

  ///// preview image 📸📸 /////////////////////////////////////

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      setPreviewImg(URL.createObjectURL(event.target.files[0]));
    }
  };

  ////// post blog ⚠️⚠️⚠️⚠️ /////////////////////////////////

  const postBLog = () => {
    setLoader(!loader);
    const blog = new FormData();
    const data = {
      test: content,
      metaData: watch().metaData,
    };

    blog.append("blog", JSON.stringify(data));
    blog.append("photos", image);

    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, blog)
      .then(() => {
        setLoader(false);
        navigator.back();
        toast.success("successfully added");
      })
      .catch((err) => {
        toast.warning("server is busy try later 🥸");
        setLoader(false);
      });
  };

  return (
    <div>
      <div>
        <div className="w-full h-[250px] border ">
          <label
            className={`${
              image.length === 0 ? `flex` : `hidden`
            }  text-black flex opacity-30 cursor-pointer h-full  items-center justify-center p-1 rounded-full `}
          >
            <input
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
                quality={100}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
      <RichText content={content} setContent={setContent} />
      <MetaData register={register} />
      <div className="my-3">
        <button
          onClick={() => postBLog()}
          className="bg-blue-400 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl"
        >
          Post this Blog
        </button>
      </div>
      {loader && <Loading />}
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
    </div>
  );
};

export default Addblog;
