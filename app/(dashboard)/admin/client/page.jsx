"use client";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddClinetLogo from "./AddClinetLogo";
import Image from "next/image";
import axios from "axios";
import EditClients from "./EditClients";
import Shimmer from "../components/Shimmer";

const Client = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [client, setClient] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/clients`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return data.length === 0 ? (
    <Shimmer />
  ) : (
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
        <div className="p-5 border rounded-xl grid grid-cols-4">
          {data.map((item, index) => (
            <div
              onClick={() => {
                setClient(item);
                setIsEdit(!isEdit);
              }}
              key={index}
              className="m-2 border cursor-pointer  hover:bg-gray-100 p-3 rounded-xl"
            >
              <div className="flex flex-col items-center justify-center ">
                <div className=" h-[150px] w-full rounded-lg border flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.image}
                    alt="experts"
                    width={700}
                    height={700}
                    quality={100}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-2xl font-semibold my-2">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && <AddClinetLogo isOpoen={isOpen} setIsOpen={setIsOpen} />}
      {isEdit && (
        <EditClients clients={client} isEdit={isEdit} setIsEdit={setIsEdit} />
      )}
    </>
  );
};

export default Client;
