import React from "react";
import PaymentMethod from "../modules/payment/PaymentMethod";
import ContributeSummary from "../modules/payment/ContributeSummary";

const CheckoutPage = () => {
  return (
    <div className="max-w-[891px] flex items-start">
      <div>
        <h1 className="text-3xl leading-normal font-bold mb-10">Payment</h1>
        <PaymentMethod></PaymentMethod>
      </div>
      <div className="max-w-[462px] ml-auto flex-1">
        <ContributeSummary></ContributeSummary>
      </div>
    </div>
  );
};

export default CheckoutPage;
