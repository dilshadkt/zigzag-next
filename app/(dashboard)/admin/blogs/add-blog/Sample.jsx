import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import SubHead from "./SubHead";
import { useForm } from "react-hook-form";
const Sample = ({ setArry, removeField, item, register }) => {
  return (
    <div>
      <div className=" group">
        <div className="flex items-center">
          <input
            {...register(`subHead${item}`)}
            type="text"
            placeholder="heading 4"
            className=" bg-transparent w-1/2 p-2 cursor-pointer my-2"
          />

          <div
            onClick={() => setArry((pre) => [...pre, pre.length])}
            className="mx-2 invisible group-hover:visible cursor-pointer hover:text-red-500"
          >
            <AddIcon />
          </div>
          {item !== -1 && (
            <div
              onClick={() => removeField(item)}
              className="mx-2 invisible group-hover:visible cursor-pointer hover:text-red-500"
            >
              <DeleteIcon />
            </div>
          )}
        </div>
        <div className="pl-7">
          <SubHead register={register} Parentitem={item} />
        </div>
      </div>
    </div>
  );
};

export default Sample;
