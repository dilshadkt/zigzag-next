import React from "react";
import Image from "next/image";

interface Props {
  img: string;
}

const Card = ({ img }: Props) => {
  return (
    <div className="mx-1 sm:h-[200px] lg:h-[320px] h-[150px] md:h-[280px]  rounded-xl bg-gray-400 overflow-hidden mb-3">
      <Image
        src={img}
        alt={img.split("/")[img.split("/").length - 1]}
        width={400}
        height={400}
        loading="eager"
        className="md:object-cover object-fill  w-full h-full hover:scale-105 transition-all duration-700"
      />
    </div>
  );
};

export default Card;
