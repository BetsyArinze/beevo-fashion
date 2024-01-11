import React from "react";

import WomanImg from '../assets/images/woman_hero.png'
import { Link } from "react-router-dom";

const Hero = () => {
    return <section className="h-[800px] bg-[#C2EFD4] bg-no-repeat bg-cover bg-center py-24">
        <div className="container mx-auto flex justify-around h-full">
            {/* text */}
            <div className='flex flex-col justify-center'>
                {/* pretitle */}
                <div className="font-semibold flex items-center uppercase">
                    <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
                </div>
                {/* title */}
                <h1 className="text-[70px] capitalize leading-[1.1] font-light mb-4">
                    Discover and find your own fashion!<br />
                </h1>
                <h3 className="text-[20px] mt-2 mb-5">Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</h3>
                <Link 
                    to={'/'}
                    className="bg-primary self-start text-white p-3 font-semibold border-b-2 border-primary">
                    Explore now
                </Link>
            </div>
            
            {/* image  */}
            <div className="hidden lg:block">
                <img src={WomanImg} alt="" />
            </div>
        </div>    
    </section>
};

export default Hero;
