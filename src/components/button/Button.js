import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Button = ({
  isLoading = false,
  type = "button",
  children,
  classname = "",
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className=" w-10 h-10 rounded-full border-4 border-white animate-spin border-t-transparent"></div>
  ) : (
    children
  );

  let defaultClass =
    "flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]";
  switch (rest.kind) {
    case "primary":
      defaultClass = defaultClass + " bg-primary";
      break;
    case "secondary":
      defaultClass = defaultClass + "  bg-secondary";
      break;
    default:
      break;
  }
  if (rest.href)
    return (
      <Link to={rest.href} className={`${classname} ${defaultClass} `}>
        {child}
      </Link>
    );
  return (
    <button
      type={type}
      className={`${classname} ${defaultClass} ${
        !!isLoading ? "pointer-events-none opacity-50" : ""
      } `}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(["primary", "secondary"]),
  classname: PropTypes.string,
};
export default Button;
