import React from "react";

const CampaignTitle = ({ children, className = "font-semibold mb-1" }) => {
  return <h3 className={`${className}  text-neutral1`}>{children}</h3>;
};

export default CampaignTitle;
