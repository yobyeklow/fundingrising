import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponents from "../components/reuseable/ErrorComponents";

const LayoutAuthentication = (props) => {
  const { children, heading } = props;
  return (
    <div className="  dark:bg-darkBG w-full min-h-screen relative bg-liteBg p-10 isolate">
      <img
        src="/Ellipse.png"
        alt="background.png"
        className="hidden lg:block absolute bottom-0 left-0 right-0 w-full pointer-events-none z-[-1]"
      />
      <Link to="/" className="inline-block mb-5 lg:mb-16">
        <img srcSet="/Logo.png 2x" alt="logo.png"></img>
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="font-semibold dark:text-white text-lg lg:text-xl mb-1 lg:mb-3 text-center text-darkBG">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};
LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthentication, {
  FallbackComponent: ErrorComponents,
});
