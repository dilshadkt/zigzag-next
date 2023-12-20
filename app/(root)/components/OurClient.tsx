import React from "react";

import Image from "next/image";

interface ClinetLogo {
  image: string;
  name: string;
  _id: string;
}

const OurClient = async () => {
  const response = await fetch("http://localhost:8080/clients", {
    next: { revalidate: 10 },
  });
  const clientLogo: ClinetLogo[] = await response.json();

  return (
    <div className="bg-white px-[12%] sm:px-5 ">
      <div className="text-center">
        <h2 className="text-3xl sm:text-2xl sm:py-[8%] text-secondary font-medium">
          Our Clientele
        </h2>
      </div>
      <div className="grid grid-cols-4 py-[6%] sm:justify-center">
        {clientLogo.map((item, index) => (
          <div
            key={`${item._id}-${index}`}
            className="flex-1  bg-white  sm:min-w-[40%]  hover:shadow-md transition-all duration-600 flex justify-center m-3 rounded-xl "
          >
            <Image
              src={item.image}
              alt={item.image.split("/")[item.image.split("/").length - 1]}
              width={100}
              height={100}
              className="w-fit object-fill h-[90px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClient;
