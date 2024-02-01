import React from "react";
interface Props {
  data: string[];
}

const ServiceBox = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-2">
      {data.map((item, index) => (
        <div
          className="px-3 md:p-[10%]  py-[10%] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]  text-secondary  transition-all duration-200 flex-1 m-1 rounded-2xl flex items-center "
          key={`${item}-${index}`}
        >
          <h4 className="text-center text-[15px] font-semibold  md:text-sm">
            {" "}
            {item}
          </h4>
        </div>
      ))}
    </div>
  );
};

export default ServiceBox;
