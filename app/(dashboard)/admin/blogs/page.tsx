"use client";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
import Shimmer from "../components/Shimmer";
import EditIcon from "@mui/icons-material/Edit";
import "react-toastify/dist/ReactToastify.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { toast, ToastContainer } from "react-toastify";
interface Data {
  _id: string;
  photos: string;
  heading: string;
  description: String;
  metaTitle: String;
  metaDescription: String;
  metaKeyWord: [String];
  ogDescription: String;
  ogTitle: String;
}
const Blog = () => {
  const [data, setData] = useState<Data[]>([]);
  const [blog, setBlog] = useState<Data[]>([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`)
      .then((res) => {
        setData(res.data.data);
        setBlog(res.data.blog);
      })
      .catch((err) => toast.warning("failed to fetch blogs"));
  }, []);
  const DublicateBlog = (index: number) => {
    const dataToDublicate = blog[index];
    const formData = new FormData();
    formData.append("blog", JSON.stringify(dataToDublicate));
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/blogs?type=dublicate`,
        formData
      )
      .then((res) => {
        setData(res.data.data);
        setBlog(res.data.blogs);
        toast.success("successfully added");
      })
      .catch((err) => toast.warning("failed to dublicate"));
  };
  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" my-[2%]">
      <div className="flex items-center justify-end my-[2%] md:mx-3">
        <Link href={"/admin/blogs/add-blog"}>
          <div className="cursor-pointer hover:text-red-400" title="add image">
            <AddIcon />
          </div>
        </Link>
      </div>

      <div className="p-5 border w-full rounded-xl ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2   gap-y-4 grid-cols-1">
          {data.map((item, index) => (
            <div
              key={`${index}`}
              className="border-gray-300 group relative shadow-lg h-full border-[1px] p-2  rounded-xl flex-1 m-2 pb-16 lg:pb-10 md:pb-14   hover:bg-gray-100"
            >
              <div className="w-full border h-[220px] rounded-xl overflow-hidden">
                <Image
                  src={item.photos}
                  width={400}
                  height={400}
                  alt="blog"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-center text-primary font-medium my-2">
                  {`${item?.heading?.slice(0, 50)} ...`}
                </h3>
              </div>
              <div className="my-[3%]">
                <p className="text-justify">
                  {`${item?.description?.slice(0, 150)}...`}
                </p>
              </div>

              <div className=" text-gray-600  absolute bottom-2 left-0 right-0 mx-auto justify-center flex items-center   ">
                <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6">
                  <li>
                    <div
                      onClick={() => DublicateBlog(index)}
                      className="tooltip"
                      data-tip="Dublicate"
                    >
                      <ContentCopyIcon className="opacity-60 hover:opacity-90" />
                    </div>
                  </li>
                  <li>
                    <Link
                      href={`/blogs/${item._id}`}
                      target="_blank"
                      className="tooltip"
                      data-tip="Preview"
                    >
                      <VisibilityIcon className="opacity-60 hover:opacity-90" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/admin/blogs/${item._id}`}
                      className="tooltip"
                      data-tip="Edit"
                    >
                      <EditIcon className="opacity-60 hover:opacity-90" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
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
      </div>
    </div>
  );
};

export default Blog;
