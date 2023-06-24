import React, { Fragment, useEffect } from "react";

import CampaignAddNew from "../modules/campaign/CampaignAddNew";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const StartCampaignPage = () => {
  const data = useSelector((state) => state.auth);
  console.log(data);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user || !user.email) {
  //     navigate("/sign-in");
  //   }
  // }, [user]);
  return (
    <Fragment>
      <CampaignAddNew></CampaignAddNew>
    </Fragment>
  );
};

export default StartCampaignPage;
