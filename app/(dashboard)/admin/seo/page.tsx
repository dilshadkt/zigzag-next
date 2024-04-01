"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import Image from "next/image";
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
const SeoPage = () => {
  const [content, setContent] = useState<Content[]>([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/seo/`)
      .then((res) => setContent(res.data.content))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="my-[2%]">
      <div className="flex items-center justify-end my-[2%] md:mx-3">
        <Link href={"/admin/seo/add-seo"}>
          <div className="cursor-pointer hover:text-red-400" title="add image">
            <AddIcon />
          </div>
        </Link>
      </div>
      <div className="p-5 border w-full rounded-xl ">
        <div className="grid grid-cols-3 md:grid-cols-1">
          {content.map((item, index) => (
            <Link key={`${index}`} href={`/admin/seo/${item.path}`}>
              <div className="border-gray-300 shadow-lg border-[1px] p-2  rounded-xl flex-1 m-2 cursor-pointer hover:bg-gray-100">
                <div className="w-full border h-[220px] rounded-xl overflow-hidden">
                  <Image
                    src={item.photos}
                    width={400}
                    height={400}
                    alt="blog"
                    className="w-full h-full object-cover"
                  />
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

export default SeoPage;
