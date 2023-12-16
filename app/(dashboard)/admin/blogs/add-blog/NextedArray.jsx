"use client";
import React, { useState } from "react";
import { useFieldArray } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";
const NextedArray = ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `test.${nestIndex}.nestedArray`,
  });
  const [isDescOpen, setIsDescOpen] = useState([]);
  const handleDescription = (data) => {
    console.log(data);
    if (isDescOpen.includes(data)) {
      setIsDescOpen((prev) => prev.filter((item) => item !== data));
    } else {
      setIsDescOpen((prev) => [...prev, data]);
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
                {...register(`test.${nestIndex}.nestedArray.${k}.subhead`, {
                  required: true,
                })}
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
                type="button"
                onClick={() => append({ subhead: "sub head" })}
              >
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
          </div>
        );
      })}
    </div>
  );
};

export default NextedArray;
