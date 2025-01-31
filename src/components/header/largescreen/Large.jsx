import React from "react";
import TopNav from "./TopNav";
import Menu from "./Menu";

const LargeScreen = () => {
  return (
    <div className="bg-gray-100 text-white hidden lg:block fixed w-full">
      <Menu />
      <TopNav />
    </div>
  );
};

export default LargeScreen;
