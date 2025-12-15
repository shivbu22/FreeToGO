import React, { useState } from 'react';
import { HelpCircle, Plane, EyeOff } from 'lucide-react';

const MysteryBox: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-24 bg-gradient-to-b from-[#121212] to-black text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="inline-block mb-4 p-3 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
            <EyeOff className="text-neonCyan w-6 h-6" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">BLIND DATE <span className="italic font-serif text-neonCyan">MODE</span></h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Can you handle the anxiety? Book a trip for $399. We reveal the destination 48 hours before departure.
        </p>

        <div 
            className="relative w-64 h-64 mx-auto cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* The Box */}
            <div className={`
                absolute inset-0 bg-black border-2 border-neonCyan rounded-3xl flex items-center justify-center
                transition-all duration-500 ease-out z-20
                ${isHovered ? 'scale-110 shadow-[0_0_50px_rgba(0,255,255,0.6)] rotate-3' : 'shadow-[0_0_20px_rgba(0,255,255,0.2)]'}
            `}>
                <HelpCircle className={`w-24 h-24 text-neonCyan transition-all duration-300 ${isHovered ? 'animate-pulse' : ''}`} />
            </div>

            {/* Glitch layers */}
            <div className={`absolute inset-0 border border-red-500 rounded-3xl z-10 opacity-0 transition-all duration-100 ${isHovered ? 'opacity-50 translate-x-2 translate-y-2' : ''}`}></div>
            <div className={`absolute inset-0 border border-blue-500 rounded-3xl z-10 opacity-0 transition-all duration-100 ${isHovered ? 'opacity-50 -translate-x-2 -translate-y-2' : ''}`}></div>
        </div>

        <button className="mt-12 bg-neonCyan text-black text-xl font-bold px-12 py-4 rounded-full hover:shadow-[0_0_30px_#00FFFF] transition-all flex items-center gap-3 mx-auto">
            <Plane className={`transition-transform duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`} />
            ROLL THE DICE
        </button>
        
        <p className="mt-4 text-xs text-gray-600 font-mono">
            *No refunds if you end up in Ohio (JK, it's always somewhere cool).
        </p>
      </div>
    </div>
  );
};

export default MysteryBox;