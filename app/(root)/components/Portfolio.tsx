import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Work {
  image: string;
  _id: string;
}

const Portfolio = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/work?type=true`,
    {
      next: { revalidate: 100 },
    }
  );
  const staredWork: Work[] = await response.json();

  return (
    <div className="bg-white px-[12%] py-[5%] sm:px-5 md:px-6">
      <div className="text-center pt-6">
        <h4 className="text-3xl sm:text-2xl text-secondary font-medium">
          Portfolio
        </h4>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 py-[5%] sm:mt-4">
        {staredWork.slice(0, 8).map((item, index) => (
          <div
            key={`${item._id}-${index}`}
            className="h-[250px] sm:h-[150px] lg:h-[180px] rounded-xl bg-gray-400 overflow-hidden mx-2 mb-4"
          >
            <Image
              className="object-cover  w-full h-full hover:scale-105 transition-all duration-700"
              src={item.image}
              width={450}
              height={450}
              alt={item.image.split("/")[item.image.split("/").length - 1]}
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href={"/portfolio?type=all"}>
          <h4 className="text-red-500 font-medium hover:underline cursor-pointer">
            Explore more
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
