import React from "react";
import { defaultImage } from "../../../constants/global";
const CampaignAuthor = ({ author = "Adom Shafi", image = defaultImage }) => {
  return (
    <div className="flex items-center gap-x-3">
      <img
        src={image}
        alt="avt.png"
        className="w-8 h-8 object-cover rounded-full"
      />
      <p className="text-xs text-neutral3 font-normal">
        by <span className="text-neutral2 font-semibold">{author}</span>
      </p>
    </div>
  );
};

export default CampaignAuthor;
