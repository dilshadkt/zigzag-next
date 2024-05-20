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

import { useForm } from "react-hook-form";
import Card from "./Card";
const Offer = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [offers, setOffers] = useState<Offer[] | null>(null);
  const [isEditEnalbe, setIsEditEnable] = useState<boolean>(false);
  const { register, watch } = useForm();
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/offer`)
      .then((res) => setOffers(res.data.offers))
      .catch((err) => {
        toast.warning("failed to fetch offers");
        console.log(err);
      });
  }, []);

  const SaveChanges = () => {
    setIsEditEnable(false);
  };
  console.log(watch());
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
      {offers?.length !== 0 ? (
        <section className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 w-full gap-3">
          {offers?.map((item) => (
            <Card
              key={item._id}
              offer={item}
              offers={offers}
              setOffers={setOffers}
            />
          ))}
        </section>
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
