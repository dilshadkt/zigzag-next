import React from "react";
import guid from "../../public/blogs/A Guide to Boosting Online Visibility for Digital Marketing Agency in Kerala.jpg";
import Expert from "../../public/blogs/Digital Marketing Agency Expert Strategies for  Businesses.jpeg";
import Proven from "../../public/blogs/Digital Marketing Agency Proven Strategies for Online Success.jpg";
import Help from "../../public/blogs/How To Digital Marketing Agency Helps Businesses Stay Ahead.jpg";
import Image from "next/image";
const Blogs = () => {
  const data = [
    {
      image: guid,
      title: "We Serve You The Best Digital 10 Marketing Agency In Kerala",
    },
    {
      image: Expert,
      title:
        "Searching For The Top Digital Marketing Training Center In Kerala? Look No Further",
    },
    {
      image: Proven,
      title: "Are You Hunting For Malappuram’s Best Digital Marketing Agency?",
    },
    {
      image: Help,
      title:
        "Unlocking Organic Traffic: A Guide To Boosting Online Visibility For Zig Zag Digital Marketing Agency In Manjeri, Kerala",
    },
  ];
  return (
    <div className="bg-white px-[12%] py-6 sm:px-5">
      <div className="text-center">
        <h2 className="text-3xl sm:text-2xl text-secondary font-medium">
          Blogs
        </h2>
      </div>
      <div className="flex  flex-wrap py-[6%]">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-1 sm:min-w-[200px] flex flex-col bg-box  m-2 rounded-xl overflow-hidden hover:shadow-lg pb-3 transition-all  duration-700 cursor-pointer"
          >
            <div className="w-full flex-initial h-[200px] overflow-hidden ">
              <Image
                src={item.image}
                alt={item.image}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center flex-1 w-full  ">
              <h3 className="text-center text-secondary">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <h4 className="text-red-500 hover:underline cursor-pointer">
          Explore more
        </h4>
      </div>
    </div>
  );
};

export default Blogs;
