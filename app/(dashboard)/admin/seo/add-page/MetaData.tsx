import React from "react";

const MetaData = ({ register }: any) => {
  return (
    <div className=" my-3 p-5 rounded-xl font-medium bg-gray-200  text-black border shadow-xl">
      <div className="grid grid-cols-5">
        <label>Meta Title :</label>
        <input
          type="text"
          {...register("metaData.metaTitle")}
          className="bg-white  col-span-3 p-2 rounded-xl outline-none"
        />
      </div>
      <div className="grid grid-cols-5 my-2">
        <label>Meta Description :</label>
        <textarea
          {...register("metaData.metaDescription")}
          className="bg-white  col-span-3 p-2 rounded-xl outline-none"
        />
      </div>
      <div className="grid grid-cols-5">
        <label>Meta KeyWord :</label>
        <input
          type="text"
          {...register("metaData.metaKeyWord")}
          className="bg-white  col-span-3 p-2 rounded-xl outline-none"
        />
      </div>
      <div className="grid grid-cols-5 my-2">
        <label>OG Title :</label>
        <input
          type="text"
          {...register("metaData.ogTitle")}
          className="bg-white col-span-3 p-2 rounded-xl outline-none"
        />
      </div>
      <div className="grid grid-cols-5 my-2">
        <label>OG Description :</label>
        <textarea
          {...register("metaData.ogDescription")}
          className="bg-white col-span-3 p-2 rounded-xl outline-none"
        />
      </div>
      <div className="grid grid-cols-5 my-2">
        <label>Path :</label>
        <div className="col-span-3   ">
          <input
            type="text"
            {...register("metaData.path")}
            className="bg-white w-full p-2 rounded-xl outline-none"
            required
          />
          <p className="text-sm text-gray-500 my-2">
            😊 This will be the path to this page ⬆️
          </p>
        </div>
      </div>
    </div>
  );
};

export default MetaData;
