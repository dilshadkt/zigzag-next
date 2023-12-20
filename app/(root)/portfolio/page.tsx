"use client";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useSearchParams } from "next/navigation";
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
    fetch("http://localhost:8080/work")
      .then((res) => res.json())
      .then((data) => setWorks(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mx-[17%] sm:mx-5 lg:mb-[15%] grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      {works.map((item, index) =>
        type === "all" ? (
          <Card img={item.image} key={`${index} -${item.image}`} />
        ) : (
          item.type === type && <Card img={item.image} key={index} />
        )
      )}
    </div>
  );
};

export default Portfolio;
