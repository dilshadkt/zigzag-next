"use client";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddExpert from "./AddExpert";
import Image from "next/image";
import axios from "axios";
import EditExpert from "./EditExpert";
import Shimmer from "../components/Shimmer";
interface Data {
  _id: string;
  image: string;
  name: string;
  role: string;
}
const Experts = () => {
  const [data, setData] = useState<Data[]>([]);
  const [isAddExpertOpen, setIsAddExpertOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [expert, setExprt] = useState<Data | undefined>(undefined);
  useEffect(() => {
    axios
      .get("https://zigzag.onrender.com/experts")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex items-center justify-end my-[2%]">
        <div
          onClick={() => setIsAddExpertOpen(!isAddExpertOpen)}
          className="cursor-pointer hover:text-red-400"
          title="add image"
        >
          <AddIcon />
        </div>
      </div>
      <div className="p-5 border rounded-xl grid grid-cols-4">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setExprt(item);
              setIsEdit(!isEdit);
            }}
            className="m-2 border cursor-pointer  hover:bg-gray-100 p-3 rounded-xl"
          >
            <div className="flex flex-col items-center justify-center">
              <div className=" w-[150px] h-[150px] rounded-full border flex items-center justify-center overflow-hidden">
                <Image
                  src={item.image}
                  alt="experts"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-2xl font-semibold my-2">{item.name}</h4>
              <h6>{item.role}</h6>
            </div>
          </div>
        ))}
      </div>
      {isAddExpertOpen && (
        <AddExpert
          setIsAddExpertOpen={setIsAddExpertOpen}
          isAddExpertOpen={isAddExpertOpen}
        />
      )}
      {isEdit && (
        <EditExpert expert={expert} setIsEdit={setIsEdit} isEdit={isEdit} />
      )}
    </div>
  );
};

export default Experts;
