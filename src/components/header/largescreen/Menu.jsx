import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../ui/Button.jsx'

const TopNav = () => {
  return (
  <div className="bg-white py-3 px-10">
    <div className="container mx-auto flex justify-between items-center">
        <Button>
            <Image 
            src='assets/icons/category.svg'
            width={20}
            height={20}
            alt='Category Icon' />
            <h2 className='text-sm'>SHOP BY CATEGORY</h2>          
        </Button>

        {/* Navigation Links */}
        <div className="text-gray-900 flex space-x-6 text-sm">
            <a href="" className='flex gap-1'>
                <Image 
                src="/assets/icons/lightening.svg"
                width={20}
                height={20}
                alt='Black Tag Icon'/>
                <h3>Deals Today</h3>
            </a>
            <a href="" className='flex gap-2'>
                <Image 
                src="/assets/icons/tag-black.svg"
                width={15}
                height={15}
                alt='Black Tag Icon'/>
                <h3>Special Prices</h3>
            </a>
            <select>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
            </select>
            <select>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
            </select>
            <select>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
            </select>
            <select>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
            </select>
            <select>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
            </select>
            <select>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
            </select>
            <select>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
                <option className="hover:text-yellow-500">
                Deals Today
                </option>
            </select>
        </div>

        {/* Utility Icons */}
        <button className="flex gap-2 items-center text-gray-900">
            <Image 
            src="assets/icons/rotate.svg"
            alt='rotate icon'
            width={20}
            height={20} />
            <h3>Recently Viewed</h3>
        </button>
    </div>
  </div>
  )
}

export default TopNav