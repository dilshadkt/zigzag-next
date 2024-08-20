"use client";
import { contact } from "@/constant";
import { nanoid } from "nanoid";
import React, { useEffect, useRef, useState } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CloseIcon from "@mui/icons-material/Close";
import { mobileCountrycode } from "@/constant/countryCode";
import Image from "next/image";
import emailjs from "@emailjs/browser";
const ContactModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);
  const [isSelcteCountryOpen, SetSelcteCountryOpen] = useState(false);
  const [country, setCountry] = useState("IN");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }

    // Clean up when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const hasVisitedBefor = localStorage.getItem("hasVisited");
    if (!hasVisitedBefor) {
      setTimeout(() => {
        setIsModalOpen(true);
      }, 7000);
    }
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_uyx61ym",
          "template_k438js2",
          form.current,
          "feYFFeEJ8N7t8b0ih"
        )
        .then(
          (result) => {
            form.current?.reset();
            localStorage.setItem("hasVisited", "true");
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          setIsLoading(false);
          setIsModalOpen(false);
        });
    }
  };
  return (
    <section
      className={`${
        isModalOpen ? `flex` : `hidden`
      } flex bg-black/30 fixed  items-center justify-center z-50 w-full h-screen top-0 bottom-0 left-0 right-0 m-auto`}
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="relative bg-white p-7 flex flex-col shadow-lg justify-between w-fit rounded-xl h-fit sm:h-[50%]"
      >
        <h4 className="capitalize text-center mt-6 sm:mt-2  font-bold text-lg">
          Fill out the form & get free consultation
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-8">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              <label className="text-sm font-semibold">NAME</label>
              <input
                type="text"
                required
                name="name"
                className="p-3 rounded-lg bg-[#D6D6D6] mt-2"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">EMAIL</label>
              <input
                type="email"
                required
                name="email"
                className="p-3 rounded-lg bg-[#D6D6D6] mt-2"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-col">
              <label className="text-sm font-semibold">SELECT SERVICE</label>
              <div className="w-full h-full relative text-xl">
                <select
                  required
                  className="  w-full p-3 mt-2  text-base rounded-lg bg-[#D6D6D6] appearance-none"
                  name="find-us"
                >
                  {contact.findUs.map((item) => (
                    <option key={nanoid()}>{item}</option>
                  ))}
                </select>
                <ArrowDownwardIcon
                  className="absolute top-2 bottom-0 my-auto right-3 text-gray-400"
                  fontSize="inherit"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold">PHONE NUMBER</label>
              <div className="mt-2 flex items-center w-full relative">
                <div
                  onClick={() => SetSelcteCountryOpen(!isSelcteCountryOpen)}
                  className=" mr-2 flex items-center  h-full  cursor-pointer "
                >
                  <div className="w-[50px] aspect-square rounded-lg overflow-hidden ">
                    <Image
                      src={
                        mobileCountrycode[
                          country as keyof typeof mobileCountrycode
                        ].image
                      }
                      alt="flag"
                      width={60}
                      height={60}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <ArrowDownwardIcon
                    className="  text-gray-400 ml-1"
                    fontSize="small"
                  />
                  {isSelcteCountryOpen && (
                    <div className="bg-white shadow-lg py-2 overflow-y-auto  w-fit h-[150px] bottom-[55px] rounded-lg absolute">
                      {Object.keys(mobileCountrycode).map((item) => (
                        <div
                          key={nanoid()}
                          onClick={() => setCountry(item)}
                          className="flex items-center hover:bg-gray-300"
                        >
                          <div className="w-10 aspect-square rounded-lg flex items-center">
                            <Image
                              width={40}
                              height={40}
                              src={
                                mobileCountrycode[
                                  item as keyof typeof mobileCountrycode
                                ].image
                              }
                              alt="flag"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-sm ml-1">
                            {
                              mobileCountrycode[
                                item as keyof typeof mobileCountrycode
                              ].name
                            }
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="number"
                  required
                  name="Number"
                  className="p-3 rounded-lg flex-1 bg-[#D6D6D6] "
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="bg-[#DB002F] w-full rounded-lg p-3 text-white font-medium mt-5 sm:mt-3 flex items-center justify-center">
          {isLoading ? "SUBMITING......" : " SEND YOUR MESSAGE"}
        </button>
        <div
          onClick={() => setIsModalOpen(false)}
          className="absolute top-7  right-5 cursor-pointer text-gray-500 hover:text-black transition-all duration-300"
          title="cancel"
        >
          <CloseIcon />
        </div>
      </form>
    </section>
  );
};

export default ContactModal;
