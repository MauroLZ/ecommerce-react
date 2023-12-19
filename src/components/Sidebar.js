import React, {useContext} from 'react';
// import link
import {Link} from 'react-router-dom';
// import icons
import {IoMdArrowForward} from 'react-icons/io';
import {FiTrash2} from 'react-icons/fi';
// import components
import CartItem from '../components/CartItem';
// import sidebar context
import {SidebarContext} from '../contexts/SidebarContext';
// import cart context
import {CartContext} from '../contexts/CartContext';

const Sidebar = () => {
    const {isOpen, handleClose} = useContext(SidebarContext);
    const {cart, clearCart, totalPrice, itemAmount} = useContext(CartContext);
    return (
        <div
            className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-40 px-4 lg:px-[35px] overflow-scroll`}>
            <div className={"flex items-center justify-between py-6 border-b"}>
                <div className={"uppercase text-sm font-semibold"}>Shopping Bag ({itemAmount})</div>
                {/*Icon*/}
                <div className={"cursor-pointer w-8 h-8 flex justify-center items-center"}>
                    <IoMdArrowForward className={"text-2xl cursor-pointer"} onClick={handleClose}/>
                </div>
            </div>
            <div className={"flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b"}>{cart.map(item => {
                return <CartItem item={item} key={item.id}/>;
            })}</div>
            <div className={"flex flex-col gap-y-3 py-4 mt-4"}>
                <div className={"flex w-full justify-between items-center"}>
                    {/*total*/}
                    <div className={"uppercase font-semibold"}>
                        <span className={"mr-2"}>Total:</span> ${totalPrice.toFixed(2)}
                    </div>
                    {/*clear cart*/}
                    <div onClick={clearCart}
                         className={"flex cursor-pointer py-4 bg-rose-500 text-white w-12 h-12 justify-center items-center text-xl"}>
                        <FiTrash2/>
                    </div>
                </div>
                <Link className={"bg-gray-200 flex p-4 justify-center text-primary w-full font-medium"} to={"/"}>
                    View Cart
                </Link>
                <Link className={"bg-primary flex p-4 justify-center text-white w-full font-medium"} to={"/"}>
                    Checkout
                </Link>
            </div>
        </div>);
};

export default Sidebar;
