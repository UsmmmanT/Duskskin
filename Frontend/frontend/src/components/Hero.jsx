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
            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-end w-full pb-8 sm:pb-12 md:pb-16 px-4 text-center flex-1">
                <Link
                    to="/collection"
                    className="inline-flex items-center justify-center rounded-none border border-black bg-[#f098ac] px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-black transition hover:opacity-90"
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