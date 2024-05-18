import React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import { nanoid } from "nanoid";
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
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-16 px-3 md:px-5">
        <div className="text-center pt-6">
          <h4 className="md:text-3xl text-2xl text-secondary font-medium">
            Portfolio
          </h4>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 py-[5%] mt-4">
          {staredWork.slice(0, 8).map((item, index) => (
            <Card img={item.image} key={nanoid()} />
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
    </div>
  );
};

export default Portfolio;
