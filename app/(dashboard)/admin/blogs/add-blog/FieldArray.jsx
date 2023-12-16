import React from "react";
import { useFieldArray } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import NextedArray from "./NextedArray";
const FieldArray = ({ control, register }) => {
  const { fields, append, remove, insert } = useFieldArray({
    control,
    name: "test",
  });
  return (
    <>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <div className="flex items-center ">
                <input
                  {...register(`test.${index}.name`)}
                  className="bg-transparent p-3 w-1/2 my-2 text-lg"
                  placeholder="heading 2....."
                />

                <div
                  className=" hover:text-red-500 cursor-pointer ml-2"
                  onClick={() => remove(index)}
                >
                  <DeleteIcon />
                </div>
                <button
                  type="button"
                  onClick={() =>
                    append({
                      name: "",
                      nestedArray: [{ subhead: "" }],
                    })
                  }
                >
                  <AddIcon />
                </button>
              </div>

              <NextedArray nestIndex={index} {...{ control, register }} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FieldArray;
