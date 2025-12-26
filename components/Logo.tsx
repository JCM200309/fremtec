
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg width="100%" height="40%" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 25L50 5L90 25" stroke="#fbc02d" strokeWidth="3" strokeLinecap="round"/>
      </svg>
      <span className="logo-text text-xl font-light uppercase">Fremtec</span>
    </div>
  );
};

export default Logo;
