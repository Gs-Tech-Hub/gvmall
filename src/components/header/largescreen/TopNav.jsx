import Image from "next/image"

const Menu = () => {
  return (
    <nav className="bg-white py-5 px-8 border-b border-gray-300">
        <div className="grid grid-cols-10 gap-4 items-center">

            {/* Company Icons */}
            <div className="flex gap-3 mr-10 items-center col-span-2">
                <Image 
                src='/assets/fav.png'
                width={35}
                height={35}
                alt='Logo' />
                <h1 className="text-xl font-bold">GV Mall</h1>
            </div>

            {/* Search Bar */}
            <div className="col-span-4 flex items-center">

                <div className="flex flex-grow items-center bg-gray-200 rounded-sm">
                    <div className="bg-gray-200 text-gray-800 px-6 flex items-center rounded-sm">
                        <select className="border-none text-sm font-medium bg-gray-200">
                            <option value="" className='bg-gray-200'>
                                ALL CATEGORY
                            </option>
                            <option value="" className="bg-gray-200">
                                Kithen Utensils
                            </option>
                            <option value="" className="bg-gray-200">
                                Euro
                            </option>
                            <option value="" className="bg-gray-200">
                                Pounds
                            </option>
                        </select>
                    </div>
                    <span className="border h-5 border-gray-400"></span>
                    <input
                    type="text"
                    placeholder="Enter your keyword..."
                    className="w-full px-3 py-3 border-l text-sm text-gray-800 bg-gray-200 focus:outline-none rounded-sm"
                    />
                    <button className="bg-gray-200 px-4 text-gray-800 rounded-r hover:bg-lime-500">
                        <Image 
                        src='/assets/icons/searchicon.svg'
                        width={25}
                        height={25}
                        className="py-3"
                        alt="Search Icon glass" />
                    </button>
                </div>
            </div>

            {/* customer Service */}
            <div className="col-span-2">

            </div>

            {/* Utility Icons */}
            <div className="col-span-2 flex justify-evenly items-center text-xl text-gray-900">
                <button>
                    <Image 
                    src='/assets/icons/usericon.svg'
                    width={30}
                    height={30}
                    alt="User Icon" />
                </button>
                <button>
                    <i class="bi bi-heart-fill"></i>
                </button>
                <a href="#" className="flex gap-2 items-center">
                    <div className="relative hover:text-red-500">
                    <Image 
                    src='/assets/icons/cart.svg'
                    width={30}
                    height={30}
                    alt="File Icon"/>
                    <span className="absolute top-0 -right-2 bg-red-500 text-xs rounded-full px-1">
                        2
                    </span>
                    </div>
                    <div className="smallline-height">
                        <h2 className="text-xs text-gray-500 m-0 p-0">Your Cart</h2>
                        <span className="text-lg p-0 m-0 text-gray-800 font-bold">$ 202,300.00</span>
                    </div>
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Menu