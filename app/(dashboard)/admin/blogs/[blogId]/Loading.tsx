import React from "react";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 m-auto bg-white opacity-50 animate-pulse flex items-center justify-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default Loading;
