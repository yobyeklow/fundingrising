import React from "react";

const CampaignMeta = ({
  amount = "$2,000",
  text = "Raised of $2,500",
  size = "small",
}) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4
        className={`${
          size === "small" ? "text-sm" : "text-xl"
        }  font-semibold text-neutral2`}
      >
        {amount}
      </h4>
      <span
        className={`${
          size === "small" ? "text-xs" : "text-base"
        }  font-normal text-icon-color`}
      >
        {text}
      </span>
    </div>
  );
};

export default CampaignMeta;
