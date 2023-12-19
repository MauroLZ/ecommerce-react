import React, {useContext, useEffect, useState} from 'react';
// import contexts
import {SidebarContext} from "../contexts/SidebarContext";
import {CartContext} from "../contexts/CartContext";
// import link
import {Link} from "react-router-dom";
//import icons
import {BsBag} from 'react-icons/bs';
// import logo
import Logo from "../img/logo.svg";

const Header = () => {
    // header state
    const [isActive, setIsActive] = useState(false);
    const {isOpen, setIsOpen} = useContext(SidebarContext);
    const {itemAmount} = useContext(CartContext);

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
                <Link to={"/"}>
                    <div className={"md:ml-10 md:text-4xl"}>
                        <img className={"w-[40px]"} src={Logo} alt="Logo"/>
                    </div>
                </Link>
                {/*cart */}

                <div className={"flex justify-end items-center"}>
                    {/*Women and men categories*/}
                    <ul className={"justify-center items-center gap-16 uppercase text-2xl font-light hidden sm:flex "}>
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
                    </ul>
                </div>
                <div onClick={() => setIsOpen(!isOpen)}
                     className={"cursor-pointer flex relative max-w-[50px] md:mr-10"}>
                    <BsBag className={"text-2xl md:text-4xl"}/>
                    <div
                        className={"bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white rounded-full flex justify-center items-center"}>
                        {itemAmount}
                    </div>
                </div>
            </div>
        </header>);
};

export default Header;
