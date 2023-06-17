import React from "react";
import CampaignImg from "./parts/CampaignImg";
import CampaignCategory from "./parts/CampaignCategory";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignDescription from "./parts/CampaignDescription";
import CampaignMeta from "./parts/CampaignMeta";

const CampaignFeature = () => {
  return (
    <div className="mb-8 flex items-center gap-x-8 w-full max-w-[1048px]">
      <CampaignImg className="h-[266px] flex-1"></CampaignImg>
      <div className="flex-1 max-w-[435px]">
        <CampaignCategory className="text-sm">Architecture</CampaignCategory>
        <CampaignTitle className="font-bold text-xl mb-4">
          Remake - We Make architecture exhibition
        </CampaignTitle>
        <CampaignDescription>
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampaignDescription>
        <div className="w-full h-[5px] mb-6 rounded-full bg-[#EFEFEF]">
          <div className="h-full w-2/4 rounded-full bg-primary"></div>
        </div>
        <div className="flex items-center justify-between gap-x-5">
          <CampaignMeta size="big"></CampaignMeta>
          <CampaignMeta size="big"></CampaignMeta>
          <CampaignMeta size="big"></CampaignMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
