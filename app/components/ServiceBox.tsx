import React from "react";
interface Props {
  data: string[];
}

const ServiceBox = ({ data }: Props) => {
  return (
    <div className="flex flex-wrap">
      {data.map((item, index) => (
        <div
          className="px-3 sm:min-w-[200px] py-[4%] sm:p-7  text-secondary hover:shadow-md transition-all duration-200 flex-1 m-1 bg-box rounded-2xl flex items-center "
          key={`${item}-${index}`}
        >
          <h4 className="text-center text-lg"> {item}</h4>
        </div>
      ))}
    </div>
  );
};

export default ServiceBox;
