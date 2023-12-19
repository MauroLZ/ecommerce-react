import React from 'react';

const Hero = () => {
    const scrollToItems = () => {
        const itemsSection = document.getElementById('items');
        itemsSection.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <section className="relative h-[800px] bg-menMobile sm:bg-men bg-no-repeat bg-cover bg-center py-24">
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black opacity-25 sm:opacity-10"></div>

            <div className="container mx-auto flex justify-around sm:justify-start items-center sm:items-start h-full relative sm:ml-44 sm:mt-20">
                {/* Text */}
                <div className="flex flex-col justify-center text-stone-300 z-10">
                    {/* Pretitle */}
                    <div className="font-semibold flex items-center uppercase">
                        <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
                        New Collection
                    </div>
                    <h1 className="text-[60px] sm:text-[70px] leading-[1.1] font-light mb-4 uppercase w-3/4">
                        Adventure a new you <br/>
                        <span className="font-semibold">Spring Clothing</span>
                    </h1>
                </div>
            </div>

            {/* "See More" Button container */}
            <div className={"w-screen flex justify-center items-center absolute bottom-20 sm:bottom-40 z-10"}>
                <button
                    className="right-50 bg-stone-300 text-primary py-4 px-8 rounded-full transition hover:-translate-y-2"
                    onClick={scrollToItems}>
                    See More
                </button>
            </div>
        </section>
    );
};

export default Hero;
