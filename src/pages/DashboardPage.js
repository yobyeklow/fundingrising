import React, { Fragment } from "react";

import Heading from "../components/reuseable/Heading";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignItem from "../modules/campaign/CampaignItem";
import CampaignFeature from "../modules/campaign/CampaignFeature";
const DashboardPage = () => {
  return (
    <Fragment>
      <div className="mb-8">
        <Heading className="mb-5">Your Campaign</Heading>
        <CampaignFeature></CampaignFeature>
      </div>
      <div className="mb-8">
        <Heading className="mb-5" number="4">
          Popular Campaign
        </Heading>
        <CampaignGrid>
          {Array(4)
            .fill(0)
            .map((item) => (
              <CampaignItem></CampaignItem>
            ))}
        </CampaignGrid>
      </div>
      <Heading className="mb-5">Recent Campaign</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item) => (
            <CampaignItem></CampaignItem>
          ))}
      </CampaignGrid>
    </Fragment>
  );
};

export default DashboardPage;
