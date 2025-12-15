import React from 'react';
import HeroPortal from './components/HeroPortal';
import SquadMatcher from './components/SquadMatcher';
import AssignmentAssassin from './components/AssignmentAssassin';
import CampusWars from './components/CampusWars';
import MysteryBox from './components/MysteryBox';
import DeanGuard from './components/DeanGuard';
import { Ghost, Menu } from 'lucide-react';

const Navbar: React.FC = () => (
  <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-lg border-b border-white/10 px-6 py-4 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <Ghost className="text-neonLime w-8 h-8" />
      <span className="font-bold text-xl tracking-tighter">FreeToLeavee</span>
    </div>
    <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-gray-400">
      <a href="#" className="hover:text-neonLime transition-colors">Destinations</a>
      <a href="#" className="hover:text-neonCyan transition-colors">Squads</a>
      <a href="#" className="hover:text-neonLime transition-colors">Assassin</a>
      <a href="#" className="hover:text-neonCyan transition-colors">Merch</a>
    </div>
    <div className="flex items-center gap-4">
        <button className="hidden md:block text-xs font-mono bg-white/10 px-3 py-1 rounded border border-white/20">
            Double-Tap ESC for Stealth
        </button>
        <Menu className="md:hidden text-white" />
    </div>
  </nav>
);

const Footer: React.FC = () => (
  <footer className="bg-black border-t border-white/10 py-12 px-6 text-center">
      <h2 className="text-9xl font-black text-white/5 select-none mb-8">ESCAPE</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-500 font-mono text-sm">
          <a href="#" className="hover:text-white">Terms of Chaos</a>
          <a href="#" className="hover:text-white">Privacy (We don't tell your parents)</a>
          <a href="#" className="hover:text-white">Refunds (Good luck)</a>
      </div>
      <p className="mt-8 text-gray-700 text-xs">
          © 2024 FreeToLeavee Inc. Built for the burnt out.
      </p>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-charcoal text-white font-sans selection:bg-neonLime selection:text-black">
      {/* The Stealth Component sits on top of everything */}
      <DeanGuard />
      
      <Navbar />
      
      <main className="pt-16">
        <HeroPortal />
        
        {/* Marquee Separator */}
        <div className="bg-neonLime overflow-hidden py-3 border-y-4 border-black rotate-1 scale-105 z-20 relative">
            <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] text-black font-black text-xl italic">
                STUDY LESS • TRAVEL MORE • DON'T TELL THE DEAN • FLIGHTS FROM $29 • ASSIGNMENT ASSASSIN LIVE • SQUAD UP •
                STUDY LESS • TRAVEL MORE • DON'T TELL THE DEAN • FLIGHTS FROM $29 • ASSIGNMENT ASSASSIN LIVE • SQUAD UP •
            </div>
        </div>

        <SquadMatcher />
        <AssignmentAssassin />
        <MysteryBox />
        <CampusWars />
      </main>

      <Footer />
    </div>
  );
}

export default App;