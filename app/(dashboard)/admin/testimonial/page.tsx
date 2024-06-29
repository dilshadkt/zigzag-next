"use client";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddTestimonial from "./AddTestimonial";
import axios from "axios";
import EditTest from "./EditTest";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { swap } from "@formkit/drag-and-drop";
interface Data {
  photos: string;
  name: string;
  description: string;
  designation: string;
  _id: string;
  color: string;
  role: string;
}
const Testimonials = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Data[]>([]);
  const [isEdit, setIsEdit] = useState(false);
  const [testimonial, setTestimonial] = useState<Data>(data[0]);
  const [parent, orderedTestimonial, setOrderedTestimonial] = useDragAndDrop<
    HTMLDivElement,
    any
  >([], {
    group: "parent",
    plugins: [swap()],
  });

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/testimonial`)
      .then((res) => {
        setData(res.data);
        setOrderedTestimonial(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const changeOrder = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/testimonial/order`,
        {
          data: orderedTestimonial,
        }
      );
      toast.success("saved changes");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <div className="flex items-center justify-end my-[2%] md:mx-3">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer hover:text-red-400"
            title="add image"
          >
            <AddIcon />
          </div>
          <button
            onClick={() => changeOrder()}
            className="rounded-lg    px-4
            py-2 font-medium  mx-4 bg-black text-white"
          >
            Save
          </button>
        </div>
        <div
          ref={parent}
          className="px-5 pt-10 border rounded-xl grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1"
        >
          {orderedTestimonial.map((item) => (
            <div
              onClick={() => {
                setTestimonial(item);
                setIsEdit(!isEdit);
              }}
              style={{ background: `${item.color}` }}
              key={item._id}
              className={`cursor-pointer rounded-xl flex flex-col justify-between  relative  mx-2  p-5 mb-[40%]`}
            >
              <div>
                <div className="text-end ">
                  <h2 className="text-lg font-semibold">{item?.name}</h2>
                </div>
                <div className="mt-6 font-medium text-justify">
                  {item?.description}
                </div>
              </div>

              <div className="avatar absolute -top-[7%]">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image
                    src={item?.photos}
                    alt="testimonial logo"
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              <div className=" flex flex-col my-2 items-end justify-end">
                <h3 className="text-lg font-semibold">{item?.designation}</h3>
                <h4>{item?.role}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <AddTestimonial
          isOpoen={isOpen}
          setIsOpen={setIsOpen}
          setData={setData}
        />
      )}
      {isEdit && (
        <EditTest
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          testimonial={testimonial}
          setData={setData}
        />
      )}
      <ToastContainer
        position="top-right"
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
  );
};

export default Testimonials;
