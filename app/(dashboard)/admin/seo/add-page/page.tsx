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

const AddPage = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const { register, control, watch, setValue } = useForm<FormValue>({
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

  const uploadPage = () => {
    const dataToPass = watch();
    // console.log(dataToPass);
    const dataTopass: any = new FormData();
    dataTopass.append("data", dataToPass);
    axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/seo/add-seo`, dataToPass)
      .then((res) => {
        console.log(res);
        // setTimeout(() => navigator.back(), 1000);
      })
      .catch((err) => {
        // toast.warning("server is busy try later 🥸");
        // setLoader(false);
        console.log(err);
      });
  };

  return (
    <div className=" mt-5 h-full    w-full border rounded-t-lg">
      <div className=" border-b p-2 sticky top-0 z-30 bg-gray-200 rounded-t-lg flex justify-end">
        <div onClick={() => setIsPreviewOpen(true)}>
          <RemoveRedEyeIcon className="cursor-pointer hover:text-blue-500" />
        </div>
      </div>
      <div className="p-5 w-full bg-white">
        <form>
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
                  <TextEditor setvalue={setValue} index={index} />
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
        <button
          onClick={uploadPage}
          className="w-full p-3 bg-gray-700 flex-center rounded-lg mt-6  text-gray-400 font-semibold  "
        >
          Upload
        </button>
      </div>
      {isPreviewOpen && (
        <PreviewPage setIsOpen={setIsPreviewOpen} data={watch()} />
      )}
    </div>
  );
};

export default AddPage;
