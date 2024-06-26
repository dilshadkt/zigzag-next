import React from "react";

import Image from "next/image";

interface ClinetLogo {
  image: string;
  name: string;
  _id: string;
}

const OurClient = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/clients`, {
    next: { revalidate: 10 },
  });
  const clientLogo: ClinetLogo[] = await response.json();

  return (
    <div className="bg-white">
      <div className=" max-w-screen-xl mx-auto px-3 md:px-5">
        <div className="text-center">
          <h4 className="md:text-3xl text-2xl md:py-5 py-[8%] text-secondary font-medium">
            Our Clientele
          </h4>
        </div>
        <div className="grid lg:grid-cols-4 py-[6%] justify-center md:grid-cols-3 grid-cols-2 ">
          {clientLogo.map((item, index) => (
            <div
              key={`${item._id}-${index}`}
              className="flex-1  bg-white hover:shadow-md transition-all duration-600 hover:scale-105    flex justify-center m-3 rounded-xl "
            >
              <Image
                src={item.image}
                alt={item.image.split("/")[item.image.split("/").length - 1]}
                width={400}
                height={300}
                quality={100}
                className="w-[50%] object-contain   md:object-contain h-[80px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClient;
