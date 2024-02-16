"use client";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import EditBox from "@/app/(dashboard)/admin/components/EditBox";
import Shimmer from "../components/Shimmer";

const Work = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [data, setData] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/work`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return data.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div className="flex items-center justify-end my-[2%] md:mx-3">
          <Link href={"/admin/works/addwork"}>
            <div
              className="cursor-pointer hover:text-red-400"
              title="add image"
            >
              <AddIcon />
            </div>
          </Link>
        </div>

        <div className="p-5 border rounded-lg grid grid-cols-4 md:grid-cols-2">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setIsEditOpen(!isEditOpen);
                setDataToEdit(item);
              }}
              className="h-[280px] md:h-[150px] flex items-center justify-center   m-2  cursor-pointer overflow-hidden rounded-lg"
            >
              <Image
                width={300}
                height={300}
                src={item.image}
                alt=""
                className="hover:scale-105 transition-all duration-700 w-full h-full object-cover  "
              />
            </div>
          ))}
        </div>
      </div>
      {isEditOpen && (
        <EditBox
          isEditOpen={isEditOpen}
          setIsEditOpen={setIsEditOpen}
          dataToEdit={dataToEdit}
        />
      )}
    </>
  );
};

export default Work;
