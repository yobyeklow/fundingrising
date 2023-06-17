import React from "react";
import PropTypes from "prop-types";
const Label = (props) => {
  const { children, htmlFor = "", className = "" } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`dark:text-neutral3 text-sm font-medium text-darkSecondary cursor-pointer inline-block ${className}`}
    >
      {children}
    </label>
  );
};
Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};
export default Label;
