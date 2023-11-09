import React from "react";
import contactUs from "../../public/contact us digital marketing agency malappuram.png";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="mx-[17%] my-[3%]">
      <div className="w-full flex items-center flex-col">
        <h1 className="text-[#DB002F] text-3xl">Contact</h1>
        <h3 className="text-gray-500 my-8 text-xl">
          Please fill in the below form and wait for one of our experts to get
          back you
        </h3>
        <div className="flex w-full">
          <div className="flex-1  flex items-center justify-center  overflow-hidden">
            <Image
              src={contactUs}
              alt="contact us icon"
              className="w-full h-full object-cover scale-[1.4] "
            />
          </div>
          <div className="flex-1  flex items-center justify-center">
            contact us form
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
