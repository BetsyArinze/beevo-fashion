import React, { useEffect, useState } from "react";
import {SidebarContext} from '../contexts/SidebarContext';
import { CartContext } from "../contexts/CartContext";
import {BsBag} from 'react-icons/bs';
import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.svg';

const Header = () => {
    const [isActive, setIsActive] = useState(true);
    const {isOpen, setIsOpen} = useContext(SidebarContext);
    const {itemAmount} =  useContext(CartContext);
    // event listener
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
    });
    return (
            <header className={`flex justify-between w-full ${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 
            transition-all`}>
                <div className="container mx-auto flex items-center justify-between h-full">
                    {/* Logo */}
                    <Link to={'/'}>
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold">Beevo </h1>
                            <img className="w-[40px]" src={Logo} alt="" />
                        </div>
                    </Link>

                    {/* Pages */}
                    <div className={`w-full block lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
                        <div className="font-medium text-2xl lg:flex-grow">
                            <a href="../pages/Home.js" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mx-5">
                                HOME
                            </a>
                            <a href="../pages/Shop.js" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mx-5">
                                SHOP
                            </a>
                            <a href="../pages/Contact.js" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mx-5">
                                CONTACT
                            </a>
                        </div>
                    
                    </div>

                    <div className="flex">
                        {/* Cart */}
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className='cursor-pointer flex relative'
                            >
                                <BsBag className="text-2xl" />
                                <div className="bg-red-500 absolute -right-2 -bottom-1 text-[12px] w-[18px]
                                h-[18px] text-white rounded-full flex justify-center items-center">
                                    {itemAmount}
                                </div>
                        </div>

                        <div className="block lg:hidden h-[30px] p-4">
                            <button
                                // onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center rounded text-black-500 hover:text-black-400 h-full"
                            >
                            <svg
                                    className={`fill-current h-[18px] w-[18px] ${isOpen ? "hidden" : "block"}`}
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                                <svg
                                    className={`fill-current h-[18px] w-[18px] ${isOpen ? "block" : "hidden"}`}
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
       
    );
}

export default Header;

