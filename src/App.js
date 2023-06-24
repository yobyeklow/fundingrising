import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutDashBoard from "./layout/LayoutDashBoard";
import CampaignView from "./pages/CampaignView";
import Modal from "react-modal";

import LayoutPayment from "./layout/LayoutPayment";
import { useDispatch, useSelector } from "react-redux";
import { authRefreshToken, authUpdateUser } from "./store/auth/authSlice";
import { getToken, logout } from "./utils/auth";

const SignUpPage = lazy(() => import("./pages/SignUp"));
const SignInPage = lazy(() => import("./pages/SignIn"));
const DashBoardPage = lazy(() => import("./pages/DashboardPage"));
const CampaignPage = lazy(() => import("./pages/CampaignPage"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const ShippingPage = lazy(() => import("./pages/ShippingPage"));
const customStyles = {
  content: {},
};
Modal.setAppElement("#root");
Modal.defaultStyles = {};
function App() {
  // const { user } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (user && user.id) {
  //     const { access_token } = getToken();
  //     dispatch(
  //       authUpdateUser({
  //         user: user,
  //         accessToken: access_token,
  //       })
  //     );
  //   } else {
  //     const { refresh_token } = getToken();
  //     if (refresh_token) {
  //       dispatch(authRefreshToken(refresh_token));
  //     } else {
  //       dispatch(authUpdateUser({}));
  //       logout();
  //     }
  //   }
  // }, [user]);
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashBoard></LayoutDashBoard>}>
          <Route path="/" element={<DashBoardPage></DashBoardPage>}></Route>
          <Route
            path="/start-campaign"
            element={<StartCampaignPage></StartCampaignPage>}
          ></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
        </Route>
        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="/shipping-address"
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
