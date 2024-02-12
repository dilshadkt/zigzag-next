import React from "react";
import Services from "../components/Services";
import Head from "next/head";

const Service = () => {
  return (
    <div className="bg-white lg:pb-[10%]">
      <Head>
        <link
          rel="canonical"
          href="     https://www.zigzagdigitalsolutions.com/services"
        />
      </Head>
      <Services />
    </div>
  );
};

export default Service;
