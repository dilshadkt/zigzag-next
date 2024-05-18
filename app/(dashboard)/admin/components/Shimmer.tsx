import React from "react";

const Shimmer = () => {
  const dummy = new Array(12).fill("");
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 animate-pulse mt-[3%]">
      {dummy.map((item, index) => (
        <div
          key={`${index}-0`}
          className="md:h-[220px] h-[120px] bg-gray-300 m-1 rounded-xl p-5 border"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
