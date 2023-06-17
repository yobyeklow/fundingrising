import React from "react";
import { IconCategory } from "../../../components/icons";
import { Link } from "react-router-dom";

const CampaignCategory = ({ children, className = "" }) => {
  return (
    <Link
      to="/"
      className={`${className} mb-4 text-xs font-medium text-neutral3 flex items-baseline gap-x-3`}
    >
      <IconCategory></IconCategory>
      <span>{children}</span>
    </Link>
  );
};

export default CampaignCategory;
