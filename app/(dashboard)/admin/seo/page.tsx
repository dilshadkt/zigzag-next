"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditTool from "../components/shared/EditTool";

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

  const DublicateBlog = (index: number) => {
    const formData: any = new FormData();
    const { _id, page, ...metaData } = content[index];
    const dataToPass = { page, metaData };

    formData.append("data", JSON.stringify(dataToPass));
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/seo/add-seo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setContent(res.data.pages);
        toast.success("successfully dublicated");
      })
      .catch((err) => toast.warning("server is busy try later 🥸"));
  };

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
                  className="border-gray-300 shadow-lg border-[1px] p-2  rounded-xl flex-1 m-2  "
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
                  <EditTool
                    edit={`seo/${item.path}`}
                    visbility={item.path}
                    dublicate={DublicateBlog}
                    indexOfDublicateItem={index}
                  />
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
          </>
        )}
      </div>
    </div>
  );
};

export default SeoPage;
