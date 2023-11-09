import React from "react";
import Anekavarna from "../../public/client-logo/Anekavarna---Logo..png";
import BIDON from "../../public/client-logo/BIDON-2.png";
import INDIAN from "../../public/client-logo/INDIAN HABIBI.png";
import kayil from "../../public/client-logo/kayil.png";
import kems from "../../public/client-logo/kems.png";
import LIYAK from "../../public/client-logo/LIYAK.png";
import midas from "../../public/client-logo/midas..png";
import poke from "../../public/client-logo/poke.png";
import skyblue from "../../public/client-logo/skyblue.png";
import white from "../../public/client-logo/white.png";
import Image from "next/image";

const OurClient = () => {
  const data = [
    { image: Anekavarna },
    { image: BIDON },
    { image: INDIAN },
    { image: kayil },
    { image: kems },
    { image: LIYAK },
    { image: midas },
    { image: poke },
    { image: skyblue },
    { image: white },
  ];
  return (
    <div className="bg-white px-[12%] ">
      <div className="text-center">
        <h2 className="text-3xl text-secondary font-medium">Our Clientele</h2>
      </div>
      <div className="flex  flex-wrap py-[6%]">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-1 min-w-[22%] max-w-[22%] hover:shadow-md transition-all duration-600 flex justify-center m-3 rounded-xl bg-white "
          >
            <Image
              src={item.image}
              alt={item.image}
              className="w-fit object-fill h-[90px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClient;
