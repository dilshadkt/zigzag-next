"use client";
import React, { useState } from "react";
import { useFieldArray } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
const NextedArray = ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `test.${nestIndex}.nestedArray`,
  });
  const [isDescOpen, setIsDescOpen] = useState([]);
  const [isImgOpen, setIsImgOpen] = useState([]);
  const handleDescription = (data) => {
    if (isDescOpen.includes(data)) {
      setIsDescOpen((prev) => prev.filter((item) => item !== data));
    } else {
      setIsDescOpen((prev) => [...prev, data]);
    }
  };
  const handleImageOpen = (data) => {
    if (isImgOpen.includes(data)) {
      setIsImgOpen((prev) => prev.filter((item) => item !== data));
    } else {
      setIsImgOpen((prev) => [...prev, data]);
    }
  };

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <div key={item.id} className="ml-[5%] ">
            <div className="flex">
              <input
                type="text"
                placeholder="subhead..."
                className="p-3 w-1/2 border rounded-xl my-1"
                {...register(`test.${nestIndex}.nestedArray.${k}.subhead`)}
              />
              <button
                type="button"
                className="ml-3 hover:text-red-500"
                onClick={() => remove(k)}
              >
                <DeleteIcon />
              </button>
              <button
                onClick={() => handleDescription(item.id)}
                className="hover:text-blue-500 mx-3"
              >
                <ListAltIcon />
              </button>
              <button
                onClick={() => handleImageOpen(item.id)}
                className="hover:text-green-500 mx-3"
              >
                <InsertPhotoIcon />
              </button>
              <button type="button" onClick={() => append({ subhead: "" })}>
                <AddIcon />
              </button>
            </div>
            <div
              className={`${isDescOpen.includes(item.id) ? `flex` : `hidden`} `}
            >
              <textarea
                placeholder="description of subhead..."
                {...register(`test.${nestIndex}.nestedArray.${k}.desc`)}
                className="w-3/4 my-2 rounded-xl p-3"
              />
            </div>

            <div
              className={`${
                isImgOpen.includes(item.id) ? `flex` : `hidden`
              } p-3 border rounded-xl w-1/2 my-2`}
            >
              <input
                type="file"
                {...register(`test.${nestIndex}.nestedArray.${k}.img`)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NextedArray;
