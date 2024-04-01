"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Shimmer from "../../components/Shimmer";
import { useForm } from "react-hook-form";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { ToastContainer, toast } from "react-toastify";
import RichText from "@/app/(dashboard)/admin/blogs/add-blog/RichText";
import Loading from "../../components/Loading";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

interface ContentPageProps {
  params: {
    path: string;
  };
}
interface Content {
  photos: string;
  path: string;
  ogDescription: string;
  ogTitle: string;
  metaKeyWord: string;
  metaDescription: string;
  metaTitle: string;
  test: string;
  _id: string;
}
const ContentPage: React.FC<ContentPageProps> = ({ params: { path } }) => {
  console.log(path);
  const [content, setContent] = useState("");
  const [blog, setBlog] = useState<Content>();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [isEdit, setIsEdit] = useState(false);
  const [previewImg, setPreviewImg] = useState<string>("");
  const { register, watch } = useForm();

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/seo/${path}`)
      .then((res) => {
        setBlog(res.data);

        setContent(res.data.test);
      })
      .catch((err) => console.log(err));
  }, [path]);

  const router = useRouter();
  const deleteBlog = (id: string) => {
    setIsLoading(!isLoading);
    axios
      .delete(`${process.env.NEXT_PUBLIC_BASE_URL}/seo?contentId=${id}`)
      .then(() => {
        setIsLoading(false);
        router.back();
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toast.warning("server is busy try later");
      });
  };

  const updateBlog = (id: string) => {
    setIsLoading(!isLoading);
    const blog = new FormData();
    image !== null && blog.append("photos", image);
    blog.append("test", content);
    watch().metaTitle && blog.append("metaTitle", watch().metaTitle);
    watch().metaKeyWord && blog.append("metaKeyWord", watch().metaKeyWord);
    watch().ogTitle && blog.append("ogTitle", watch().ogTitle);
    watch().ogDescription &&
      blog.append("ogDescription", watch().ogDescription);
    watch().path && blog.append("path", watch().path);
    watch().metaDescription &&
      blog.append("metaDescription", watch().metaDescription);
    axios
      .patch(`${process.env.NEXT_PUBLIC_BASE_URL}/seo?contentId=${id}`, blog)
      .then(() => {
        setIsLoading(false);
        toast.success("successfully updated");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.warning("server is busy try later");
        console.log(err);
      });
  };

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      setPreviewImg(URL.createObjectURL(event.target.files[0]));
    }
  };
  return blog ? (
    <div className=" px-[10%] py-[4%] md:px-[5px]">
      {isEdit ? (
        <div className="w-full h-[250px] border relative">
          <label
            className={`${
              image === null ? `flex` : `hidden`
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
          {image !== null && (
            <div className="w-full h-full">
              <Image
                src={previewImg}
                alt="preview image"
                width={400}
                height={400}
                quality={90}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div
            onClick={() => setIsEdit(!isEdit)}
            title="edit"
            className="absolute w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center  right-3 cursor-pointer top-3 transform hover:scale-90 transition-all "
          >
            ✖️
          </div>
        </div>
      ) : (
        <div className="w-full h-[300px] overflow-hidden flex rounded-xl relative">
          <Image
            src={blog.photos}
            alt={blog.photos}
            width={200}
            height={200}
            className="w-full object-cover "
          />
          <div
            onClick={() => setIsEdit(!isEdit)}
            title="edit "
            className="absolute w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center  right-3 cursor-pointer top-3 transform hover:scale-90 transition-all "
          >
            ✏️
          </div>
        </div>
      )}

      <div className="my-4">
        <RichText content={content} setContent={setContent} />
      </div>

      <div className="border mt-[5%] p-5 rounded-xl bg-gray-200">
        <div className="grid grid-cols-5">
          <label>meta title :</label>
          <input
            type="text"
            placeholder={blog.metaTitle}
            {...register("metaTitle")}
            className="border bg-white col-span-4 p-2"
          />
        </div>
        <div className="grid grid-cols-5 my-2">
          <label>meta description :</label>
          <textarea
            {...register("metaDescription")}
            placeholder={blog.metaDescription}
            className="border bg-white col-span-4 p-2"
          />
        </div>
        <div className="grid grid-cols-5 ">
          <label>Meta KeyWord :</label>
          <input
            type="text"
            placeholder={blog.metaKeyWord}
            {...register("metaKeyWord")}
            className="bg-white   col-span-4 p-2 rounded-xl outline-none"
          />
        </div>
        <div className="grid grid-cols-5 my-2">
          <label>OG Title :</label>
          <input
            type="text"
            placeholder={blog.ogTitle}
            {...register("ogTitle")}
            className="bg-white col-span-4 p-2 rounded-xl outline-none"
          />
        </div>
        <div className="grid grid-cols-5 my-2">
          <label>OG Description :</label>
          <textarea
            placeholder={blog.ogDescription}
            {...register("ogDescription")}
            className="bg-white col-span-4 p-2 rounded-xl outline-none"
          />
        </div>
        <div className="grid grid-cols-5 my-2">
          <label>Path :</label>
          <div className="col-span-4   ">
            <input
              type="text"
              placeholder={blog.path}
              {...register("path")}
              className="bg-white w-full p-2 rounded-xl outline-none"
            />
            <p className="text-sm text-gray-500 my-2">
              😊 This will be the path to this page ⬆️
            </p>
          </div>
        </div>
      </div>
      <div className="my-3">
        <button
          onClick={() => deleteBlog(blog._id)}
          className="bg-red-500 mr-2 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl"
        >
          Delete
        </button>
        <button
          onClick={() => updateBlog(blog._id)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl"
        >
          Edit
        </button>
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
    </div>
  ) : (
    <>
      <Shimmer />
    </>
  );
};

export default ContentPage;
