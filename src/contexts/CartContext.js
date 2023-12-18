import React, {createContext, useEffect, useState} from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    // States
    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);
    // total price state
    const [totalPrice, setTotalPrice] = useState(1000);

    // update item amount
    useEffect(() => {
        if (cart) {
            const amount = cart.reduce((total, item) => {
                return total + item.amount;
            }, 0);
            setItemAmount(amount);
        }
    }, [cart]);

    // update total price
    useEffect(() => {
        if (cart) {
            const price = cart.reduce((total, item) => {
                return total + item.amount * item.price;
            }, 0);
            setTotalPrice(price);
        }
    }, [cart]);

    const addToCart = (product, id) => {
        const newItem = {...product, amount: 1};
        // Check if an item is already in the cart
        // If it is, add 1 to the amount
        const existingItem = cart.find((item) => {
            return item.id === id;
        });
        if (existingItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return {...item, amount: item.amount + 1};
                } else {
                    return item;
                }
            });
            setCart(newCart);
        }
        // If not, add it to the cart
        else {
            setCart([...cart, newItem]);
        }
    };

    // remove from cart
    const removeFromCart = (id) => {
        const newCart = cart.filter(item => {
            return item.id !== id;
        })
        setCart(newCart);
    };

    // clear cart
    const clearCart = () => {
        setCart([]);
    };

    // increase amount
    const increaseAmount = (id) => {
        const newCart = [...cart].map((item) => {
            if (item.id === id) {
                return {...item, amount: item.amount + 1};
            } else {
                return item;
            }
        });
        setCart(newCart);
    };

    // decrease amount
    const decreaseAmount = (id) => {
        const newCart = [...cart].map((item) => {
            if (item.id === id) {
                const newAmount = item.amount - 1;
                // Check if the new amount is greater than 0
                return {...item, amount: newAmount > 0 ? newAmount : 0};
            } else {
                return item;
            }
        });

        // Filter out items with amount greater than 0
        const updatedCart = newCart.filter((item) => item.amount > 0);

        setCart(updatedCart);
    }

    return <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, totalPrice}}>
        {children}
    </CartContext.Provider>;
};

export default CartProvider;
