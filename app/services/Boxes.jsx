"use client";
import React, { useState } from "react";
import Corperate5 from "../../public/services/corperate/Online Presence.jpg";

import Image from "next/image";

const Boxes = ({ datas }) => {
  const [content, setContent] = useState([]);
  function changeTheme(id) {
    const result = datas.filter((item) => item.id === id);
    setContent(result[0]);
  }
  console.log(content);
  return (
    <div className="flex ">
      <div className="flex-initial w-[30%] ">
        <div className="flex justify-between flex-wrap">
          {datas.map((item, index) => (
            <div
              onMouseEnter={() => changeTheme(item.id)}
              key={`${item}-${index}`}
              className="relative w-[48%] h-[170px] cursor-pointer flex  overflow-hidden items-center justify-center rounded-2xl my-2  bg-red-600"
            >
              <Image
                src={item.img}
                alt="Brand Consistency"
                className="w-full h-full object-cover opacity-50 hover:scale-110 transition-all duration-700"
              />
              <h3 className="absolute text-white text-lg font-medium">
                {item.title.split(".")[1]}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 ml-5 rounded-2xl overflow-hidden my-2 flex items-center justify-center  ">
        <Image
          src={Corperate5}
          alt="Online Presence"
          className=" opacity-30 h-full"
        />
        <div className="absolute">
          <h2>{content.title}</h2>
          <p>{content.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
