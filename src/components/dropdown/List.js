import React from "react";
import { useDropdown } from "./dropdown-context";

const List = ({ children }) => {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="rounded-lg z-50 scroll absolute max-h-[220px] overflow-y-scroll border-strockColor border border-t-0 top-full left-0 w-full bg-white shadow-sm">
          {children}
        </div>
      )}
    </>
  );
};

export default List;
