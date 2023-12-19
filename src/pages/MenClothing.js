import React, {useContext} from 'react';
import {ProductContext} from '../contexts/ProductContext';
import Product from "../components/Product";
import MenHero from "../components/MenHero";

const MenClothingPage = () => {
    const {products} = useContext(ProductContext);

    const menFilteredProducts = products.filter(item => {
        return item.category === "men's clothing"
    })

    if (products.length === 0) return <div>Loading...</div>;

    return (<div>
            <MenHero/>
            <section id={"items"} className={"py-16"}>
                <div className={"container mx-auto"}>
                    <div
                        className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-4"}>
                        {menFilteredProducts.map(product => {
                            return (
                                <Product product={product} key={product.id}/>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MenClothingPage;
