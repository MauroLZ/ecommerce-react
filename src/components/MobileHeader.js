import React from 'react';
import {Link} from 'react-router-dom';
import {IoIosMenu} from "react-icons/io";


const Dropdown = ({isOpen, toggleDropdown}) => {
    return (
        <div
            className={`${isOpen ? 'left-0' : '-left-full'} w-full bg-white fixed top-0 h-full transition-all duration-300 z-40 px-4 lg:px-[35px] overflow-scroll`}>
            <div className={"flex items-center justify-between py-12 border-b text-2xl"}>
                <div className={"uppercase font-semibold"}>Furse Store</div>
                {/*Icon*/}
                <div className={"cursor-pointer w-8 h-8 flex justify-center items-center"} onClick={toggleDropdown}>
                    <IoIosMenu className={"cursor-pointer"}/>
                </div>
            </div>
            <div className={"text-4xl flex gap-16 flex-col justify-center items-center font-light mt-14"}>
                <Link to={"/women-clothing"}
                      onClick={toggleDropdown}>
                    Women
                </Link>
                <Link to={"/men-clothing"}
                      onClick={toggleDropdown}>
                    Men
                </Link>
                <Link to={"/"}
                      onClick={toggleDropdown}>
                    Trending
                </Link>
                <Link to={"/"}
                      onClick={toggleDropdown}>
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Dropdown;
