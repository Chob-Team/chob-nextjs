"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex h-screen bg-gray-200">
        <div className=" bg-white">
          <Sidebar />
        </div>
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
