import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
const SubHead = ({ register, Parentitem }) => {
  const [subArr, setSubArry] = useState([0]);
  const removeSubHead = (item) => {
    setSubArry((prev) => prev.filter((items) => items !== item));
  };
  return (
    <>
      {subArr.map((item, index) => (
        <div key={`${index}-${item}`} className="group: flex items-center">
          <input
            {...register(`subHead${Parentitem}-${item}`)}
            type="text"
            className="w-1/2 p-2 cursor-pointer my-2 "
          />
          <div
            onClick={() => setSubArry((pre) => [...pre, pre.length])}
            className="mx-2 invisible group-hover:visible cursor-pointer hover:text-red-500"
          >
            <AddIcon />
          </div>
          <div
            onClick={() => removeSubHead(item)}
            className="mx-2 invisible group-hover:visible cursor-pointer hover:text-red-500"
          >
            <DeleteIcon />
          </div>
        </div>
      ))}
    </>
  );
};

export default SubHead;
