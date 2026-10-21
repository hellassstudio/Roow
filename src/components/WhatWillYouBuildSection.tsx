import React, { useState } from 'react';
import { useTextScramble } from '../hooks/useTextScramble.ts';

interface WhatWillYouBuildSectionProps {
  onOpenJoin?: () => void;
  onOpenContact?: () => void;
}

interface BuildCardItem {
  id: number;
  title: string;
  description: string;
  buttonLabel: string;
}

const CARDS: BuildCardItem[] = [
  {
    id: 0,
    title: 'Apps',
    description:
      'Turn any idea into a fully functional app — with backend, auth, payments, and hosting already built in. No setup, no engineers, no waiting.',
    buttonLabel: 'Build an app',
  },
  {
    id: 1,
    title: 'Websites',
    description:
      'Build a website for any need. AI-generated design, custom domain, built-in SEO tools — ready to go live from day one.',
    buttonLabel: 'Build a website',
  },
  {
    id: 2,
    title: 'AI agents',
    description:
      'Create a 24/7 agent that connects to your tools, takes real action, and works while you sleep. No integration headaches.',
    buttonLabel: 'Create an AI agent',
  },
];

export const WhatWillYouBuildSection: React.FC<WhatWillYouBuildSectionProps> = ({
  onOpenJoin,
  onOpenContact,
}) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const appsText = useTextScramble('Build an app', hoveredCard === 0);
  const websitesText = useTextScramble('Build a website', hoveredCard === 1);
  const agentsText = useTextScramble('Create an AI agent', hoveredCard === 2);

  const getButtonText = (index: number) => {
    if (index === 0) return appsText;
    if (index === 1) return websitesText;
    return agentsText;
  };

  return (
    <section id="what-will-you-build" className="relative w-full bg-black select-none">
      {/* Centered framed container matching Hero, Problem, Solution, Runtime, and FAQ layouts */}
      <div className="max-w-[1920px] mx-auto px-6 sm:px-10 md:px-14 lg:px-18 xl:px-24 2xl:px-28">
        {/* Outer framed dashed container seamlessly joined with -mt-px */}
        <div className="relative w-full border border-dashed border-white/25 -mt-px overflow-hidden bg-black">
          
          {/* Top Header matching reference image: Clean, direct naming */}
          <div className="relative pt-12 sm:pt-16 pb-10 sm:pb-14 px-6 sm:px-12 text-center flex flex-col items-center border-b border-dashed border-white/25 bg-black">
            {/* Top Badge: Name is 'WHAT WILL YOU BUILD' */}
            <div className="mb-4 sm:mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/20 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e3ef4f] shadow-[0_0_8px_#e3ef4f]" />
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-white font-bold">
                  WHAT WILL YOU BUILD
                </span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-medium tracking-tight text-white font-sans antialiased leading-[1.12] mb-3 max-w-2xl">
              What will you build?
            </h2>

            {/* Narrative Subtitle */}
            <p className="text-[14.5px] sm:text-[16px] text-neutral-400 font-sans antialiased max-w-xl leading-relaxed font-normal">
              Whatever you're imagining, you can use vibe coding to build it on Roow.
            </p>
          </div>

          {/* 3-Column Grid: Plain black cards that turn yellow (#e3ef4f) on hover */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-dashed divide-white/25 bg-black">
            {CARDS.map((card, index) => {
              const isHovered = hoveredCard === index;
              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`relative p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] transition-colors duration-300 cursor-pointer ${
                    isHovered ? 'bg-[#e3ef4f]' : 'bg-black'
                  }`}
                  onClick={onOpenJoin || onOpenContact}
                >
                  {/* Top Content: Clean Title only, without extra clutter components */}
                  <div>
                    <h3
                      className={`text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight font-sans leading-[1.08] transition-colors duration-300 ${
                        isHovered ? 'text-black' : 'text-white'
                      }`}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Bottom Content: Clean Description & Action Button */}
                  <div className="mt-8 space-y-7">
                    <p
                      className={`text-[14.5px] sm:text-[15.5px] font-sans leading-relaxed transition-colors duration-300 ${
                        isHovered ? 'text-black/85' : 'text-neutral-400'
                      }`}
                    >
                      {card.description}
                    </p>

                    <div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onOpenJoin) onOpenJoin();
                          else if (onOpenContact) onOpenContact();
                        }}
                        className={`inline-flex items-center justify-center px-6 py-3 font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 cursor-pointer shadow-md ${
                          isHovered
                            ? 'bg-black hover:bg-neutral-900 text-white border border-black'
                            : 'bg-[#181920] hover:bg-neutral-800 text-white border border-neutral-700/80'
                        }`}
                      >
                        <span>{getButtonText(index)}</span>
                      </button>
                    </div>
                  </div>

                  {/* Subtle bottom stripe matching the reference design */}
                  <div
                    className={`absolute bottom-0 inset-x-0 h-1.5 transition-colors duration-300 ${
                      isHovered ? 'bg-black' : 'bg-[#e3ef4f]/70'
                    }`}
                  />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
