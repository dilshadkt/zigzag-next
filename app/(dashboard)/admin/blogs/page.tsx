"use client";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";
import Shimmer from "../components/Shimmer";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
interface Data {
  _id: string;
  photos: string;
  heading: string;
  description: String;
}
const Blog = () => {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
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
        <div className="grid md:grid-cols-3 gap-y-4 grid-cols-1">
          {data.map((item, index) => (
            <div
              key={`${index}`}
              className="border-gray-300 group relative shadow-lg h-full border-[1px] p-2  rounded-xl flex-1 m-2  hover:bg-gray-100"
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
              <div className="flex justify-center my-3">
                <span className="underline text-red-500 cursor-pointer">
                  Readmore
                </span>
              </div>
              <div className="absolute text-gray-600 p-5 flex items-center justify-between h-4  opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-lg  bottom-0 left-0 right-0 mx-auto">
                <Link href={`/admin/blogs/${item._id}`}>
                  <div className="hover:text-red-400 cursor-pointer">
                    <EditIcon />
                  </div>
                </Link>
                <Link href={`/blogs/${item._id}`} target="_blank">
                  <div className="hover:text-red-400 cursor-pointer">
                    <RemoveRedEyeIcon />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
