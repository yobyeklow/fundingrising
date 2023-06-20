import React from "react";
import { Checkbox } from "../../components/checkbox";
import { Button } from "../../components/button";

const ContributeSummary = () => {
  return (
    <div className="pt-[15px] px-5 shadow-[-10px_15px_20px_rgba(231,_228,_228,_0.15),_10px_10px_20px_rgba(231,_228,_228,_0.15)] rounded-[20px] bg-white max-w-[462px]">
      <h2 className="text-neutral2 mb-[25px] font-semibold text-lg">
        Contribution Summury
      </h2>
      <div className="mb-[15px] bg-secondary text-neutral1 px-5 py-4  bg-opacity-20 flex items-center justify-between">
        <img
          src="./camera.png"
          alt="camera.png"
          className="w-[89px] h-[70px] object-cover rounded-[5px] flex-shrink-0"
        />
        <p className=" font-medium">Special One Camera</p>
        <p className="font-bold text-base">$2,724 USD</p>
      </div>
      <div className="px-5 pb-10">
        <div className="flex mb-[10px] justify-between text-base font-medium text-neutral2">
          <p>Subtotal</p>
          <p>$2,724 USD</p>
        </div>
        <div className="flex mb-[25px] justify-between text-base font-medium text-neutral2">
          <p>Shipping</p>
          <p>$0 USD</p>
        </div>
        <div className=" mb-5 flex justify-between text-base font-bold text-neutral1">
          <p>Total</p>
          <p>$2,724 USD</p>
        </div>

        <div className="flex mb-[10px] items-start gap-x-5">
          <Checkbox></Checkbox>
          <p className="text-sm text-neutral2">
            I agree to the{" "}
            <a className="text-secondary underline" href="#/">
              Tearms of Use
            </a>{" "}
            and have read and understand the{" "}
            <a className="text-secondary underline" href="#/">
              Privacy policy
            </a>
            .
          </p>
        </div>
        <Button classname="bg-primary w-full text-white">Submit Payment</Button>
      </div>
    </div>
  );
};

export default ContributeSummary;
