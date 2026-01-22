
import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <section 
      className="relative w-full py-24 md:py-32 flex items-center justify-center bg-primary overflow-hidden"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(rgba(10, 26, 26, 0.7), rgba(10, 26, 26, 0.7)), url("${backgroundImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      {/* Ornamentación geométrica */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full border border-white -top-64 -left-32 animate-pulse-slow"></div>
        <div className="absolute w-[300px] h-[300px] rounded-full border border-white bottom-0 right-0 opacity-50"></div>
      </div>

      <div className="container max-w-[1280px] px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight animate-brand-entry">
          {title}
        </h1>
        <div className="w-20 h-1.5 bg-secondary mx-auto mb-8 rounded-full"></div>
        <p className="text-white/80 text-lg md:text-xl max-w-[700px] mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
