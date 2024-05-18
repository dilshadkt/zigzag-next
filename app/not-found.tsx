import Image from "next/image";
import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center flex-col">
      <Image src={"/404.jpg"} alt="page not found" width={400} height={400} />
      <Link href={"/"}>
        <p className="underline font-semibold text-gray-600 hover:text-red-500 cursor-pointer">
          return to home
        </p>
      </Link>
    </div>
  );
};

export default PageNotFound;
