import React from "react";
import PropTypes from "prop-types";
import ErrorComponents from "../reuseable/ErrorComponents";
import { withErrorBoundary } from "react-error-boundary";
const ButtonGoogle = ({ text = "", onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="dark:text-white dark:border-neutral3 text-base text-darkSecondary flex items-center justify-center py-4 mb-5 border border-strockColor rounded-xl gap-x-2 w-full"
    >
      <img src="/iconGoogle.png" alt="" />
      <span className="text-base font-semibold text-neutral2 ">{text}</span>
    </button>
  );
};
ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
export default withErrorBoundary(ButtonGoogle, {
  FallBackComponents: ErrorComponents,
});
