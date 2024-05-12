import React from "react";
import parse from "html-react-parser";
import Image from "next/image";
import SchoolIcon from "@mui/icons-material/School";
import { nanoid } from "nanoid";
const PreviewPage = ({
  setIsOpen,
  data,
}: {
  setIsOpen: React.Dispatch<boolean>;
  data: any;
}) => {
  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className=" fixed top-0 bottom-0 right-0 left-0 m-auto bg-black opacity-40 z-40 "
      ></div>
      <div className="fixed top-0 bottom-0 right-0 left-0 m-auto bg-white z-50 w-[70%] my-4  overflow-scroll">
        {data?.page?.map((item: any) => (
          <div key={nanoid()} className="mb-4">
            <div className="bg-blue-200 h-[80px] text-blue-950 font-bold text-xl flex items-center justify-start px-5">
              <SchoolIcon /> <span className="mx-2">{item?.heading}?</span>
            </div>
            {item?.image && (
              <div className="h-[300px] w-full overflow-hidden flex-center my-3">
                <Image
                  src={URL.createObjectURL(item?.image[0])}
                  alt={item?.heading}
                  width={400}
                  height={280}
                  className=" object-cover"
                />
              </div>
            )}
            <p className="px-2 text-justify">{parse(item?.description)}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PreviewPage;
