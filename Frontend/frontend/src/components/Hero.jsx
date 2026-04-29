import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Hero = () => {
    return (
        <section
            className="relative flex flex-col items-center justify-center w-full mt-4 overflow-hidden bg-white mx-auto"
            style={{
                backgroundImage: `url(${logo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black/25" />
            
            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-center py-12 sm:py-20 md:py-32 px-4 text-center">
                <h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4"
                    style={{fontFamily: 'var(--font-display)', color: 'white', letterSpacing: '0.02em'}}
                >
                    Glow from Dusk to Dawn
                </h1>
                
                <p 
                    className="text-sm sm:text-base md:text-lg mb-8 max-w-xl"
                    style={{color: 'rgba(255,255,255,0.95)', letterSpacing: '0.03em'}}
                >
                    Premium skincare & makeup crafted for every skin tone
                </p>
                
                <Link
                    to="/collection"
                    className="px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-medium tracking-widest text-white uppercase transition-all duration-300 hover:opacity-90"
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
                    min-height: clamp(15rem, 50vh, 60vh);
                }
                @media (max-width: 640px) {
                    section { min-height: 50vh; }
                }
            `}</style>
        </section>
    );
};

export default Hero;