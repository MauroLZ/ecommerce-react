import React, {useContext} from 'react';
// import userParams
import {useParams} from 'react-router-dom';
// importing cart context
import {CartContext} from '../contexts/CartContext';
// importing product context
import {ProductContext} from '../contexts/ProductContext';

const ProductDetails = () => {
    // get product id
    const {id} = useParams();
    const {products} = useContext(ProductContext);
    const {addToCart} = useContext(CartContext);

    // get product from id
    const product = products.find((item) => {
        return item.id === parseInt(id);
    });

    // if product isn't found
    if (!product) {
        return <div className={"h-screen flex justify-center items-center"}>Loading product...</div>;
    }

    // destructure product
    const {image, title, price, description} = product;
    return <section className={"pt-32 pb-12 lg:py-32 h-screen flex items-center"}>
        <div className="container mx-auto">
            {/*product info wrapper*/}
            <div className={"flex flex-col lg:flex-row items-center"}>
                {/*image*/}
                <div className={"flex flex-1 justify-center items-center mb-8 lg:mb-0"}>
                    <img src={image} alt={title} className={"max-w-[200px] lg:max-w-sm"}/>
                </div>
                {/*text*/}
                <div className={"flex-1 text-center lg:text-left"}>
                    <h1 className={"text-[26px] font-medium mb-2 max-2-[450px] mx-auto lg:mx-0"}>
                        {title}
                    </h1>
                    <div className={"text-xl text-red-400 font-medium mb-6"}>
                        ${price}
                    </div>
                    <p className={"mb-8"}>
                        {description}
                    </p>
                    <button className={"bg-primary py-4 px-8 text-white font-medium rounded-full"}
                            onClick={() => addToCart(product, product.id)}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </section>;
};

export default ProductDetails;
