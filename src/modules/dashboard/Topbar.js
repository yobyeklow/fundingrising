import React from "react";
import SearchInput from "./SearchInput";
import Fundrising from "./Fundrising";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <Link to="/">
          <img src="./Logo.png" alt="logo.png" />
        </Link>
        <div className="ml-14 w-full max-w-[458px]">
          <SearchInput></SearchInput>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-14 flex-1">
        <Fundrising></Fundrising>
        <Button
          type="button"
          href="/campaign"
          kind="secondary"
          classname="text-white"
        >
          Start a campaign
        </Button>
        <img src="./Logo.png" alt="avt.png" />
      </div>
    </div>
  );
};

export default Topbar;
