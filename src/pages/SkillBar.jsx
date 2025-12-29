import { useEffect, useRef } from "react";
import gsap from "gsap";

const levelToPercent = {
  "very good": "100%",
  "good": "80%",
  "medium": "60%",
  "basic": "40%",
  "little": "20%",
};

export default function SkillBar({ name, level, icon }) {
  const barRef = useRef(null);
  const containerRef = useRef(null);
  const percentage = levelToPercent[level] || "0%";

  useEffect(() => {
    // Bar fill animation
    gsap.to(barRef.current, {
      width: percentage,
      duration: 1.8,
      ease: "power4.out",
      delay: 0.3,
    });
  }, [percentage]);

  return (
    <div 
      ref={containerRef}
      className="group w-full max-w-md bg-white/5 border border-[#31473A]/10 p-5 rounded-2xl 
                 hover:bg-white/10 hover:border-[#31473A]/30 transition-all duration-500 font-montserrat"
                 style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="flex items-center gap-4 mb-4">
        {/* Icon Container */}
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#31473A]/10 
                      group-hover:bg-[#31473A] group-hover:scale-110 transition-all duration-500">
          <img 
            src={icon} 
            alt={name} 
            className="w-6 h-6 invert group-hover:invert-0 transition-all duration-500" 
          />
        </div>

        {/* Name and Level */}
        <div className="flex-1">
          <div className="flex justify-between items-baseline">
            <h3 className="text-[#31473A] font-bold text-base uppercase tracking-widest">
              {name}
            </h3>
            <span className="text-[#31473A]/50 text-[10px] font-bold uppercase tracking-tighter italic">
              {level}
            </span>
          </div>
        </div>
      </div>

      {/* The Bar Container */}
      <div className="relative">
        <div className="h-[4px] w-full bg-[#31473A]/10 rounded-full overflow-hidden">
          {/* The Animated Progress Line */}
          <div
            ref={barRef}
            className="h-full bg-[#31473A] rounded-full relative"
            style={{ width: "0%" }}
          >
            {/* Subtle light effect on the bar tip */}
            <div className="absolute right-0 top-0 h-full w-4 bg-white/20 blur-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}