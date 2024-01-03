import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 m-auto bg-black flex items-center justify-center  z-40 opacity-50">
      <span className="loading loading-spinner loading-lg text-white"></span>
    </div>
  );
};

export default Loading;
