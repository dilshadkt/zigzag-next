"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Shimmer from "../../components/Shimmer";
import { useForm } from "react-hook-form";
import Loading from "./Loading";
import parse from "html-react-parser";
import RichText from "@/app/(dashboard)/admin/blogs/add-blog1/RichText";
const page = ({ params: { blogId } }) => {
  const [content, setContent] = useState("");
  const [blog, setBlog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, watch } = useForm({
    defaultValues: { metaTitle: blog.metaTitle },
  });
  useEffect(() => {
    axios
      .get(`http://localhost:8080/blogs?blogId=${blogId}`)
      .then((res) => {
        setBlog(res.data);
        setContent(res.data.test);
      })
      .catch((err) => console.log(err));
  }, []);
  const router = useRouter();
  const deleteBlog = (id) => {
    axios
      .delete(`http://localhost:8080/blogs?blogId=${id}`)
      .then(() => router.back())
      .catch((err) => console.log(err));
  };
  const updateBlog = (id) => {
    setIsLoading(!isLoading);
    axios
      .patch(`http://localhost:8080/blogs?blogId=${id}`, watch())
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return blog ? (
    <div className=" px-[10%] py-[4%]">
      <div className="w-full h-[300px] overflow-hidden flex rounded-xl relative">
        <Image
          src={blog.photos}
          alt=" "
          width={200}
          height={200}
          className="w-full object-cover "
        />
        <div className="absolute w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center  right-3 cursor-pointer top-3 transform hover:scale-90 transition-all ">
          ✏️
        </div>
      </div>
      <div className="my-4">
        <RichText content={content} setContent={setContent} />
      </div>

      <div className="border mt-[5%] p-5 rounded-xl bg-gray-200">
        <div className="grid grid-cols-5">
          <label>meta title :</label>
          <input
            type="text"
            {...register("metaTitle")}
            className="border col-span-4 p-2"
          />
        </div>
        <div className="grid grid-cols-5 my-2">
          <label>meta description :</label>
          <textarea
            {...register("metaDescription")}
            type="text"
            className="border col-span-4 p-2"
          />
        </div>
      </div>
      <div className="my-3">
        <button
          onClick={() => deleteBlog(blogId)}
          className="bg-red-500 mr-2 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl"
        >
          Delete
        </button>
        <button
          onClick={() => updateBlog(blogId)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl"
        >
          Edit
        </button>
      </div>
      {isLoading && <Loading />}
    </div>
  ) : (
    <>
      <Shimmer />
    </>
  );
};

export default page;
