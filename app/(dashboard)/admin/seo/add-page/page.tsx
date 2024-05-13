"use client";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useFieldArray, useForm } from "react-hook-form";
import ImagePicker from "../../components/shared/ImagePicker";
import TextEditor from "../../components/shared/TextEditor";
import { useState } from "react";
import MetaData from "./MetaData";
import { metaData } from "@/constant";
import PreviewPage from "./PreviewPage";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const AddPage = () => {
  const navigator = useRouter();
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
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

  const uploadPage = async () => {
    const dataToPass = watch();
    const formData: any = new FormData();

    const images: any = dataToPass.page.map((item) => item.image);
    const dataWithoutImage = {
      page: dataToPass.page.map(({ image, ...rest }) => rest),
      metaData: dataToPass.metaData,
    };
    if (images[0]) {
      for (const file of images) {
        formData.append("images", file[0]);
      }
    }
    formData.append("data", JSON.stringify(dataWithoutImage));

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/seo/add-seo`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("successfully added");
      setTimeout(() => navigator.replace("/admin/seo"), 1000);
    } catch (error) {
      toast.warning("server is busy try later 🥸");

      console.log(error);
    }
  };

  return (
    <div className=" mt-5 h-full    w-full border rounded-t-lg">
      <div className=" border-b p-2 sticky top-0 z-30 bg-gray-200 rounded-t-lg flex justify-end">
        <div onClick={uploadPage} className="mx-3 " title="upload">
          <CloudUploadIcon className="cursor-pointer hover:text-blue-500" />
        </div>
        <div onClick={() => setIsPreviewOpen(true)} title="preview">
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
                  <ImagePicker setvalue={setValue} index={index} />
                  <TextEditor
                    getValues={getValues}
                    setvalue={setValue}
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
          className="w-full p-3 bg-gray-700 flex-center rounded-lg mt-3  text-gray-400 font-semibold  "
        >
          ADD NEW FIELD
        </button>
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
  );
};

export default AddPage;
