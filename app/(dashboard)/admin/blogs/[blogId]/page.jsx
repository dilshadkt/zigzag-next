"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Shimmer from "../../components/Shimmer";
import { useForm } from "react-hook-form";
import Loading from "./Loading";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { ToastContainer, toast } from "react-toastify";
import RichText from "@/app/(dashboard)/admin/blogs/add-blog/RichText";
import "react-toastify/dist/ReactToastify.css";
import MetaData from "../../seo/add-page/MetaData";
import { metaData } from "@/constant";

const Page = ({ params: { blogId } }) => {
  const [content, setContent] = useState("");
  const [blog, setBlog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [previewImg, setPreviewImg] = useState(null);
  const { register, watch, setValue } = useForm({
    defaultValues: {
      test: "",
      photos: null,
      metaData: metaData,
    },
  });

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs?blogId=${blogId}`)
      .then((res) => {
        setBlog(res.data);
        setValue("metaData", res.data);
        setValue("photos", res.data.photos);
        setValue("test", res.data.test);
        setContent(res.data.test);
      })
      .catch((err) => console.log(err));
  }, [blogId]);

  const router = useRouter();
  const deleteBlog = (id) => {
    setIsLoading(!isLoading);
    axios
      .delete(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs?blogId=${id}`)
      .then(() => {
        setIsLoading(false);
        router.back();
      })
      .catch((err) => {
        setIsLoading(false);
        toast.warning("server is busy try later");
      });
  };

  const updateBlog = (id) => {
    setIsLoading(!isLoading);
    const blog = new FormData();
    const { photos, test, ...MetaData } = watch().metaData;
    image.length !== 0 && blog.append("photos", image);
    blog.append("test", content);

    Object.keys(MetaData).forEach((key) => {
      blog.append(`${key}`, MetaData[`${key}`]);
    });

    axios
      .patch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs?blogId=${id}`, blog)
      .then(() => {
        setIsLoading(false);
        toast.success("successfully updated");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.warning("server is busy try later");
      });
  };

  const onImageChange = (event) => {
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
      <MetaData register={register} />
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
          Save
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

export default Page;
