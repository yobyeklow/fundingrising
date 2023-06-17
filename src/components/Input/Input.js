import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponents from "../reuseable/ErrorComponents";
export const Input = (props) => {
  const {
    control,
    name,
    type = "text",
    errorMessage = "",
    placeholder = "",
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    defaultValue: "",
    name,
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`dark:border-darkStroke dark:bg-darkSecondary dark:text-whiteSoft w-full py-4 px-6 border rounded-xl text-sm font-medium text-darkBG placeholder:neutral5 ${
          errorMessage.length > 0 ? "border-errorColor" : "border-strockColor"
        } ${children ? "pr-16" : ""}`}
        placeholder={errorMessage.length > 0 ? "" : placeholder}
        {...field}
        {...rest}
      />
      {errorMessage.length > 0 && (
        <span className="error-input pointer-events-none left-6 text-sm font-medium text-errorColor absolute top-2/4 -translate-y-2/4">
          {errorMessage}
        </span>
      )}
      {children && (
        <div className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer select-none">
          {children}
        </div>
      )}
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  control: PropTypes.any.isRequired,
};
export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponents,
});
