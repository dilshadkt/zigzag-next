import React from "react";
import AddIcon from "@mui/icons-material/Add";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
const Offer = () => {
  return (
    <>
      <nav className="flex items-center justify-end my-[2%] md:mx-3">
        <div
          // onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer hover:text-red-400"
          title="add image"
        >
          <AddIcon />
        </div>
      </nav>

      <section className="p-5 border w-full min-h-[80vh] rounded-lg flex mt-5">
        <div className="w-full h-[200px] bg-gray-300 rounded-lg flex items-center justify-center">
          <div className="flex cursor-pointer group">
            <LocalOfferIcon className="text-blue-500 group-hover:text-gray-800" />
            <p className="mx-2 text-lg text-gray-600 group-hover:text-gray-800 font-semibold">
              Add new offers
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
