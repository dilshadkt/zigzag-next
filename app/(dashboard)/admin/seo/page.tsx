"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface Content {
  page: any;
  image: string;
  path: string;
  ogDescription: string;
  ogTitle: string;
  metaKeyWord: string;
  metaDescription: string;
  metaTitle: string;

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
        <Link href={"/admin/seo/add-page"}>
          <div className="cursor-pointer hover:text-red-400" title="add image">
            <AddIcon />
          </div>
        </Link>
      </div>
      <div className="p-5 border w-full rounded-xl ">
        {content.length === 0 ? (
          <div className="h-[400px] w-full text-xl font-medium bg-gray-100 flex items-center justify-center ">
            <Link href={"/admin/seo/add-page"}>
              <h5>Create Your First Page</h5>
            </Link>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-3 grid-cols-1">
              {content.map((item, index) => (
                <div
                  key={`${index}`}
                  className="border-gray-300 shadow-lg border-[1px] p-2  rounded-xl flex-1 m-2  hover:bg-gray-100"
                >
                  <div className="w-full border h-[220px] rounded-xl overflow-hidden">
                    {item.page[0].image ? (
                      <Image
                        src={item.page[0].image}
                        width={400}
                        height={400}
                        alt="blog"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300"></div>
                    )}
                  </div>

                  <div className="flex justify-center my-3">
                    <span className="font-medium text-red-500">
                      {item.path}
                    </span>
                  </div>
                  <div className="flex items-center justify-between ">
                    <Link href={`/admin/seo/${item.path}`}>
                      <div className="bg-blue-500  hover:bg-blue-600 py-2 px-4 cursor-pointer  text-white rounded-lg font-semibold">
                        <EditIcon />
                      </div>
                    </Link>
                    <button
                      onClick={() =>
                        window.open(
                          `${process.env.NEXT_PUBLIC_CLIENT_URL}/${item.path}`
                        )
                      }
                      className="bg-blue-500 hover:bg-blue-300 py-2 px-4 text-white rounded-lg font-semibold"
                    >
                      <VisibilityIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SeoPage;
