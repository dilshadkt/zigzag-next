"use client";
import React from "react";
import Card from "../components/Card";
import { Works } from "@/public/worls/Works";
import { useSearchParams } from "next/navigation";
const Portfolio = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <div className="mx-[17%] sm:mx-5 flex justify-between flex-wrap">
      {Works.map((item, index) =>
        type === "all" ? (
          <Card img={item.image} key={index} />
        ) : (
          item.status === type && <Card img={item.image} key={index} />
        )
      )}
    </div>
  );
};

export default Portfolio;
