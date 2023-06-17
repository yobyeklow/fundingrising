import React from "react";
import Sidebar from "../modules/dashboard/Sidebar";
import Topbar from "../modules/dashboard/Topbar";
import { Outlet } from "react-router-dom";

const LayoutDashBoard = ({ children }) => {
  return (
    <div className="p-10 bg-liteBg">
      {/* <div className="overlay bg-darkBG bg-opacity-10 z-42 inset-0 fixed"></div> */}
      <Topbar></Topbar>
      <div className="flex gap-x-10 items-start min-h-screen">
        <Sidebar></Sidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default LayoutDashBoard;
