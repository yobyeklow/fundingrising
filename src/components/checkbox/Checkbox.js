import React from "react";
import PropTypes from "prop-types";
const Checkbox = ({
  children = "",
  name = "",
  checked = false,
  onClick = () => {},
}) => {
  return (
    <>
      <div
        className={`inline-flex items-center justify-center text-white w-5 h-5 rounded border ${
          checked
            ? "bg-primary border-primary"
            : "border-icon-color dark:border-neutral3"
        } `}
        onClick={onClick}
      >
        <input
          type="checkbox"
          name={name}
          className="hidden"
          onChange={() => {}}
        />
        <span className={`${checked ? "" : "opacity-0 invisible"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
      </div>
      {children && (
        <label
          htmlFor={name}
          onClick={onClick}
          className="text-neutral3 font-medium"
        >
          {children}
        </label>
      )}
    </>
  );
};
Checkbox.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  checked: PropTypes.bool,
};
export default Checkbox;
