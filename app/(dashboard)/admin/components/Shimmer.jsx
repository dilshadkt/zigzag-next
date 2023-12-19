import React from "react";

const Shimmer = () => {
  const dummy = new Array(12).fill("");
  return (
    <div className="grid grid-cols-4 animate-pulse mt-[3%]">
      {dummy.map((item, index) => (
        <div
          key={`${index}-0`}
          className="h-[220px] bg-gray-300 m-5 rounded-xl p-5 border"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
