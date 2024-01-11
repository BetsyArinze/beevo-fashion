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
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [activePage, setActivePage] = useState(() => {
        return localStorage.getItem('activePage') || 'home';
    });

    // event listener
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 10 ? setIsActive(true) : setIsActive(false);
        });
        localStorage.setItem('activePage', activePage);
    }, [activePage]);
    return (
        <header className={`flex justify-between w-full ${isActive ? 'bg-white py-4' : 'bg-none py-6'} fixed w-full z-10 
            transition-all`}>
                <div className="container mx-auto flex lg:items-center justify-between h-full">
                    {/* Logo */}
                    <div className="lg:flex">
                        <Link to={'/'}>
                            <div className="flex items-center">
                                <h1 className="text-2xl font-bold">Beevo </h1>
                                <img className="w-[40px]" src={Logo} alt="" />
                            </div>
                        </Link>
                        {/* Pages list for small screens */}
                        <div className={`lg:hidden text-xl ${isNavOpen ? "block" : "hidden"}`}>
                            <Link to="../pages/home.js" className="block mt-4 mx-auto uppercase hover:text-gray-500">Home</Link>
                            <Link to="../pages/shop.js" className="block mt-4 mx-auto uppercase hover:text-gray-500">Shop</Link>
                            <Link to="../pages/contact.js" className="block mt-4 mx-auto uppercase hover:text-gray-500">Contact</Link>
                        </div>
                    </div>

                    {/* Pages */}
                    <div className={`w-full hidden block lg:flex lg:items-center lg:w-auto w-[20px] ${isNavOpen ? "block" : "hidden"}`}>
                        <div className="text-2xl lg:flex-grow">
                            <Link to="../pages/home.js" className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 mx-5 uppercase
                                ${activePage === 'home' ? 'underline' : ''}`}
                                onClick={() => setActivePage('home')}>
                                Home
                            </Link>
                            <Link to="../pages/shop.js" className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 mx-5 uppercase 
                                ${activePage === 'shop' ? 'underline' : ''}`}
                                onClick={() => setActivePage('shop')}>
                                Shop
                            </Link>
                            <Link to="../pages/contact.js" className={`block mt-4 lg:inline-block lg:mt-0 text-white-200 mx-5 uppercase
                                ${activePage === 'contact' ? 'underline' : ''}`}
                                onClick={() => setActivePage('contact')}>
                                Contact
                            </Link>
                        </div>
                    
                    </div>

                    <div className="flex">
                        {/* Cart */}
                        <div
                            onClick={() => setIsOpen(!isOpen)}
                            className='cursor-pointer flex relative h-[30px]'
                            >
                                <BsBag className="text-2xl" />
                                <div className="bg-red-500 absolute -right-2 -bottom-1 text-[12px] w-[18px]
                                h-[18px] text-white rounded-full flex justify-center items-center">
                                    {itemAmount}
                                </div>
                        </div>

                        <div className="block lg:hidden h-[30px] p-4">
                            <button
                                onClick={() => setIsNavOpen(!isNavOpen)}
                                className="flex items-center rounded text-black-500 hover:text-black-400 h-full"
                            >
                            <svg
                                    className={`fill-current h-[18px] w-[18px] ${isNavOpen ? "hidden" : "block"}`}
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                                <svg
                                    className={`fill-current h-[18px] w-[18px] ${isNavOpen ? "block" : "hidden"}`}
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

