import React, { Fragment } from "react";
import CampaignImg from "../modules/campaign/parts/CampaignImg";
import CampaignCategory from "../modules/campaign/parts/CampaignCategory";
import CampaignTitle from "../modules/campaign/parts/CampaignTitle";
import CampaignDescription from "../modules/campaign/parts/CampaignDescription";
import CampaignMeta from "../modules/campaign/parts/CampaignMeta";
import Button from "../components/button/Button";
import CampaignViewAuthor from "../modules/campaign/parts/CampaignViewAuthor";
import CampaignSupport from "../modules/campaign/parts/CampaignSupport";
import CampaignPerk from "../modules/campaign/parts/CampaignPerk";
const CampaignView = () => {
  return (
    <Fragment>
      <div
        className=" mb-10 h-[140px] flex justify-center items-center py-7  rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40"
        style={{
          backgroundImage: `linear-gradient(
    179.14deg,
    rgba(32, 18, 63, 0) -7.14%,
    #000000 87.01%
  ),url(https://images.unsplash.com/photo-1583948062951-3d344bc993d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80)`,
        }}
      >
        <h1 className="text-white font-bold text-[40px]">Education</h1>
      </div>
      <div className="mb-8 flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampaignImg
            image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            className="h-[398px] mb-8"
          ></CampaignImg>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  src="https://source.unsplash.com/random"
                  className="w-[89px] h-[70px] object-cover rounded-lg"
                  alt=""
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[435px]">
          <CampaignCategory className="text-sm">Architecture</CampaignCategory>
          <CampaignTitle className="font-bold text-xl mb-4">
            Remake - We Make architecture exhibition
          </CampaignTitle>
          <CampaignDescription>
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampaignDescription>
          <CampaignViewAuthor></CampaignViewAuthor>
          <div className="w-full h-[5px] mb-6 rounded-full bg-[#EFEFEF]">
            <div className="h-full w-2/4 rounded-full bg-primary"></div>
          </div>

          <div className="flex mb-4 items-center justify-between gap-x-5">
            <CampaignMeta size="big"></CampaignMeta>
            <CampaignMeta size="big"></CampaignMeta>
            <CampaignMeta size="big"></CampaignMeta>
          </div>
          <Button classname="w-full text-white" kind="primary">
            Back this project
          </Button>
        </div>
      </div>
      <div className="mb-6 mt-[94px] p-5 bg-white flex items-center justify-between shadow-sm">
        <div className="font-medium flex items-center gap-x-14">
          <span className="text-secondary font-semibold">Campaign</span>
          <span>Risks</span>
          <span>FAQ</span>
          <span>Updates</span>
          <span>Comments</span>
        </div>
        <Button classname="bg-primary text-white">Back this project</Button>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr]">
        <div>
          <h2 className="text-lg font-semibold uppercase mb-5">Story</h2>
          <div className="w-full bg-white"></div>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CampaignView;
