"use client";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import EditBox from "@/app/(dashboard)/admin/components/EditBox";
import Shimmer from "../components/Shimmer";
import Card from "@/app/(root)/components/Card";

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

        <div className="p-5 border rounded-lg grid gap-0 md:grid-cols-3">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setIsEditOpen(!isEditOpen);
                setDataToEdit(item);
              }}
            >
              <Card img={item.image} />
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
