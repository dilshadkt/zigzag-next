"use client";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Modal from "./Modal";
import { nanoid } from "nanoid";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Link from "next/link";

const Offer = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [offers, setOffers] = useState<Offer[] | null>(null);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/offer`)
      .then((res) => setOffers(res.data.offers))
      .catch((err) => toast.warning("failed to fetch offers"));
  }, []);
  return (
    <>
      <nav className="flex items-center justify-end my-[2%] md:mx-3">
        <div
          onClick={() => setIsModalOpen(true)}
          className="cursor-pointer hover:text-red-400"
          title="add image"
        >
          <AddIcon />
        </div>
      </nav>

      <section className="p-5 border w-full min-h-[80vh] rounded-lg flex mt-5">
        {offers ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
              {offers.map((item) => (
                <div
                  className="border p-2 shadow-md rounded-lg overflow-hidden h-[350px]"
                  key={nanoid()}
                >
                  <Image
                    src={item.image}
                    alt="offer banner"
                    width={300}
                    height={400}
                    className="w-full"
                  />
                  <form className="py-3 flex flex-col">
                    <div className="relative">
                      <label className="font-semibold absolute -top-1 left-4 px-3   bg-white text-gray-500 text-sm ">
                        Link
                      </label>
                      <input
                        type="text"
                        value={item.link}
                        disabled
                        className="w-full p-3 bg-white rounded-lg outline-none border my-1 "
                      />
                    </div>
                    <div className=" flex items-center">
                      <label className="font-semibold text-gray-700 mt-1  text-sm">
                        Status :
                      </label>
                      <label className="swap mt-[5px] ml-2 hover:font-semibold hover:text-gray-800">
                        <input type="checkbox" disabled />
                        <div className="swap-on">ON</div>
                        <div className="swap-off">OFF</div>
                      </label>
                    </div>
                  </form>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="w-full h-[200px] bg-gray-300 rounded-lg flex items-center justify-center">
            <div
              onClick={() => setIsModalOpen(true)}
              className="flex cursor-pointer group"
            >
              <LocalOfferIcon className="text-blue-500 group-hover:text-gray-800" />
              <p className="mx-2 text-lg text-gray-600 group-hover:text-gray-800 font-semibold">
                Add new offers
              </p>
            </div>
          </div>
        )}
      </section>
      {isModalOpen && (
        <Modal setOffers={setOffers} setIsModalOpen={setIsModalOpen} />
      )}
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
    </>
  );
};

export default Offer;
