"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import photo1 from "@/public/our-expert/a.jpg";
import photo2 from "@/public/our-expert/b.jpg";
import photo3 from "@/public/our-expert/c.jpg";
import photo4 from "@/public/our-expert/dilshad.jpg";
import photo5 from "@/public/our-expert/hakeem.jpg";
import photo6 from "@/public/our-expert/niyas.jpg";
import photo7 from "@/public/our-expert/unknown.jpeg";

const OurExpert = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex - 3) {
      setIndex(0);
    }
  }, [index]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  const people = [
    {
      id: 1,
      image: photo1,

      name: " Jubair",
      title: "Founder & Ceo",
    },
    {
      id: 2,
      image: photo2,
      name: "Hakeem",
      title: "Co-founder & Marketer ",
    },
    {
      id: 3,
      image: photo3,
      name: "Sainul Abid",
      title: "Graphic Designer  ",
    },
    {
      id: 4,
      image: photo4,
      name: "Dishad ",
      title: "Web Devoloper",
    },
    {
      id: 5,
      image: photo5,
      name: "Ajisha ",
      title: "Chief Social Media Analyst    ",
    },
    {
      id: 6,
      image: photo6,
      name: "Rishana ",
      title: "Social Media Marketer ",
    },
    {
      id: 7,
      image: photo7,
      name: "Sruthy Subhash",
      title: "Content Writer",
    },
    {
      id: 8,
      image: photo6,
      name: "Niyas",
      title: "Developer",
    },
  ];

  return (
    <div className="bg-white px-[12%] py-[2%] flex flex-col items-center">
      <div className="flex justify-center">
        <h2 className="text-3xl text-secondary font-medium">Our Experts</h2>
      </div>
      <div className="flex my-[5%]  overflow-hidden   max-w-[780px] ">
        {people.map((person) => {
          const { id, image, name, title } = person;

          return (
            <div
              className="w-full flex flex-col items-center  transition-all duration-500 mx-5"
              style={{ transform: `translateX(-${index * 125}%)` }}
              key={id}
            >
              <div className="w-[150px]   rounded-full border-4 overflow-hidden h-[150px]">
                <Image
                  className=" h-full w-full  object-cover  shadow-lg"
                  src={image}
                  alt={title}
                />
              </div>

              <h4 className="my-3 text-lg font-semibold">{name}</h4>
              <p className="text-center">{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurExpert;
