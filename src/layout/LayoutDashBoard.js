import React from "react";
import Sidebar from "../modules/dashboard/Sidebar";
import Topbar from "../modules/dashboard/Topbar";
import { Outlet } from "react-router-dom";
import ReactModal from "react-modal";
import { Button } from "../components/button";
import CampaignPerk from "../modules/campaign/parts/CampaignPerk";
const LayoutDashBoard = ({ children }) => {
  return (
    <div className="p-10 bg-liteBg">
      {/* <ReactModal
        isOpen
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
        className="relative max-h-[98vh] overflow-y-auto w-full max-w-[521px] bg-white rounded-2xl outline-none p-10"
      >
        <button className="w-11 h-11 flex justify-center items-center absolute z-10 right-10 top-[10px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4" clip-path="url(#clip0_2357_17063)">
              <path
                d="M20 5.61143L18.3886 4L12 10.3886L5.61143 4L4 5.61143L10.3886 12L4 18.3886L5.61143 20L12 13.6114L18.3886 20L20 18.3886L13.6114 12L20 5.61143Z"
                fill="#171725"
              />
            </g>
            <defs>
              <clipPath id="clip0_2357_17063">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <h2 className="font-bold text-[25px] mb-10 text-center mt-3">
          Back this project
        </h2>
        <div className="mb-[60px]">
          <p className="text-sm font-medium text-neutral2 mb-3">
            Enter the contribute amount
          </p>
          <input
            type="text"
            placeholder="$10"
            className="border border-strockColor text-icon-color rounded-lg text-sm w-full p-3"
          />
          <p className="text-neutral3 text-sm mb-5 mt-5">
            Contribution are not associatied with perks
          </p>
          <Button classname="bg-primary text-white rounded-lg py-3 px-11">
            Continue
          </Button>
        </div>
        <CampaignPerk></CampaignPerk>
      </ReactModal> */}
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
