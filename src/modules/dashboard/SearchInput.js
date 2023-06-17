import React, { useState } from "react";
import { defaultImage } from "../../constants/global";

const SearchInput = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className={`relative ${showSearch ? "z-40" : ""}`}>
      <div className="bg-white rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-2 relative flex items-center ">
        <div className="flex-1 px-5">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="outline-none pr-5 w-full bg-transparent text-sm placeholder:text-icon-color text-neutral1"
          />
        </div>
        <button className="flex items-center flex-shrink-0 justify-center w-[72px] h-10 rounded-full bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      {showSearch && (
        <div className="search-results lg:w-[843px] w-full bg-white absolute top-full left-0 z-50 translate-y-5 pb-6 rounded-3xl ">
          <div className="bg-whiteSoft flex items-center justify-between p-3 rounded-3xl mb-5">
            <h4 className="pl-4 underline font-medium text-sm text-neutral1">
              See all 10,124 fundraisier
            </h4>
            <button className="rounded-xl text-errorColor bg-errorColor bg-opacity-20 flex items-center justify-center w-[72px] h-[50px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="pl-6">
            <div className="flex flex-col gap-y-5 mb-6">
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
              <SearchItem></SearchItem>
            </div>
            <h3 className="text-sm font-semibold mb-4">Related searchs</h3>
            <div className="flex flex-col gap-y-3 text-sm text-neutral2">
              <p>Education fund</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
function SearchItem() {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={defaultImage}
        alt=""
        className="w-[50px] h-[50px] rounded-lg object-cover"
      />
      <div className="text-sm flex-1">
        <h3 className=" mb-1">
          <strong>Eductation</strong> fund for Durgham Family
        </h3>
        <p className="text-neutral3">By Durgham Family</p>
      </div>
    </div>
  );
}
export default SearchInput;
