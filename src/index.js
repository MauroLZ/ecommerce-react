import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// importing product provider
import ProductProvider from "./contexts/ProductContext";
// importing sidebar provider
import SidebarProvider from "./contexts/SidebarContext";
// importing cart provider
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SidebarProvider>
        <CartProvider>
            <ProductProvider>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </ProductProvider>
        </CartProvider>
    </SidebarProvider>
);
