"use client";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useSearchParams } from "next/navigation";
import Loading from "./loading";
interface Work {
  image: string;
  type: string;
  stared: string;
  _id: string;
}
const Portfolio = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const [works, setWorks] = useState<Work[]>([]);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/work`)
      .then((res) => res.json())
      .then((data) => setWorks(data.allWorks))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {works.length === 0 ? (
        <Loading />
      ) : (
        <div className=" md:max-w-screen-md px-3 md:px-5   lg:max-w-screen-lg mx-auto   mb-40  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 ">
          {works.map((item, index) =>
            type === "all" ? (
              <Card img={item.image} key={`${index} -${item.image}`} />
            ) : (
              item.type.split(" ").join("") === type?.split(" ").join("") && (
                <Card img={item.image} key={index} />
              )
            )
          )}
        </div>
      )}
    </>
  );
};

export default Portfolio;
