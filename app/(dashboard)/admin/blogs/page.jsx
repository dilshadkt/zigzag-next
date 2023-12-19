"use client";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";

const page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/blogs")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" my-[2%]">
      <div className="flex items-center justify-end my-[2%]">
        <Link href={"/admin/blogs/add-blog"}>
          <div className="cursor-pointer hover:text-red-400" title="add image">
            <AddIcon />
          </div>
        </Link>
      </div>
      <div className="p-5 border w-full rounded-xl ">
        <div className="grid grid-cols-3">
          {data.map((item, index) => (
            <Link href={`/admin/blogs/${item._id}`}>
              <div
                key={index}
                className="border p-3 cursor-pointer hover:bg-gray-200 rounded-xl m-2"
              >
                <div className="w-full border h-[180px] rounded-xl overflow-hidden">
                  <Image
                    src={item.photos}
                    width={200}
                    height={200}
                    alt="blog"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-center text-primary font-medium my-2">
                    We Serve You The Best Digital 10 Marketing Agency In Kerala
                  </h3>
                </div>
                <div className="my-[3%]">
                  <p className="text-justify">
                    are you tired of looking best digital marketing agency in
                    Kerala, don’t worry we will be with you. We are sharing here
                    the best 10 digital marketing agencies in Kerala
                  </p>
                </div>
                <div className="flex justify-center my-3">
                  <span className="underline text-red-500">Readmore</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
