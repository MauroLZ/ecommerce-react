import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const MenClothingPage = () => {
    const { products } = useContext(ProductContext);

    const menFilteredProducts = products.filter((item) => {
        return item.category === "men's clothing";
    });

    if (products.length === 0) return <div>Loading...</div>;

    return (
        <section className="py-16 mt-10">
            <div className="container mx-auto">
                {/* Category Title */}
                <h1 className="text-4xl font-bold mb-8 w-screen flex justify-center items-center">Men's Clothing</h1>

                {/* Featured Products Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-4">
                    {menFilteredProducts.map((product) => {
                        return <Product product={product} key={product.id} />;
                    })}
                </div>

                {/* Section Divider */}
                <hr className="my-12 border-t-2 border-gray-300" />

                {/* Additional Section (e.g., Filtering Options) */}
                {/* Add your filtering options or other sections here */}
            </div>
        </section>
    );
};

export default MenClothingPage;
