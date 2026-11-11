import React from 'react';
import { Sparkles, Zap } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    { text: "GENERATIVE AI WORKFLOWS", highlight: true },
    { text: "BRAND IDENTITY SYSTEMS", highlight: false },
    { text: "PERFORMANCE AD CREATIVES", highlight: true },
    { text: "CINEMATIC STORYTELLING", highlight: false },
    { text: "PROMPT ENGINEERING ARCHITECTURE", highlight: true },
    { text: "CROSS-PLATFORM LEAD ACQUISITION", highlight: false },
    { text: "DIGITAL ART DIRECTION", highlight: true },
    { text: "VISAKHAPATNAM & GLOBAL CLIENTELE", highlight: false },
  ];

  return (
    <div className="w-full py-3.5 bg-[#0d0e14] border-y border-white/[0.08] overflow-hidden select-none relative backdrop-blur-md">
      {/* Side gradient fade masks */}
      <div 
        className="pointer-events-none absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#0a0b10] to-transparent z-10"
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#0a0b10] to-transparent z-10"
        aria-hidden="true" 
      />

      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* First copy */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {items.map((item, idx) => (
            <React.Fragment key={`ticker-1-${idx}`}>
              <span 
                className={`font-['Space_Grotesk'] text-xs font-bold tracking-widest uppercase flex items-center gap-2 ${
                  item.highlight ? 'text-[#00f2fe]' : 'text-white/80'
                }`}
              >
                {item.highlight ? (
                  <Sparkles className="w-3 h-3 text-[#ff9900]" />
                ) : (
                  <Zap className="w-3 h-3 text-[#00f2fe]" />
                )}
                {item.text}
              </span>
              <span className="text-white/20 select-none">·</span>
            </React.Fragment>
          ))}
        </div>

        {/* Second identical copy for seamless loop */}
        <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
          {items.map((item, idx) => (
            <React.Fragment key={`ticker-2-${idx}`}>
              <span 
                className={`font-['Space_Grotesk'] text-xs font-bold tracking-widest uppercase flex items-center gap-2 ${
                  item.highlight ? 'text-[#00f2fe]' : 'text-white/80'
                }`}
              >
                {item.highlight ? (
                  <Sparkles className="w-3 h-3 text-[#ff9900]" />
                ) : (
                  <Zap className="w-3 h-3 text-[#00f2fe]" />
                )}
                {item.text}
              </span>
              <span className="text-white/20 select-none">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
