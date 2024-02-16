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
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <div className="px-[17%] sm:px-5 md:px-6 bg-white py-[3%] ">
      <Head>
        <link
          rel="canonical"
          href="https://www.zigzagdigitalsolutions.com/contact"
          key="canonical"
        />
      </Head>
      <div className="w-full flex items-center flex-col">
        <h1 className="text-[#DB002F] text-3xl">Contact</h1>
        <h3 className="text-gray-500 my-8 text-xl md:text-center">
          Please fill in the below form and wait for one of our experts to get
          back you
        </h3>
        <div className="flex md:flex-col w-full">
          <div className="flex-1 sm:my-[7%]  flex items-center justify-center  overflow-hidden">
            <Image
              src={contactUs}
              alt="contact us icon"
              className="w-full md:w-[70%] h-full object-cover scale-[1.4] "
            />
          </div>
          <div className="flex-1  flex items-center justify-center">
            <form
              className="w-[80%] sm:w-[95%] "
              ref={form}
              onSubmit={sendEmail}
            >
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
                <option>How did you find us?</option>
                <option>Instagram</option>
                <option>Linkedin</option>
                <option>Twitter</option>
                <option>Youtube</option>
                <option>Google Search</option>
                <option>Recommendatio</option>
                <option>Other</option>
              </select>
              <select
                required
                className="border my-2 w-full p-3 bg-white border-red-300 rounded-xl appearance-none"
                name="enquiry"
              >
                <option>Enquiry on</option>
                <option>Full Digital Market Activity</option>
                <option>SEO</option>
                <option>Social Media Management</option>
                <option>Influencer Marketing</option>
                <option>Paid Ads</option>
                <option>Website Development </option>
                <option>Other</option>
              </select>
              <select
                className="border my-2 w-full p-3 bg-white border-red-300 rounded-xl appearance-none"
                name="budget"
              >
                <option>Select Your Budget</option>
                <option>Below 20,000 INR</option>
                <option>20,000-50,000 INR</option>
                <option>50,000-100,000 INR</option>
                <option>Above 1Lakh INR</option>
                <option>Other</option>
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
