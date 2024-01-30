import React from "react";
import Image from "next/image";

interface Props {
  img: string;
}

const Card = ({ img }: Props) => {
  return (
    <div className="mx-1 h-[300px] sm:h-[150px] lg:h-[180px]  rounded-xl bg-gray-400 overflow-hidden mb-3">
      <Image
        src={img}
        alt={img.split("/")[img.split("/").length - 1]}
        width={400}
        height={400}
        quality={90}
        className="object-cover sm:object-fill  w-full h-full hover:scale-105 transition-all duration-700"
      />
    </div>
  );
};

export default Card;
