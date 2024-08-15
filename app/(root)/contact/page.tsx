"use client";
import React from "react";
import contactUs from "@/public/contact us digital marketing agency malappuram.png";
import Image from "next/image";
import ContactBox from "./ContactBox";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { contact } from "@/constant";
import { nanoid } from "nanoid";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

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
            toast.success("succefully filled");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <div className="md:px-[17%] px-6 bg-white py-[3%] ">
      <Head>
        <link
          rel="canonical"
          href="https://www.zigzagdigitalsolutions.com/contact"
          key="canonical"
        />
      </Head>
      <div className="w-full flex items-center flex-col">
        <h1 className="text-[#DB002F] text-3xl">Contact</h1>
        <h3 className="text-gray-500 my-8 md:text-xl text-center">
          Please fill in the below form and wait for one of our experts to get
          back you
        </h3>
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto w-full">
          <div className="flex-1 my-[7%]  flex items-center justify-center  overflow-hidden">
            <Image
              src={contactUs}
              alt="contact us icon"
              className="w-full md:w-[70%] h-full object-cover scale-[1.4] "
            />
          </div>
          <div className="flex-1  flex items-center justify-center">
            <form className="md:w-[80%] w-full" ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Enter your name"
                required
                name="name"
                className="border bg-white my-2 w-full p-3 border-red-300 rounded-xl"
              />
              <input
                type="number"
                required
                placeholder="Enter your mobile number"
                name="Number"
                className="border bg-white my-2 w-full p-3 border-red-300 rounded-xl"
              />
              <input
                type="email"
                placeholder="Enter your email"
                required
                name="email"
                className="border bg-white my-2 w-full p-3 border-red-300 rounded-xl"
              />
              <select
                required
                className="border my-2 w-full p-3 bg-white border-red-300 rounded-xl appearance-none"
                name="find-us"
              >
                {contact.findUs.map((item) => (
                  <option key={nanoid()}>{item}</option>
                ))}
              </select>
              <select
                required
                className="border my-2 w-full p-3 bg-white border-red-300 rounded-xl appearance-none"
                name="enquiry"
              >
                {contact.enquiry.map((item) => (
                  <option key={nanoid()}>{item}</option>
                ))}
              </select>
              <select
                className="border my-2 w-full p-3 bg-white border-red-300 rounded-xl appearance-none"
                name="budget"
              >
                {contact.budget.map((item) => (
                  <option key={nanoid()}>{item}</option>
                ))}
              </select>
              <textarea
                className="border my-2 w-full p-3 bg-white border-red-300 rounded-xl"
                name="message"
                placeholder="message"
              ></textarea>
              <button className="p-3 bg-red-300   rounded-xl">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <ContactBox />
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
    </div>
  );
};

export default Contact;
