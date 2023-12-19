import React from 'react';

const Hero = () => {
    const scrollToItems = () => {
        const itemsSection = document.getElementById('items');
        itemsSection.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <section className="relative h-[800px] bg-men bg-no-repeat bg-cover bg-center py-24">
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="container mx-auto flex justify-around items-center sm:items-start h-full relative">
                {/* Text */}
                <div className="flex flex-col justify-center text-stone-300 z-10">
                    {/* Pretitle */}
                    <div className="font-semibold flex items-center uppercase">
                        <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
                        New Collection
                    </div>
                    <h1 className="text-[70px] leading-[1.1] font-light mb-4 uppercase">
                        Adventure a new you <br/>
                        <span className="font-semibold">Spring Clothing</span>
                    </h1>
                </div>
            </div>

            {/* "See More" Button container */}
            <div className={"w-screen flex justify-center items-center absolute bottom-20 sm:bottom-40 z-10"}>
                <button
                    className="right-50 bg-primary text-white py-4 px-8 rounded-full"
                    onClick={scrollToItems}>
                    See More
                </button>
            </div>
        </section>
    );
};

export default Hero;
