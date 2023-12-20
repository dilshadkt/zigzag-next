import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Work {
  image: string;
  _id: string;
}

const Portfolio = async () => {
  const response = await fetch("http://localhost:8080/work?type=true", {
    next: { revalidate: 100 },
  });
  const staredWork: Work[] = await response.json();

  return (
    <div className="bg-white px-[12%] py-[5%] sm:px-5">
      <div className="text-center pt-6">
        <h2 className="text-3xl sm:text-2xl text-secondary font-medium">
          Portfolio
        </h2>
      </div>
      <div className="grid grid-cols-4 py-[5%]">
        {staredWork.slice(0, 8).map((item, index) => (
          <div
            key={`${item._id}-${index}`}
            className="h-[250px] sm:w-[48%] rounded-xl bg-gray-400 overflow-hidden mx-2 mb-4"
          >
            <Image
              className="object-cover    w-full h-full hover:scale-105 transition-all duration-700"
              src={item.image}
              width={100}
              height={100}
              alt={item.image.split("/")[item.image.split("/").length - 1]}
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href={"/portfolio?type=all"}>
          <h4 className="text-red-500 hover:underline cursor-pointer">
            Explore more
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
