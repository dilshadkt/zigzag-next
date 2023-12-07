import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <main className="pb-[8%] sm:mb-[18%]"> {children}</main>
      </body>
    </html>
  );
};

export default layout;
