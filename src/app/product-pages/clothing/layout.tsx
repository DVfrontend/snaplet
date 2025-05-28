import React from "react";
import type { LayoutProps } from "@/types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <h1 className="text-3xl">Одежда</h1>
      {children}
    </>
  );
};

export default Layout;
