import React from "react";

const Loading = () => {
  const boxes = new Array(9).fill("");
  return (
    <div className="h-[100vh] max-w-screen-lg mx-auto">
      <div className="grid md:grid-cols-3 animate-pulse grid-cols-2 ">
        {boxes.map((item, index) => (
          <div
            key={index}
            className="m-2 sm:h-[260px] lg:h-fit max-h-[340px] h-fit md:h-[340px] bg-gray-300 rounded-xl"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
