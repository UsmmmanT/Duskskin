import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Hero = () => {
    return (
        <section
            className="relative flex flex-col items-center justify-between w-full overflow-hidden bg-white mx-auto"
            style={{
                backgroundImage: `url(${logo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '65vh',
            }}
        >
            <div className="absolute inset-0 bg-black/25" />
            
            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-end w-full pb-8 sm:pb-12 md:pb-16 px-4 text-center flex-1">
               
                
                <Link
                    to="/collection"
                    className="px-5 sm:px-7 py-2 sm:py-3 text-xs sm:text-sm font-medium tracking-widest text-black uppercase transition-all duration-300 hover:opacity-90"
                    style={{
                        backgroundColor: 'var(--color-brand-primary)',
                        borderRadius: '0px'
                    }}
                >
                    Shop Now
                </Link>
            </div>

            {/* Aspect Ratio Container */}
            <style>{`
                section {
                    aspect-ratio: auto;
                }
                @media (max-width: 640px) {
                    section { min-height: 60vh; }
                }
            `}</style>
        </section>
    );
};

export default Hero;