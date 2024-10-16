import MegaMenu from "@/components/Frontend/MegaMenu";
import Navbar from "@/components/Frontend/Navbar";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <div className="bg-white w-full mx-auto py-4 fixed top-20 items-center justify-center z-50 border-t border-gray-400/30 left-0 right-0 max-w-7xl">
          <MegaMenu />
        </div>
        {children}
      </div>
    </>
  );
}
