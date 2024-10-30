import React from "react";
import SideNav from "@/app/(dashboard)/_components/SideNav";
import Header from "@/app/(dashboard)/_components/Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div>
        <div className="w-64 hidden sm:block fixed">
          <SideNav />
        </div>
        <div className="ml-64">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
