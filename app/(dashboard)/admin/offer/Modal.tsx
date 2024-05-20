import React, { useState } from "react";
import ImagePicker from "../components/shared/ImagePicker";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import Loading from "../components/Loading";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  link: string;
};
const Modal = ({
  setIsModalOpen,
  setOffers,
}: {
  setIsModalOpen: React.Dispatch<boolean>;
  setOffers: React.Dispatch<Offer[] | null>;
}) => {
  const [currentImage, setCurrentImage] = useState<File | string>("");
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (currentImage === "") {
      return setError("image is required");
    }
    setIsLoading(true);
    const formData = new FormData();
    formData.append("link", data.link);
    formData.append("image", currentImage);
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/offer`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setIsLoading(false);
        setOffers(res.data.offers);
        setTimeout(() => {
          setIsModalOpen(false);
        }, 800);
        toast.success("successfully added");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.warning("failed to create offer");
      });
  };
  return (
    <>
      <div
        onClick={() => setIsModalOpen(false)}
        className="fixed top-0 left-0 right-0 bottom-0 m-auto bg-black  opacity-50"
      ></div>
      <div className="fixed top-0 left-0 right-0 bottom-0 m-auto w-[30%] min-h-[450px] h-fit flex flex-col item-center bg-white rounded-lg">
        <div className="w-full  p-3  rounded-lg h-[300px]">
          <ImagePicker setCurrentImage={setCurrentImage} />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full p-3 px-4 flex flex-col"
        >
          <label className=" font-semibold text-gray-700">Link :</label>
          <input
            type="text"
            {...register("link", { required: "link is required" })}
            className="p-3 my-[5px] outline-none border border-gray-400 rounded-lg"
            placeholder="Link to the page"
          />
          {error && (
            <span className="text-sm font-medium my-1 text-red-500">
              {error}
            </span>
          )}
          {errors.link && (
            <span className="text-sm font-medium my-1 text-red-500">
              This field is required
            </span>
          )}
          <button className="p-3 my-[5px] outline-none font-semibold bg-blue-500 text-white rounded-lg">
            Save
          </button>
        </form>
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
    </>
  );
};

export default Modal;
