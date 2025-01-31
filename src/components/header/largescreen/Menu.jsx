import React from 'react'

const Menu = () => {
  return (
    <nav className="bg-white py-3 px-8 border-t border-gray-900">
        <div className="grid grid-cols-10 gap-4 items-center">
            {/* Search Bar */}
            <div className="col-span-8 flex items-center gap-4">
            <div className="bg-orange-400 text-gray-800 px-2 flex items-center rounded-sm">
                <i class="bi bi-card-list"></i>
                <select className="text-gray-900 border-none">
                <option value="" className="bg-gray-200">
                    Naira
                </option>
                <option value="" className="bg-gray-200">
                    Dollar
                </option>
                <option value="" className="bg-gray-200">
                    Euro
                </option>
                <option value="" className="bg-gray-200">
                    Pounds
                </option>
                </select>
            </div>
            <div className="flex flex-grow bg-white rounded-sm">
                <input
                type="text"
                placeholder="Enter your keyword..."
                className="w-full px-3 py-2 text-sm text-gray-800 bg-gray-200 focus:outline-none rounded-sm"
                />
                <button className="bg-orange-400 px-4 py-2 text-gray-800 rounded-r hover:bg-lime-500">
                <i className="fas fa-search"></i> Search
                </button>
            </div>
            </div>

            {/* Utility Icons */}
            <div className="col-span-2 flex justify-evenly items-center text-xl text-gray-900">
            <button>
                <i class="bi bi-arrow-clockwise"></i>
            </button>
            <button>
                <i class="bi bi-heart-fill"></i>
            </button>
            <a href="#" className="flex gap-2 items-center">
                <div className="relative hover:text-red-500">
                <i class="bi bi-cart-fill bg-orange-400 px-2 py-1 text-gray-700 rounded-full"></i>
                <span className="absolute top-0 -right-2 bg-red-500 text-xs rounded-full px-1">
                    2
                </span>
                </div>
                <h2 className="text-lg"> My Cart</h2>
                <span className="text-sm text-orange-500">| $ 202,300</span>
            </a>
            </div>
        </div>
    </nav>
  )
}

export default Menu