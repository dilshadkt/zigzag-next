import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
const Card = ({ offer, setOffers, offers }: OfferProps) => {
  const { register, watch } = useForm();
  const [isEditEnalbe, setIsEditEnable] = useState<Boolean>(false);
  const SaveChanges = () => {
    axios
      .patch(`${process.env.NEXT_PUBLIC_BASE_URL}/offer/${offer._id}`, watch())
      .then((res) => {
        setOffers(res.data.offers);
        toast.success("successfully updated");
        setIsEditEnable(false);
      })
      .catch((err) => {
        toast.warning("failed to edit");
      });
  };

  const DeleteOffer = () => {
    alert("Are sure about the delete");
    axios
      .delete(`${process.env.NEXT_PUBLIC_BASE_URL}/offer/${offer._id}`)
      .then((res) => {
        setOffers(res.data.offers);
        toast.success("offer is removed");
      })
      .catch((err) => toast.warning("fialed to remove"));
  };
  return (
    <div className="rounded-lg overflow-hidden min-h-[350px] h-fit shadow-lg p-2 border">
      <Image
        src={offer.image}
        alt="banner ofofer"
        width={200}
        height={200}
        className="w-full rounded-t-lg"
      />
      <div className="relative mt-4">
        <label className="font-semibold absolute -top-1 left-4 px-3   bg-white text-gray-500 text-sm ">
          Link
        </label>
        <input
          type="text"
          {...register("link")}
          defaultValue={offer.link}
          disabled={!isEditEnalbe}
          className="w-full p-3 bg-white rounded-lg outline-none border my-1 "
        />
      </div>
      <div className=" flex items-center">
        <label className="font-semibold text-gray-700 mt-1  text-sm">
          Status :
        </label>
        <label className="swap mt-[5px] ml-2 hover:font-semibold hover:text-gray-800">
          <input
            type="checkbox"
            {...register("status")}
            disabled={!isEditEnalbe}
            defaultChecked={offer.status}
          />
          <div className="swap-on bg-blue-500 px-2 rounded-xl py-[3px] flex items-center justify-center shadow-md text-white text-sm">
            ON
          </div>
          <div className="swap-off bg-red-400 px-2 rounded-xl py-[3px] flex items-center justify-center shadow-md text-white text-sm">
            OFF
          </div>
        </label>
      </div>
      <div className="flex justify-center w-full">
        <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6">
          <li>
            <button
              onClick={() => DeleteOffer()}
              className="tooltip"
              data-tip="remove "
            >
              <DeleteIcon
                className="opacity-60 hover:opacity-90 hover:text-red-500
              "
              />
            </button>
          </li>
          <li>
            {!isEditEnalbe ? (
              <button
                onClick={() => setIsEditEnable(true)}
                className="tooltip"
                data-tip="Edit"
              >
                <EditIcon className="opacity-60 hover:opacity-90" />
              </button>
            ) : (
              <button
                onClick={() => SaveChanges()}
                className="tooltip "
                data-tip="save changes"
              >
                <DoneIcon className="opacity-60 hover:opacity-90" />
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
