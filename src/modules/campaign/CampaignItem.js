import React from "react";

import CampaignCategory from "./parts/CampaignCategory";
import CampaignMeta from "./parts/CampaignMeta";
import CampaignDescription from "./parts/CampaignDescription";
import CampaignTitle from "./parts/CampaignTitle";
import CampaignAuthor from "./parts/CampaignAuthor";
import CampaignImg from "./parts/CampaignImg";

const CampaignItem = () => {
  return (
    <div>
      <CampaignImg></CampaignImg>
      <div className="px-5 py-4">
        <CampaignCategory>Education</CampaignCategory>
        <CampaignTitle>Powered Kits Learning Boxes</CampaignTitle>
        <CampaignDescription>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampaignDescription>
        <div className="flex items-start justify-between gap-x-5 mb-5">
          <CampaignMeta></CampaignMeta>
          <CampaignMeta></CampaignMeta>
        </div>
        <CampaignAuthor></CampaignAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
