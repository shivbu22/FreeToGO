import React, { useState, useRef } from 'react';
import { MousePointer2 } from 'lucide-react';

const HeroPortal: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  return (
    <div 
      ref={containerRef}
      className="relative h-[80vh] w-full overflow-hidden cursor-col-resize select-none border-b-4 border-neonLime"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* RIGHT SIDE: THE BEACH (Destination) */}
      <div 
        className="absolute inset-0 bg-cover bg-center flex items-center justify-center"
        style={{ 
            backgroundImage: 'url("https://picsum.photos/id/1047/1920/1080")', // Vibrant nature/city
            filter: 'saturate(1.5) contrast(1.2)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-neonCyan/20 to-transparent mix-blend-overlay" />
        <h1 className="text-8xl md:text-9xl font-black text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] tracking-tighter text-right pr-12 w-full">
          TO<br/>FREEDOM
        </h1>
      </div>

      {/* LEFT SIDE: THE DORM (Reality) - Clipped */}
      <div 
        className="absolute inset-0 bg-cover bg-center flex items-center justify-center border-r-4 border-neonLime shadow-[0_0_30px_#39FF14]"
        style={{ 
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            backgroundImage: 'url("https://picsum.photos/id/1069/1920/1080")', // Gloomy indoor
            filter: 'grayscale(100%) brightness(0.4) contrast(1.2)'
        }}
      >
        <div className="absolute inset-0 bg-charcoal/60" />
         <h1 className="text-8xl md:text-9xl font-black text-gray-500 drop-shadow-lg tracking-tighter text-left pl-12 w-full">
          FROM<br/>GRIND
        </h1>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-neonLime z-10 shadow-[0_0_20px_#39FF14]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black border-2 border-neonLime rounded-full flex items-center justify-center animate-pulse-fast">
            <MousePointer2 className="text-neonLime w-8 h-8 rotate-[-45deg]" />
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <span className="text-neonLime font-mono text-sm tracking-[0.5em] bg-black/80 px-4 py-1">DRAG TO ESCAPE</span>
      </div>
    </div>
  );
};

export default HeroPortal;