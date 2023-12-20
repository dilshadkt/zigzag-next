import React from "react";
import Image from "next/image";

interface Props {
  img: string;
}

const Card = ({ img }: Props) => {
  return (
    <div className="mx-1 h-[250px] rounded-xl bg-gray-400 overflow-hidden mb-3">
      <Image
        src={img}
        alt="image"
        width={100}
        height={100}
        className="object-cover  w-full h-full hover:scale-105 transition-all duration-700"
      />
    </div>
  );
};

export default Card;
