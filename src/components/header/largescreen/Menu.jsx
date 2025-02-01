import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const TopNav = () => {
  return (
  <div className="bg-white py-3 px-10">
    <div className="container mx-auto flex justify-between items-center">
        <button>
            Shop By Category
        </button>
        {/* Logo */}
        <div className="flex items-center font-bold mr-10">
            <Image src='/assets/fav.png' width={37} height={37} alt='Stora Logo'/>
            {/* <img src={StoraLogo} className="w-50" alt="" /> */}
        </div>

        {/* Navigation Links */}
        <ul className="text-gray-900 flex space-x-6 text-sm ">
        <li>
            <a href="#" className="hover:text-yellow-500">
            HOME
            </a>
        </li>
        <li>
            <a href="#" className="hover:text-yellow-500">
            FEATURES
            </a>
        </li>
        <li>
            <a href="#" className="hover:text-yellow-500">
            BEST SELLING
            </a>
        </li>
        <li>
            <a href="#" className="hover:text-yellow-500">
            DEAL
            </a>
        </li>
        <li>
            <a href="#" className="hover:text-yellow-500">
            SHOP
            </a>
        </li>
        <li>
            <a href="#" className="hover:text-yellow-500">
            BLOG
            </a>
        </li>
        <li>
            <a href="#" className="hover:text-yellow-500">
            PAGES
            </a>
        </li>
        </ul>

        {/* Utility Icons */}
        <div className="flex space-x-4 items-center text-gray-900">
        <a
            href="#"
            className="hover:text-yellow-500 ease-in-out transform transition duration-500"
        >
            <i className="bi bi-person"></i> Login or Register
        </a>
        <span>|</span>
        <a
            href="#"
            className="hover:text-yellow-500 ease-in-out transform transition duration-500"
        >
            <i class="bi bi-truck"></i> Track Your Order
        </a>
        <span>|</span>
        <a
            href="#"
            className="hover:text-yellow-500 ease-in-out transform transition duration-500"
        >
            <i class="bi bi-mic-fill"></i> Hotline (+123) 813 822 8089
        </a>
        </div>
    </div>
  </div>
  )
}

export default TopNav