import React, { useEffect, useState } from "react";
import Image from "next/image";
import photo1 from "@/public/our-expert/a.jpg";
import photo2 from "@/public/our-expert/b.jpg";
import photo3 from "@/public/our-expert/c.jpg";
import photo4 from "@/public/our-expert/dilshad.jpg";
import photo5 from "@/public/our-expert/hakeem.jpg";
import photo6 from "@/public/our-expert/niyas.jpg";
import photo7 from "@/public/our-expert/unknown.jpeg";
const MobilExpert = () => {
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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <div className="hidden md:flex  mt-[10%] relative w-[80vw] m-auto h-[300px] max-w-[800px] text-center  overflow-hidden   ">
      {people.map((person, personIndex) => {
        const { id, image, name, title } = person;
        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <div
            key={id}
            className={`absolute top-0 left-0 w-full flex flex-col items-center   transition-all duration-500   opacity-0 ${
              position === "activeSlide" && `opacity-100`
            }`}
            style={{
              transform: `${
                position === "activeSlide"
                  ? `translateX(0) `
                  : position === "nextSlide"
                  ? `translateX(100%)`
                  : `translateX(-100%)`
              } `,
            }}
          >
            <div className="w-[150px] mb-3  rounded-full border-4 overflow-hidden h-[150px]">
              <Image
                className=" h-full w-full  object-cover  shadow-lg"
                src={image}
                alt={title}
              />
            </div>
            <h2 className="text-lg font-semibold text-primary">{name}</h2>
            <h4>{title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default MobilExpert;
