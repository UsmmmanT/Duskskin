import React from 'react';

const DuskskinLogo = ({ variant = 'clean', width = '200', className = '' }) => {
  /**
   * Duskskin Luxury Minimalist Wordmark Logo
   * 
   * Props:
   * - variant: 'clean' (text only) | 'accent' (with underline and accent dots)
   * - width: logo width in pixels (default: 200px)
   * - className: additional CSS classes
   */

  const cleanLogo = (
    <svg
      viewBox="0 0 400 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={`duskskin-logo-clean ${className}`}
      width={width}
      height={width * 0.25}
    >
      <text
        x="200"
        y="65"
        fontFamily="'Montserrat', 'Gotham', 'Avenir', sans-serif"
        fontSize="48"
        fontWeight="500"
        letterSpacing="6"
        textAnchor="middle"
        fill="#000000"
      >
        DUSKSKIN
      </text>
    </svg>
  );

  const accentLogo = (
    <svg
      viewBox="0 0 400 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      className={`duskskin-logo-accent ${className}`}
      width={width}
      height={width * 0.25}
    >
      <text
        x="200"
        y="65"
        fontFamily="'Montserrat', 'Gotham', 'Avenir', sans-serif"
        fontSize="48"
        fontWeight="500"
        letterSpacing="6"
        textAnchor="middle"
        fill="#000000"
      >
        DUSKSKIN
      </text>

      {/* Subtle elegant underline */}
      <line x1="80" y1="78" x2="320" y2="78" stroke="#000000" strokeWidth="0.8" opacity="0.3" />

      {/* Dusk-inspired accent dots */}
      <circle cx="70" cy="82" r="1.5" fill="#C9A96E" opacity="0.6" />
      <circle cx="330" cy="82" r="1.5" fill="#C9A96E" opacity="0.6" />
    </svg>
  );

  return variant === 'accent' ? accentLogo : cleanLogo;
};

export default DuskskinLogo;
