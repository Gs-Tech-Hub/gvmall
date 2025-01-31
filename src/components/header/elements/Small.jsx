import React from "react";
const SmallScreen = () => {
  return (
    <div className="bg-white sm:hidden shadow-2xl shadow-gray-800">
      <div className="flex items-end justify-between px-4 py-2">
        {/* Left Section - Hamburger Icon and Logo */}
        <div className="flex items-center space-x-3">
          {/* Hamburger Icon */}
          <button className="text-gray-800 text-4xl">
            <i class="bi bi-list"></i>
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-1">
            {/* <img
              src={polyBagLogo} // Replace with the actual logo path
              alt="Amazon Logo"
              className="w-30"
            /> */}
          </div>
        </div>

        {/* Right Section - Sign In and Cart */}
        <div className="flex items-center space-x-4">
          {/* Sign In */}
          <button className="text-xl flex items-center bg-orange-400 text-white rounded-full">
            <p className="px-3">Sign in </p>
            <i class="bi bi-person-fill text-2xl bg-gray-800 px-2 py-1 rounded-full"></i>
          </button>

          {/* Cart Icon */}
          <div className="relative text-gray-800">
            <i class="bi bi-cart-fill text-2xl rounded-full"></i>
            <span className="text-white absolute top-0 -right-2 bg-red-500 text-xs rounded-full px-1">
              2
            </span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center px-4 py-2">
        <input
          type="text"
          placeholder="Search Poly Bag"
          className="border-l border-b border-t border-gray-400 w-full p-2 px-3 rounded-l-md focus:outline-none bg-white placeholder:text-gray-600 text-gray-900"
        />
        <button className="bg-orange-400 font-bold p-1 border border-gray-400 rounded-r-md">
          <i class="bi bi-search px-2 py-2 text-2xl text-gray-900"></i>
        </button>
      </div>

      {/* Links */}
      <div className="text-orange-500 flex space-x-4 overflow-x-auto py-2 text-base scroll-snap-x no-scrollbar">
        <button className="hover:underline flex-shrink-0 scroll-snap-align-start pl-4">
          Deals
        </button>
        <button className="hover:underline flex-shrink-0 scroll-snap-align-start">
          Poly Bag Basics
        </button>
        <button className="hover:underline flex-shrink-0 scroll-snap-align-start">
          Movies
        </button>
        <button className="hover:underline flex-shrink-0 scroll-snap-align-start">
          Mobile devices
        </button>
        <button className="hover:underline flex-shrink-0 scroll-snap-align-start pr-4">
          Best Sellers
        </button>
      </div>

      {/* Delivery Location */}
      <div className="text-sm flex  text-gray-700 items-center px-4 py-2 border-t border-gray-400">
        <span>Welcome to Poly Bag 👋</span>
      </div>
    </div>
  );
};

export default SmallScreen;
