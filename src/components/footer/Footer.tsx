import React from 'react'
import { Logo } from '../importer'

const Footer = () => {
  return (
    <footer className="bg-white mt-20">
        <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                <div>
                    <h2 className="mb-6 text-sm font-bold text-gray-400 uppercase ">Company</h2>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className=" hover:underline">About</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Careers</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Brand Center</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Blog</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-bold text-gray-400 uppercase ">Help center</h2>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Discord Server</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Twitter</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Facebook</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-bold text-gray-400 uppercase ">Legal</h2>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Terms</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-bold text-gray-400 uppercase ">Company</h2>
                    <ul className="text-gray-500 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="#" className=" hover:underline">About</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Careers</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Brand Center</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Blog</a>
                        </li>
                    </ul>
                </div>
                
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
            <div className="text-center">
                <span className="block text-sm text-center mt-5 text-gray-500 dark:text-gray-400">© 2023 <a href="#"
                        className="hover:underline">XRAY</a>. All Rights Reserved.
                </span>
               
            </div>
        </div>
    </footer>
  )
}

export default Footer