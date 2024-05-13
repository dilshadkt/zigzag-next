"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Shimmer from "../../components/Shimmer";
import { useFieldArray, useForm } from "react-hook-form";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { ToastContainer, toast } from "react-toastify";
import RichText from "@/app/(dashboard)/admin/blogs/add-blog/RichText";
import Loading from "../../components/Loading";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import MetaData from "../add-page/MetaData";
import PreviewPage from "../add-page/PreviewPage";
import ImagePicker from "../../components/shared/ImagePicker";
import TextEditor from "../../components/shared/TextEditor";
import { metaData } from "@/constant";

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
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [blog, setBlog] = useState<Content>();
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const { register, control, watch, setValue, getValues } = useForm<FormValue>({
    defaultValues: {
      page: [{ heading: "Heading", image: null, description: "Description" }],
      metaData: metaData,
    },
    mode: "onBlur",
  });
  const { fields, append, remove } = useFieldArray({
    name: "page",
    control,
  });
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/seo/${path}`)
      .then((res) => {
        setBlog(res.data);
        const { page, ...metaData } = res.data;
        console.log(page);
        setValue("page", page);
        setValue("metaData", metaData);
        setContent(res.data.test);
      })
      .catch((err) => console.log(err));
  }, [path]);

  const router = useRouter();

  // const CaptureChange = () => {
  //   setIsEdit(true);
  // };

  // const deleteBlog = (id: string) => {
  //   setIsLoading(!isLoading);
  //   axios
  //     .delete(`${process.env.NEXT_PUBLIC_BASE_URL}/seo?contentId=${id}`)
  //     .then(() => {
  //       setIsLoading(false);
  //       router.back();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setIsLoading(false);
  //       toast.warning("server is busy try later");
  //     });
  // };

  const updateBlog = (id: string) => {
    const blog: any = new FormData();
    const datatoUpdate = watch();
    const result: any = datatoUpdate.page
      .map(
        (item, index) =>
          typeof item.image === "object" && { image: item.image, index }
      )
      .filter((item) => typeof item === "object");
    if (result.length !== 0) {
      for (const file of result) {
        blog.append("image", file.image[0]);
        blog.append("index", file.index);
      }
    }
    blog.append("updation", JSON.stringify(datatoUpdate));
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

  return blog ? (
    <div
      onChange={() => setIsEdit(true)}
      className=" mt-5 h-full    w-full border rounded-t-lg"
    >
      <div className=" border-b p-2 sticky top-0 z-30 bg-gray-200 rounded-t-lg flex justify-end">
        <div onClick={() => setIsPreviewOpen(true)}>
          <RemoveRedEyeIcon className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>
      <div className="p-5 w-full bg-white">
        <form encType="multipart/form-data">
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="mb-5">
                <section className="flex flex-col" key={field.id}>
                  <input
                    className="FormInput"
                    type="text"
                    placeholder="Heading"
                    {...register(`page.${index}.heading` as const, {
                      required: true,
                    })}
                    defaultValue={field.heading}
                    required
                  />
                  <ImagePicker
                    image={field.image}
                    setvalue={setValue}
                    index={index}
                  />
                  <TextEditor
                    setvalue={setValue}
                    getValues={getValues}
                    setIsEdit={setIsEdit}
                    index={index}
                  />
                  <div>
                    <button className="form-btn" onClick={() => remove(index)}>
                      Remove
                    </button>
                  </div>
                </section>
              </div>
            );
          })}
          <button className="w-full p-3 bg-gray-700 hover:bg-gray-800 flex-center rounded-lg mt-6  text-gray-400 font-semibold  ">
            Upload
          </button>
        </form>
        <button
          type="button"
          onClick={() =>
            append({
              heading: "Heading",
              image: null,
              description: "Description",
            })
          }
          className="w-full p-3 bg-gray-700 hover:bg-gray-800 flex-center rounded-lg mt-3  text-gray-400 font-semibold  "
        >
          ADD NEW FIELD
        </button>
        {isEdit && (
          <button
            onClick={() => updateBlog(blog._id)}
            className="w-full p-3 bg-red-500 hover:bg-red-600 flex-center rounded-lg mt-2  text-white font-semibold  "
          >
            Update
          </button>
        )}
      </div>
      <div className="border-t  my-2 p-5">
        <MetaData register={register} />
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
      {isPreviewOpen && (
        <PreviewPage setIsOpen={setIsPreviewOpen} data={watch()} />
      )}
    </div>
  ) : (
    <>
      <Shimmer />
    </>
  );
};

export default ContentPage;
