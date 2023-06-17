import { useForm } from "react-hook-form";
import Input from "../../../components/Input/Input";
import React from "react";
import Button from "../../../components/button/Button";
const CampaignSupport = () => {
  const { control } = useForm({});
  return (
    <div className="mb-[60px]">
      <h2 className="mb-5 font-semibold text-neutral1 text-lg ">Support</h2>
      <div className="shadow-[-4px_4px_8px_rgba(226,_226,_226,_0.2),_4px_4px_8px_rgba(226,_226,_226,_0.2)] px-6 py-5 bg-white ">
        <h1 className="text-neutral3 mb-8 font-medium text-xl text-center">
          Pledge without reward
        </h1>
        <Input
          className="text-lg font-medium py-2 px-5 border border-strockColor mb-5 rounded-none w-full"
          placeholder="$10"
          name="donate"
          control={control}
        ></Input>
        <div className="bg-grayBg p-5 rounded-xl mb-5">
          <p className="text-neutral2 mb-5 font-semibold text-sm ">
            Back it because you believe in it.
          </p>
          <p className="text-neutral3 text-sm">
            Support the project for no reward, just because it speaks to you.
          </p>
        </div>
        <Button classname="w-full bg-secondary text-white">Continue</Button>
      </div>
    </div>
  );
};

export default CampaignSupport;
