
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'navbar' | 'hero';
  showTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "", 
  variant = 'navbar',
  showTagline = true 
}) => {
  const isHero = variant === 'hero';
  
  return (
    <div className={`flex flex-col items-center justify-center transition-all ${className}`}>
      {/* Icono Solar Estilizado */}
      <div className={`${isHero ? 'scale-150 mb-6' : 'scale-100 mb-1'} relative`}>
        <svg 
          width={isHero ? "120" : "60"} 
          height={isHero ? "48" : "24"} 
          viewBox="0 0 60 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          <path 
            d="M5 20L30 4L55 20" 
            stroke="#fbc02d" 
            strokeWidth={isHero ? "3" : "4"} 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          {isHero && (
            <path 
              d="M15 20L30 11L45 20" 
              stroke="#fbc02d" 
              strokeWidth="1.5" 
              strokeOpacity="0.6"
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          )}
        </svg>
      </div>

      {/* Texto de Marca */}
      <span className={`
        logo-text uppercase font-light tracking-[0.3em] transition-all
        ${isHero ? 'text-5xl md:text-6xl font-extralight text-white drop-shadow-lg' : 'text-2xl text-primary'}
      `}>
        Fremtec
      </span>

      {/* Tagline */}
      {showTagline && (
        <span className={`
          font-bold tracking-[0.4em] uppercase transition-all
          ${isHero ? 'text-sm md:text-lg text-secondary mt-2 opacity-90' : 'text-[10px] text-secondary -mt-1'}
        `}>
          Energía Solar
        </span>
      )}
    </div>
  );
};

export default Logo;