import React from 'react';
import { Trophy, MapPin } from 'lucide-react';

const CampusWars: React.FC = () => {
  return (
    <div className="bg-charcoal py-20 px-4 relative">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter text-white mb-4">
                    CAMPUS <span className="text-red-500">WARS</span>
                </h2>
                <p className="text-xl text-gray-400 font-mono">Defend your territory. The winning college gets a massive party.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Visual Map Placeholder */}
                <div className="flex-grow bg-[#1a1a1a] rounded-xl border border-gray-800 p-4 min-h-[400px] relative overflow-hidden group">
                    <img 
                        src="https://picsum.photos/id/10/800/600" 
                        alt="Tactical Map" 
                        className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity grayscale" 
                    />
                    
                    {/* Map Markers */}
                    <div className="absolute top-1/4 left-1/4 animate-bounce">
                        <MapPin className="text-neonCyan w-8 h-8 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
                        <span className="bg-black/80 text-neonCyan text-xs px-2 py-1 rounded absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap border border-neonCyan">Harvard: Goa</span>
                    </div>

                    <div className="absolute bottom-1/3 right-1/3 animate-pulse">
                        <MapPin className="text-neonLime w-8 h-8 drop-shadow-[0_0_10px_rgba(57,255,20,0.8)]" />
                        <span className="bg-black/80 text-neonLime text-xs px-2 py-1 rounded absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap border border-neonLime">Yale: Ibiza</span>
                    </div>

                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="border-2 border-white/10 w-[90%] h-[90%] rounded-lg"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 text-9xl font-black select-none">WARZONE</div>
                    </div>
                </div>

                {/* Leaderboard */}
                <div className="w-full lg:w-96 space-y-4">
                    {[
                        { name: 'Harvard', score: 9820, color: 'bg-neonCyan' },
                        { name: 'Yale', score: 8450, color: 'bg-purple-500' },
                        { name: 'Stanford', score: 7200, color: 'bg-red-500' },
                        { name: 'MIT', score: 6800, color: 'bg-orange-500' },
                    ].map((uni, idx) => (
                        <div key={uni.name} className="bg-[#1e1e1e] p-4 rounded-lg border border-gray-800 flex items-center gap-4 hover:border-white/30 transition-all">
                            <div className="font-mono text-2xl font-bold text-gray-500 w-8">0{idx + 1}</div>
                            <div className="flex-1">
                                <div className="flex justify-between items-end mb-1">
                                    <h4 className="font-bold text-lg">{uni.name}</h4>
                                    <span className="font-mono text-xs text-gray-400">{uni.score} PTS</span>
                                </div>
                                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                                    <div className={`h-full ${uni.color}`} style={{ width: `${(uni.score / 10000) * 100}%` }}></div>
                                </div>
                            </div>
                            {idx === 0 && <Trophy className="text-yellow-400 w-6 h-6" />}
                        </div>
                    ))}
                    
                    <div className="mt-8 p-6 bg-neonLime/10 border border-neonLime/20 rounded-lg text-center">
                        <h3 className="text-neonLime font-bold text-xl mb-2">CURRENT REWARD</h3>
                        <p className="text-white text-sm mb-4">Exclusive Boiler Room Set @ Winning Campus</p>
                        <button className="w-full bg-neonLime text-black font-bold py-2 hover:bg-white transition-colors">
                            JOIN THE FIGHT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CampusWars;