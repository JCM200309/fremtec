
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 20L30 4L55 20" stroke="#fbc02d" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="logo-text text-2xl font-light uppercase tracking-[0.2em] -mt-1">Fremtec</span>
      <span className="text-[10px] text-secondary font-bold tracking-[0.3em] uppercase -mt-1">Energía Solar</span>
    </div>
  );
};

export default Logo;
