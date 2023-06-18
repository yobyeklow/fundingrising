import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutPayment = ({ back = "/" }) => {
  return (
    <div className="dark:bg-darkBG bg-liteBg py-10 px-[135px] w-full min-h-screen">
      <div className="mb-10 flex items-center justify-between">
        <img
          src="./Logo.png"
          alt="logo.png"
          className="w-[52px] h-[52px] object-cover rounded-lg "
        />
        <img
          src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          className="w-[52px] h-[52px] object-cover rounded-full"
          alt="avatar.png"
        ></img>
      </div>
      <Link
        to={back}
        className="mb-[30px] cursor-pointer flex items-center gap-x-[10px]"
      >
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1233_33731)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.1713 18.277L10.4306 12.3975C10.2225 12.216 10.201 11.9001 10.3825 11.692C10.3971 11.6753 10.4128 11.6595 10.4295 11.6449L17.1702 5.72823C17.3777 5.54607 17.6936 5.56664 17.8758 5.77417C17.9558 5.8654 18 5.98263 18 6.10401V17.9002C18 18.1764 17.7761 18.4002 17.5 18.4002C17.3792 18.4002 17.2624 18.3565 17.1713 18.277Z"
                fill="#A2A2A8"
              />
              <path
                d="M8 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H8C8.55228 18 9 17.5523 9 17V7C9 6.44772 8.55228 6 8 6Z"
                fill="#A2A2A8"
              />
            </g>
            <defs>
              <clipPath id="clip0_1233_33731">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span className="text-sm font-semibold text-primary">Back</span>
      </Link>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutPayment;
