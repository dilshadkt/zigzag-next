"use client";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddTestimonial from "./AddTestimonial";
import axios from "axios";
import EditTest from "./EditTest";

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

  useEffect(() => {
    axios
      .get("http://localhost:8080/testimonial")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <div className="flex items-center justify-end my-[2%]">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer hover:text-red-400"
            title="add image"
          >
            <AddIcon />
          </div>
        </div>
        <div className="px-5 pt-10 border rounded-xl grid grid-cols-4 ">
          {data.map((item) => (
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
                  <img src={item?.photos} />
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
      {isOpen && <AddTestimonial isOpoen={isOpen} setIsOpen={setIsOpen} />}
      {isEdit && (
        <EditTest
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          testimonial={testimonial}
        />
      )}
    </>
  );
};

export default Testimonials;
