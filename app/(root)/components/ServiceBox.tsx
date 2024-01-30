import React from "react";
interface Props {
  data: string[];
}

const ServiceBox = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-2">
      {data.map((item, index) => (
        <div
          className="px-3 md:p-[10%]  py-[4%] sm:p-2  text-secondary hover:shadow-md transition-all duration-200 flex-1 m-1 rounded-2xl flex items-center "
          key={`${item}-${index}`}
        >
          <h4 className="text-center text-lg  md:text-sm"> {item}</h4>
        </div>
      ))}
    </div>
  );
};

export default ServiceBox;
