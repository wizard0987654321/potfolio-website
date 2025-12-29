import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedWord from "./AnimatedWord";

export default function About() {
  const aboutData = [
    "Entwickler",
    "Kreativ",
    "Problemlöser",
    "Technik-Fan",
    "Teamplayer",
    "Visionär"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSteps = aboutData.length;
  const barRef = useRef(null);
  const milestoneRefs = useRef([]);

  const progress = (currentIndex / totalSteps) * 100;

  useEffect(() => {
    gsap.to(barRef.current, {
      width: `${progress}%`,
      duration: 0.6,
      ease: "power2.out",
    });

    if (currentIndex > 0) {
      gsap.fromTo(
        milestoneRefs.current[currentIndex - 1],
        { scale: 0, opacity: 0, y: 10 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
      );
    }
  }, [currentIndex, progress]);

  return (
    <main 
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      className="min-h-screen w-full flex flex-col items-center justify-center text-[#31473A] overflow-hidden px-4"
    >
      <div className="mb-10 md:mb-20">
        <AnimatedWord text="About Me" />
      </div>

      {/* CONTAINER: 
          - On mobile (375px+), we use px-12 to give labels room at the edges.
          - max-w-full on mobile, max-w-4xl on desktop.
      */}
      <div className="w-full max-w-4xl relative px-10 md:px-16">
        
        {/* LABELS AREA */}
        <div className="relative w-full h-28 md:h-24 mb-4">
          {aboutData.map((item, i) => (
            <div
              key={i}
              ref={(el) => (milestoneRefs.current[i] = el)}
              className="absolute opacity-0"
              style={{
                left: `${((i + 1) / totalSteps) * 100}%`,
                transform: "translateX(-50%)",
                // STAGGER HEIGHT ON MOBILE: 
                // Evens are higher than odds to prevent horizontal overlapping
                bottom: window.innerWidth < 768 ? (i % 2 === 0 ? "0px" : "40px") : "0px"
              }}
            >
              <div className="bg-[#31473A] text-white px-2 md:px-4 py-1.5 md:py-2 rounded-full text-[8px] md:text-xs font-black shadow-lg shadow-[#31473A]/20 whitespace-nowrap uppercase tracking-tighter border border-white/20">
                {item}
              </div>
              {/* Responsive Connector Line */}
              <div className={`w-[1px] bg-[#31473A]/30 mx-auto ${i % 2 !== 0 && window.innerWidth < 768 ? 'h-10' : 'h-4'}`} />
            </div>
          ))}
        </div>

        {/* PROGRESS BAR */}
        <div className="relative w-full h-2.5 bg-[#31473A]/10 rounded-full border border-[#31473A]/10">
          <div
            ref={barRef}
            className="h-full bg-[#31473A] rounded-full shadow-[0_0_15px_rgba(49,71,58,0.3)]"
            style={{ width: "0%" }}
          />
          
          {/* Subtle Step Markers */}
          <div className="absolute inset-0 flex justify-between pointer-events-none">
            {[...Array(totalSteps + 1)].map((_, i) => (
              <div key={i} className="w-[1px] h-full bg-[#31473A]/20" />
            ))}
          </div>
        </div>
      </div>

      {/* BUTTON AREA */}
      <div className="mt-16 h-12 flex items-center justify-center">
        {currentIndex < totalSteps ? (
          <button
            onClick={() => setCurrentIndex(currentIndex + 1)}
            className="px-8 md:px-12 py-3 border-2 border-[#31473A] text-[#31473A] font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-[#31473A] hover:text-white transition-all duration-300 active:scale-95"
          >
            Weiter
          </button>
        ) : (
          <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 animate-pulse">
            Journey End
          </p>
        )}
      </div>
    </main>
  );
}