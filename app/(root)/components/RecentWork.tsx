import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Latest {
  _id: string;
  image: string;
}

const RecentWork = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/work/latest`
  );
  const latestWork: Latest[] = await response.json();

  return (
    <div className="bg- max-w-screen-xl mx-auto  mb-40 md:px-6 px-3">
      <h4 className="text-xl font-semibold">Our Recent Works</h4>
      <div className="grid grid-cols-4 my-6  ">
        {latestWork.slice(0, 4).map((item, index) => (
          <div
            key={`${item._id}-${index}`}
            className="mx-1 h-[80px] sm:h-[140px]  md:h-[180px] lg:h-[230px]  xl:h-[290px] rounded-xl bg-gray-400 overflow-hidden mb-4"
          >
            <Image
              className="object-cover   w-full h-full hover:scale-105 transition-all duration-700"
              src={item.image}
              alt={item.image.split("/")[item.image.split("/").length - 1]}
              width={400}
              height={400}
            />
          </div>
        ))}
      </div>
      <div>
        <Link href={"/portfolio?type=all"}>
          <h3 className="text-red-500 font-medium hover:underline text-center cursor-pointer">
            Explore More
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default RecentWork;
