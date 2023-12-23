import React from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[74px] md:hidden md:pl-72 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-72  flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-[296px] pt-[74px] md:pt-2">{children}</main>
    </div>
  );
};

export default DashboardLayout;
