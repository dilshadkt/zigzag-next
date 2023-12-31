"use client";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Shimmer from "../../components/Shimmer";
import { useForm } from "react-hook-form";
import Loading from "./Loading";
const page = ({ params: { blogId } }) => {
  const [blog, setBlog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register, watch } = useForm({
    defaultValues: { metaTitle: blog.metaTitle },
  });
  useEffect(() => {
    axios
      .get(`http://localhost:8080/blogs?blogId=${blogId}`)
      .then((res) => setBlog(res.data))
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
    <div className=" px-[14%] py-[4%]">
      <div className="w-full h-[300px] overflow-hidden flex rounded-xl">
        <Image
          src={blog.photos}
          alt=" "
          width={200}
          height={200}
          className="w-full object-cover "
        />
      </div>
      <div className="flex justify-center my-[2%]">
        <h1 className="text-3xl text-red-500 font-bold">{blog?.mainHead}</h1>
      </div>
      <div className="text-xl">
        <div>
          <p>{blog?.description}</p>
        </div>
        <div className="my-[2%]  leading-8">
          <ul className="list-[number] pl-5 text-red-500 font-medium">
            {blog?.test?.map((item, index) => (
              <li key={`${index}-${item.name}`} className="my-2">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="list-[number]">
            {blog?.test?.map((item, index) => (
              <Fragment key={`${index}-${item.name}`}>
                <li className="my-2">{item.name}</li>
                {item?.image && (
                  <div className="w-[200px] h-[200px] flex items-center justify-center overflow-hidden rounded-xl p-2 border">
                    <Image
                      src={item.image}
                      alt="sybone"
                      width={100}
                      height={100}
                      priority
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                )}
                {item?.nestedArray.map((items, index) => (
                  <ul key={`${index}-${items}`}>
                    <li className="my-2">{items?.subhead}</li>

                    <li>{items?.desc}</li>
                  </ul>
                ))}
              </Fragment>
            ))}
          </ul>
        </div>
        {blog?.conclustion && (
          <div>
            <h4 className="text-lg font-semibold my-4 text-red-500">
              conclusion :{" "}
            </h4>
            <div className="my-1">{blog?.conclustion}</div>
          </div>
        )}
        <div className="border p-5  rounded-xl  text-base mt-5 ">
          <div className="grid grid-cols-5">
            <label>meta title : </label>
            <input
              {...register("metaTitle")}
              type="text"
              placeholder={blog.metaTitle}
              className="col-span-4 border p-3 rounded-xl"
            />
          </div>
          <div className="grid grid-cols-5 my-4">
            <label className="text-sm">meta description : </label>
            <textarea
              {...register("metaDescription")}
              type="text"
              placeholder={blog.metaDescription}
              className="col-span-4 border p-3 rounded-xl"
            />
          </div>
        </div>
        <div className="my-[2%]">
          <button
            onClick={() => deleteBlog(blogId)}
            className="bg-red-500 text-white text-lg font-semibold px-5 hover:bg-red-400 p-3 rounded-xl"
          >
            Delete
          </button>
          <button
            onClick={() => updateBlog(blogId)}
            className="bg-blue-500 ml-3 text-white text-lg font-semibold px-5 hover:bg-blue-400 p-3 rounded-xl"
          >
            Edit
          </button>
        </div>
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
