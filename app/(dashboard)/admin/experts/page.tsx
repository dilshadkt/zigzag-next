"use client";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddExpert from "./AddExpert";
import Image from "next/image";
import axios from "axios";
import EditExpert from "./EditExpert";
import Shimmer from "../components/Shimmer";

const Experts = () => {
  const [data, setData] = useState<Data[]>([]);
  const [isAddExpertOpen, setIsAddExpertOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [expert, setExprt] = useState<Data | undefined>(undefined);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/experts`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex items-center justify-end my-[2%] ">
        <div
          onClick={() => setIsAddExpertOpen(!isAddExpertOpen)}
          className="cursor-pointer hover:text-red-400"
          title="add image"
        >
          <AddIcon />
        </div>
      </div>
      <div className="p-5 md:p-2  border rounded-xl grid grid-cols-4 md:grid-cols-2">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setExprt(item);
              setIsEdit(!isEdit);
            }}
            className="m-2 border cursor-pointer md:bg-gray-100 shadow-lg hover:scale-105 transition-all duration-300 bg-gray-100 p-3 md:p-2 rounded-xl"
          >
            <div className="flex flex-col items-center justify-center">
              <div className=" w-[150px] h-[150px] md:w-[100px] md:h-[100px] rounded-full border flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt="experts"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl md:text-xl font-semibold my-2 md:my-[4px]">
                {item.name}
              </h4>
              <h6 className="md:text-sm text-center px-2 ">{item.role}</h6>
            </div>
          </div>
        ))}
      </div>
      {isAddExpertOpen && (
        <AddExpert
          setIsAddExpertOpen={setIsAddExpertOpen}
          isAddExpertOpen={isAddExpertOpen}
          setData={setData}
        />
      )}
      {isEdit && (
        <EditExpert
          setData={setData}
          expert={expert}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
        />
      )}
    </div>
  );
};

export default Experts;
