"use client";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddClinetLogo from "./AddClinetLogo";
import Image from "next/image";
import axios from "axios";
import EditClients from "./EditClients";
import Shimmer from "../components/Shimmer";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { swap } from "@formkit/drag-and-drop";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Client = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [client, setClient] = useState("");
  const [parent, orderedClient, setOrderedClient] = useDragAndDrop([], {
    group: "parent",
    plugins: [swap()],
  });
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/clients`)
      .then((res) => {
        setData(res.data);
        setOrderedClient(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const changeOrder = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/clients/order`,
        {
          data: orderedClient,
        }
      );
      toast.success("saved changes");
    } catch (error) {
      console.log(error);
    }
  };
  return data.length === 0 ? (
    <Shimmer />
  ) : (
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
          className="p-5 border rounded-xl grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1"
        >
          {orderedClient.map((item, index) => (
            <div
              onClick={() => {
                setClient(item);
                setIsEdit(!isEdit);
              }}
              key={index}
              className="m-2 border cursor-pointer  hover:bg-gray-100 p-3 rounded-xl"
            >
              <div className="flex flex-col items-center justify-center ">
                <div className=" h-[150px] md:h-[70px] w-full rounded-lg border flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.image}
                    alt="experts"
                    width={700}
                    height={700}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-2xl md:text-lg font-semibold my-2 md:my-1">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && (
        <AddClinetLogo
          isOpoen={isOpen}
          setIsOpen={setIsOpen}
          setData={setData}
        />
      )}
      {isEdit && (
        <EditClients
          clients={client}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
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

export default Client;
