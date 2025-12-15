import React from 'react';
import { Vibe, SquadMember } from '../types';
import { Users, Zap, Music, Beer } from 'lucide-react';

const mockSquad: SquadMember[] = [
  { id: '1', name: 'Jax', vibe: Vibe.PARTY, matchPercent: 98, imageUrl: 'https://picsum.photos/id/1005/200/200' },
  { id: '2', name: 'Luna', vibe: Vibe.ADVENTURE, matchPercent: 92, imageUrl: 'https://picsum.photos/id/1011/200/200' },
  { id: '3', name: 'Kai', vibe: Vibe.CHILL, matchPercent: 85, imageUrl: 'https://picsum.photos/id/1025/200/200' },
];

const SquadMatcher: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-5xl font-black text-white mb-2">SQUAD <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonLime to-neonCyan">MATCHER</span></h2>
                <p className="text-gray-400 max-w-lg">
                    Don't travel solo unless you want to. Our algo matches you based on budget, vibe, and questionable music taste.
                </p>
            </div>
            <button className="mt-6 md:mt-0 px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                Sync Spotify
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockSquad.map((member) => (
                <div key={member.id} className="relative group perspective-1000">
                    <div className="clay-card p-6 min-h-[400px] flex flex-col items-center justify-between transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
                        
                        <div className="absolute top-4 right-4 bg-neonLime text-black font-bold text-xs px-2 py-1 rounded">
                            {member.matchPercent}% MATCH
                        </div>

                        <div className="w-32 h-32 rounded-full border-4 border-white/10 overflow-hidden mb-6 relative">
                            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <div className="absolute inset-0 bg-neonLime/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="text-center w-full">
                            <h3 className="text-3xl font-bold uppercase mb-1">{member.name}</h3>
                            <div className="inline-block bg-white/5 px-3 py-1 rounded-full mb-6">
                                <span className="text-neonCyan text-xs tracking-wider font-bold">{member.vibe}</span>
                            </div>

                            <div className="flex justify-center gap-4 text-gray-400">
                                <div className="flex flex-col items-center">
                                    <Music size={16} className="mb-1 text-white" />
                                    <span className="text-[10px]">EDM</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Zap size={16} className="mb-1 text-white" />
                                    <span className="text-[10px]">HIGH</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Beer size={16} className="mb-1 text-white" />
                                    <span className="text-[10px]">$50/DAY</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-8 border border-white/20 py-3 font-mono text-sm uppercase hover:bg-white hover:text-black transition-colors">
                            Invite to Squad
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SquadMatcher;