import React from "react";
import ShippingAddress from "../modules/payment/ShippingAddress";
import ContributeSummary from "../modules/payment/ContributeSummary";
import PaymentMethod from "../modules/payment/PaymentMethod";
const ShippingPage = () => {
  return (
    <div>
      <div className="flex items-start w-full gap-x-[74px]">
        <div className="flex-1">
          <h1 className="mb-[30px] text-neutral1 text-3xl font-bold">
            Shipping Address
          </h1>
          <ShippingAddress></ShippingAddress>
        </div>
        <ContributeSummary></ContributeSummary>
      </div>
      <div className="mt-[55px]">
        <h1 className="text-neutral1 font-bold text-3xl mb-10">Payment</h1>
        <PaymentMethod></PaymentMethod>
      </div>
    </div>
  );
};

export default ShippingPage;
