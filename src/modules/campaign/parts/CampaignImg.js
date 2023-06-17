import React from "react";
import { defaultImage } from "../../../constants/global";
const CampaignImg = ({ image = defaultImage, className = "h-[158px]" }) => {
  return (
    <div className={`${className}`}>
      <img
        src={image}
        alt="img.png"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export default CampaignImg;
