"use client";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import EditBox from "@/app/(dashboard)/admin/components/EditBox";
import Shimmer from "../components/Shimmer";
import Card from "@/app/(root)/components/Card";
import { categories } from "@/constant";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { swap } from "@formkit/drag-and-drop";
const Work = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [data, setData] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(false);
  const [category, setCategory] = useState(categories);
  const [parent, works, setWorks] = useDragAndDrop([], {
    group: "parent",
    plugins: [swap()],
  });

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/work`)
      .then((res) => {
        setData(res.data.allWorks);
        setWorks(res.data.allWorks);
        setCategory(res.data.category);
      })
      .catch((err) => console.log(err));
  }, []);

  const changeOrder = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/work/order`, {
        data: works,
      });
      toast.success("saved changes");
    } catch (error) {
      console.log(error);
    }
  };
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
          <button
            onClick={() => changeOrder()}
            className="rounded-lg    px-4
            py-2 font-medium  mx-4 bg-black text-white"
          >
            Save
          </button>
        </div>

        <div
          ref={parent}
          className="p-5 border rounded-lg grid gap-0 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {works.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setIsEditOpen(!isEditOpen);
                setDataToEdit(item);
              }}
              className="cursor-grab"
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
          categories={category}
          setData={setData}
        />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Work;
