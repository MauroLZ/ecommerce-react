import React from 'react';
// importing images
import womanImg from '../img/woman_hero.png';
// import link
import {Link} from 'react-router-dom';

const Hero = () => {
    return <section className={"h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24"}>
        <div className="container mx-auto flex justify-around h-full">
            {/*text*/}
            <div className={"flex flex-col justify-center"}>
                {/*pretitle*/}
                <div className={"font-semibold flex items-center uppercase"}>
                    <div className={"w-10 h-[2px] bg-red-500 mr-3"}>
                    </div>
                    New Trends
                </div>
                <h1 className={"text-[70px] leading-[1.1] font-light mb-4"}>
                    SEASONAL STYLISH <br/>
                    <span className={"font-semibold"}>
                            Women's Clothing
                        </span>
                </h1>
                <Link to={'/women-clothing'} className={"self-start uppercase font-semibold border-b-2 border-primary"}>
                    Discover More
                </Link>
            </div>
            {/*image*/}
            <div className={"hidden lg:block"}>
                <img src={womanImg} alt={"hero background"}></img>
            </div>
        </div>
    </section>;
};

export default Hero;
