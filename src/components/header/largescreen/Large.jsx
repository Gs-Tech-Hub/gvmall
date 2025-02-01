import React from "react";
import TopNav from "./Menu";
import Menu from "./TopNav";

const LargeScreen = () => {
  return (
    <div className="bg-gray-100 shadow-xl text-gray-800 hidden lg:block fixed w-full">
      <Menu />
      <TopNav />
    </div>
  );
};

export default LargeScreen;
