import React from "react";
import client from "@/public/whychoose/Client-Centric-Digital-Marketing-Malappuram.gif";
import result from "@/public/whychoose/Result-Oriented-Digital-Marketing-Malappuram.gif";
import innovation from "@/public/whychoose/Innovative-Digital-Marketing-Malappuram.gif";
import transperancy from "@/public/whychoose/Transparency-Digital-Marketing-Malappuram.gif";
import Image from "next/image";
const Whychoose = () => {
  const data = [
    {
      image: client,
      title: "Client Centric",
      desc: "As our client, your needs and objectives are at the forefront of every strategy and campaign we create.",
    },
    {
      image: result,
      title: "Result Oriented",
      desc: "Rather than a generic marketing approach, we provide a more dedicated result-oriented approach",
    },
    {
      image: innovation,
      title: "Innovative",
      desc: "What makes us truly unique is our innovative approach to solutions with cutting-edge Technology.",
    },
    {
      image: transperancy,
      title: "Transparency",
      desc: "Maintaining trust and communication with the clients is very important for us for a fruitful partnership.",
    },
  ];
  return (
    <div className="bg-white px-[12%] sm:px-5">
      <div className="text-center">
        <h1 className="text-3xl sm:text-2xl sm:py-[8%] text-secondary font-medium">
          Why Zig Zag As Your Trusted Digital Marketing Agency In Malappuram
        </h1>
      </div>
      <div className="py-[6%]  flex flex-wrap">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-1 bg-box m-2 sm:min-w-[200px] rounded-xl flex flex-col items-center px-4 py-5 hover:shadow-lg transition-all duration-500 cursor-pointer"
          >
            <Image
              src={item.image}
              alt={item.image}
              width={60}
              className="opacity-70"
            />
            <h3 className="my-3 font-semibold">{item.title}</h3>
            <p className="text-center text-secondary">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whychoose;
