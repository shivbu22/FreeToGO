import React, { useEffect, useState } from 'react';

const DeanGuard: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let lastTap = 0;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 500 && tapLength > 0) {
          setActive((prev) => !prev);
        }
        lastTap = currentTime;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white text-black font-serif overflow-y-auto p-12 cursor-text select-text">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 border-b border-black pb-8">
          <h1 className="text-3xl font-bold mb-4 uppercase tracking-wider">
            The Socio-Economic Impacts of Micro-Economics in 19th Century Europe
          </h1>
          <p className="italic text-lg">Dr. I. M. Outtaher, Ph.D.</p>
          <p className="text-sm text-gray-600 mt-2">Department of Applied Boredom, University of Nowhere</p>
        </header>

        <section className="mb-8">
          <h2 className="font-bold text-lg mb-2 uppercase">Abstract</h2>
          <p className="text-justify leading-relaxed text-gray-800 text-sm">
            This paper aims to obfuscate the current digital environment of the user by simulating a high-density academic interface. 
            While the observer assumes rigorous intellectual pursuit, the subject is, in reality, contemplating a budget-friendly 
            excursion to a coastal region. The juxtaposition of performative studiousness and internal escapism creates a dialectic 
            tension characteristic of the post-modern collegiate experience. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. THIS IS A STEALTH MODE. DO NOT READ THIS PART OUT LOUD. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <div className="columns-2 gap-8 text-xs leading-5 text-justify">
          <p className="mb-4">
            <strong>1. Introduction</strong><br/>
            The quick brown fox jumps over the lazy dog. But why is the dog lazy? Perhaps it is burnout. 
            Perhaps the dog needs a vacation. Economic indicators suggest that canine productivity drops 
            precipitously when leisure time is restricted. In 1845, the potato famine caused widespread migration, 
            much like students migrating to Cancun during spring break.
          </p>
          <p className="mb-4">
            The correlation between caffeine intake and late-night panic is well documented (Smith, 2023). 
            However, the inverse relationship between beach exposure and stress levels remains the primary 
            driver of the "FreeToLeavee" phenomenon. We hypothesize that a 4-day weekend can increase GPA 
            by 0.5 points simply by preventing complete mental collapse.
          </p>
          <p className="mb-4">
            <strong>2. Methodology</strong><br/>
            Data was collected using a double-blind study where participants were either given a textbook 
            or a margarita. The margarita group reported significantly higher life satisfaction scores (p &lt; 0.001). 
            The textbook group reported higher levels of "wanting to cry in the library bathroom."
          </p>
           <p className="mb-4">
            Furthermore, the granular analysis of fiscal responsibility indicates that "Study Now, Pay Later" 
            schemes are essential for the modern liquidity-constrained scholar. As depicted in Figure 1.2 (not shown), 
            the velocity of money increases when spent on experiences rather than textbooks that will be sold back 
            for pennies on the dollar.
          </p>
           <p className="mb-4">
            <strong>3. Conclusion</strong><br/>
            In conclusion, if you are reading this, the Dean is probably walking behind you right now. 
            Keep a straight face. Nod slowly. Type something random. Good. He's gone. 
            Double tap Escape to return to freedom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeanGuard;