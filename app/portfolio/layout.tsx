import React, { ReactNode } from "react";
import PortfolioNav from "../components/PortfolioNav";

interface Props {
  children: ReactNode;
}
const layout = ({ children }: Props) => {
  return (
    <div>
      <PortfolioNav />
      {children}
    </div>
  );
};

export default layout;
