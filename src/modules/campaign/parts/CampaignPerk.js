import React from "react";
import Button from "../../../components/button/Button";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <div>
      <div className="shadow-[-4px_4px_8px_rgba(226,_226,_226,_0.2),_4px_4px_8px_rgba(226,_226,_226,_0.2)] bg-white rounded-lg w-full">
        <img
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="camera.png"
          className="h-[232px] w-full object-cover rounded-lg mb-5"
        />
        <div className="pl-[20px] pb-5">
          <p className="bg-secondary text-white inline-block rounded-sm px-4 mb-5">
            Featured
          </p>
          <h1 className="text-neutral1 font-bold text-xl">
            Special One Cemrera
          </h1>
          <div className="flex items-center gap-x-3 mb-4">
            <h1 className="text-neutral1 text-xl font-bold">$2,724 USD</h1>
            <div className="text-errorColor font-medium text-sm">
              <span className="stroke-errorColor">$1,504 USD </span>
              <span>(12% OFF)</span>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-neutral1 font-medium text-base">
              Estimated Shipping
            </p>
            <p className="text-neutral2 font-normal text-sm">October 2022</p>
          </div>
          <p className="text-sm font-medium text-neutral1 mb-4">
            05 <span className="text-neutral2">claimed</span>
          </p>
          <p className="text-neutral2 text-sm">Ships worldwide</p>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button classname="bg-secondary text-white w-full">
            Get this perk
          </Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
