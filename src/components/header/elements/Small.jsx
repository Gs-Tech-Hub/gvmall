import React from "react";
import Image from "next/image";
const SmallScreen = () => {
  return (
    <div className="bg-white text-gray-700 sm:hidden shadow-md">
      <div className="flex items-end justify-between px-4 py-2">
        {/* Left Section - Hamburger Icon and Logo */}
        <div className="flex items-center space-x-3">
          {/* Hamburger Icon */}
          <button className="text-gray-800 text-4xl ">
            <Image src="/assets/icons/menu.svg"
             alt="Menu Image"
             width={23}
             height={23}/>
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-1">
            <Image src='/assets/fav.png' width={37} height={37} alt='Stora Logo'/>
          </div>
        </div>

        {/* Right Section - Sign In and Cart */}
        <div className="flex items-center space-x-4">
          {/* Sign In */}
          <button className="text-xl flex items-center bg-orange-500 text-white rounded-full">
            <p className="px-3">Sign in </p>
            <Image src="/assets/icons/usericon.svg"
            className="text-2xl bg-gray-800 text-white px-2 py-1 rounded-full"
            width={23}
            height={23}
            color="white"
            alt="User Icon" />
          </button>

          {/* Cart Icon */}
          <div className="relative text-gray-800">
            <i class="bi bi-cart-fill text-2xl rounded-full"></i>
            <Image src="assets/icons/cart.svg" 
            height={25}
            width={25}
            alt="Cart Icon"/>
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
          placeholder="Search GV Mall"
          className="border-l border-b border-t border-gray-400 w-full py-2 px-3 rounded-l-md focus:outline-none bg-white placeholder:text-gray-600 text-gray-900"
        />
        <button className="bg-orange-500 font-bold p-1 border border-gray-400 rounded-r-md">
          <Image 
          src='assets/icons/searchicon.svg'
          className="px-2 py-1 text-2xl text-gray-900"
          height={48}
          width={48}
          alt="Search Icon" />
        </button>
      </div>

      {/* Links */}
      <div className="text-orange-600 flex space-x-4 overflow-x-auto hide-scrollbar py-2 pb-4 text-base scroll-snap-x">
        <button className="hover:underline flex-shrink-0 scroll-snap-align-start pl-4">
          Deals
        </button>
        <button className="hover:underline flex-shrink-0 scroll-snap-align-start">
          GV Mall Basics
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
    </div>
  );
};

export default SmallScreen;
