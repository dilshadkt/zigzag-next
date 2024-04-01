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
      .then((data) => setWorks(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {works.length === 0 ? (
        <Loading />
      ) : (
        <div className="mx-[17%] pb-[10%]  sm:pb-[25%]  md:mx-5 md:pt-6 lg:pb-[15%] grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 ">
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
