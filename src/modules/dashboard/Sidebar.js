import React from "react";
import {
  IconCampaign,
  IconDarkMode,
  IconDashboard,
  IconLogout,
  IconPayment,
  IconProfile,
  IconWithdraw,
} from "../../components/icons";
import { NavLink } from "react-router-dom";
const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/logout",
    onClick: () => {},
  },
  {
    icon: <IconDarkMode></IconDarkMode>,
    title: "Light/Dark",
    url: "/mode",
    onClick: () => {},
  },
];
const Sidebar = () => {
  return (
    <div className="flex-shrink-0 w-full max-w-[76px] px-[14px] py-[40px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] flex flex-col ">
      {sidebarLinks.map((value) => {
        const navLinkClass =
          " last:mt-auto flex items-center gap-x-5 md:w-12 md:h-12 justify-center md:mb-8 md:rounded-lg";
        return (
          <NavLink
            to={value.url}
            key={value.title}
            className={({ isActive }) =>
              isActive
                ? `${navLinkClass} bg-primary text-primary bg-opacity-20`
                : `${navLinkClass} text-icon-color`
            }
          >
            <span className="">{value.icon}</span>
            <span className="md:hidden">{value.title}</span>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
