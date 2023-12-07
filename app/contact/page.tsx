import React from "react";
import contactUs from "../../public/contact us digital marketing agency malappuram.png";
import Image from "next/image";
import ContactBox from "./ContactBox";

const Contact = () => {
  return (
    <div className="mx-[17%] sm:mx-5 my-[3%] ">
      <div className="w-full flex items-center flex-col">
        <h1 className="text-[#DB002F] text-3xl">Contact</h1>
        <h3 className="text-gray-500 my-8 text-xl sm:text-center">
          Please fill in the below form and wait for one of our experts to get
          back you
        </h3>
        <div className="flex sm:flex-col w-full">
          <div className="flex-1 sm:my-[7%]  flex items-center justify-center  overflow-hidden">
            <Image
              src={contactUs}
              alt="contact us icon"
              className="w-full sm:w-[70%] h-full object-cover scale-[1.4] "
            />
          </div>
          <div className="flex-1  flex items-center justify-center">
            <form className="w-[80%] sm:w-[95%]">
              <input
                type="text"
                placeholder="Enter your name"
                name="Name"
                className="border my-2 w-full p-3 border-red-300 rounded-xl"
              />
              <input
                type="number"
                placeholder="Enter your mobile number"
                name="Number"
                className="border my-2 w-full p-3 border-red-300 rounded-xl"
              />
              <input
                type="email"
                placeholder="Enter your email"
                name="Email"
                className="border my-2 w-full p-3 border-red-300 rounded-xl"
              />
              <select className="border my-2 w-full p-3 border-red-300 rounded-xl">
                <option>How did you find us?</option>
                <option>Instagram</option>
                <option>Linkedin</option>
                <option>Twitter</option>
                <option>Youtube</option>
                <option>Google Search</option>
                <option>Recommendatio</option>
                <option>Other</option>
              </select>
              <select className="border my-2 w-full p-3 border-red-300 rounded-xl">
                <option>Enquiry on</option>
                <option>Full Digital Market Activity</option>
                <option>SEO</option>
                <option>Social Media Management</option>
                <option>Influencer Marketing</option>
                <option>Paid Ads</option>
                <option>Website Development </option>
                <option>Other</option>
              </select>
              <textarea className="border my-2 w-full p-3 border-red-300 rounded-xl"></textarea>
              <button className="p-3 bg-red-300  rounded-xl">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <ContactBox />
    </div>
  );
};

export default Contact;
