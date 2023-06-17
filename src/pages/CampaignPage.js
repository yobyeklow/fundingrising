import React, { Fragment } from "react";

import Heading from "../components/reuseable/Heading";
import CampaignGrid from "../modules/campaign/CampaignGrid";
import CampaignFeature from "../modules/campaign/CampaignFeature";

import { Button } from "../components/button";

const CampaignPage = () => {
  return (
    <Fragment>
      <div className="bg-white w-full h-full px-10 py-8 mb-10">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-6 items-start">
            <div className="flex items-center justify-center text-white bg-opacity-60 w-14 h-14 bg-secondary rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h1 className="mb-2 text-neutral1 font-semibold text-xl">
                Create Your Campaign
              </h1>
              <p className="mb-2 text-sm text-neutral3">
                Jump right into our editor and create your first Virtue
                campaign!
              </p>
              <a href="#" className="text-primary text-sm">
                Need any help? Learn More...
              </a>
            </div>
          </div>
          <Button
            kind="secondary"
            classname=" bg-opacity-20 px-8 py-3 text-secondary"
            type="button"
            href="/start-campaign"
          >
            Create a campaign
          </Button>
        </div>
      </div>
      <Heading number={4}>Your Campaign</Heading>
      <CampaignGrid type="secondary">
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
        <CampaignFeature></CampaignFeature>
      </CampaignGrid>
      <Button classname="bg-secondary bg-opacity-20 text-secondary mx-auto mt-10 mb-10">
        <span>See more+</span>
      </Button>
    </Fragment>
  );
};

export default CampaignPage;
