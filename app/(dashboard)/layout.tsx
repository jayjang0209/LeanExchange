"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "./_components/sidebar";
import Navbar from "./_components/navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to check the window width
  const checkWidth = () => {
    if (window.innerWidth >= 640) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    checkWidth();
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className="flex flex-grow">
        <div
          className={`fixed z-40 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } sm:relative transition-transform duration-300 ease-in-out h-full bg-white shadow-md`}
        >
          <Sidebar />
        </div>

        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
}
