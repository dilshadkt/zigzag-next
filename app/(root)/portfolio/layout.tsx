import React, { ReactNode, Suspense } from "react";
import PortfolioNav from "../components/PortfolioNav";

interface Props {
  children: ReactNode;
}
const layout = ({ children }: Props) => {
  return (
    <div>
      <PortfolioNav />
      {/* <Suspense
        fallback={<h1 className="w-[100vw h-vh bg-red-500]">loadign</h1>}
      > */}
      {children}
      {/* </Suspense> */}
    </div>
  );
};

export default layout;
