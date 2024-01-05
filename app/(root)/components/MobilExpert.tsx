import React, { useEffect, useState } from "react";
import Image from "next/image";
interface Expert {
  experts: Array<Datas>;
}
interface Datas {
  _id: string;
  image: string;
  name: string;
  role: string;
}
const MobilExpert = ({ experts }: Expert) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = experts.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, experts.length]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <div className="hidden md:flex  mt-[10%] relative w-[80vw] m-auto h-[300px] max-w-[800px] text-center  overflow-hidden   ">
      {experts.map((person, personIndex) => {
        const { _id, image, name, role } = person;
        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === experts.length - 1)
        ) {
          position = "lastSlide";
        }
        return (
          <div
            key={_id}
            className={`absolute top-[17%] left-0 w-full flex flex-col items-center   transition-all duration-500   opacity-0 ${
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
                width={100}
                height={100}
                alt={role}
              />
            </div>
            <h2 className="text-lg font-semibold text-primary">{name}</h2>
            <h4>{role}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default MobilExpert;
