import React, {useContext, useEffect, useState} from 'react';
// import contexts
import {SidebarContext} from "../contexts/SidebarContext";
import {CartContext} from "../contexts/CartContext";
// import link
import {Link} from "react-router-dom";
//import icons
import {BsBag} from 'react-icons/bs';
import { IoIosMenu } from "react-icons/io";
// import logo
import Logo from "../img/logo.svg";
// importing mobile header dropdown
import Dropdown from "./MobileHeader";

const Header = () => {
    // header state
    const [isActive, setIsActive] = useState(false);
    const {isOpen, setIsOpen} = useContext(SidebarContext);
    const {itemAmount} = useContext(CartContext);
    // mobile header state
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // event listener
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 30 ? setIsActive(true) : setIsActive(false);
        });
    }, []);


    return (
        <header className={`${isActive ? 'bg-stone-100 py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-20 transition-all`}>
            <div className={"container flex mx-auto items-center justify-between h-full"}>
                {/*logo*/}
                <div className="sm:hidden flex justify-center items-center">
                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <div className="text-primary">
                            <IoIosMenu className={"text-5xl"}/>
                        </div>
                    </button>
                </div>

                {/*mobile dropdown*/}
                <Dropdown isOpen={isDropdownOpen} toggleDropdown={() => setIsDropdownOpen(!isDropdownOpen)}/>
                <Link to={"/"}>
                    <div className={"md:ml-5 md:text-4xl"}>
                        <img className={"w-[40px]"} src={Logo} alt="Logo"/>
                    </div>
                </Link>
                {/*cart */}

                <div className={"justify-end items-center hidden sm:flex"}>
                    {/*Women and men categories*/}
                    <ul className={"justify-center items-center md:gap-12 lg:gap-16 gap-16 uppercase text-2xl font-light flex"}>
                        <li className={"transition transform hover:-translate-y-1"}>
                            <Link to={'/women-clothing'}>
                                Women
                            </Link>
                        </li>
                        <li className={"transition transform hover:-translate-y-1"}>
                            <Link to={'/men-clothing'}>
                                Men
                            </Link>
                        </li>
                        <li className={"transition transform hover:-translate-y-1"}>
                            <Link to={'/'}>
                                Trending
                            </Link>
                        </li>
                        <li className={"transition transform hover:-translate-y-1"}>
                            <Link to={'/'}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                {/*mobile menu dropdown*/}

                <div onClick={() => setIsOpen(!isOpen)}
                     className={"cursor-pointer flex relative max-w-[50px] md:mr-5"}>
                    <BsBag className={"text-3xl md:text-4xl"}/>
                    <div
                        className={"bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center"}>
                        {itemAmount}
                    </div>
                </div>
            </div>
        </header>);
};

export default Header;
