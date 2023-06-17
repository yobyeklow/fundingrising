import React from "react";

const CampaignDescription = ({ children, className = "text-xs mb-4" }) => {
  return (
    <>
      <p className={`${className} text-neutral3 font-normal`}>{children}</p>
    </>
  );
};

export default CampaignDescription;
