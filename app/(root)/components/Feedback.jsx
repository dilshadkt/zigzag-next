import React from "react";
import "react-multi-carousel/lib/styles.css";

const Feedback = () => {
  const arr = new Array(10).fill("");

  return (
    <div className="bg-white px-[12%] sm:px-5">
      <div className="carousel rounded-box overflow-hidden pt-[5%] flex"></div>
    </div>
  );
};

export default Feedback;
