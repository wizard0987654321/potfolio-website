import { useRef } from "react";
import gsap from "gsap";

export default function ContactCard({ title, value, link, icon }) {
  const cardRef = useRef(null);
  const iconRef = useRef(null);

  const onMouseEnter = () => {
    // Make the icon pop up and the card background slightly brighten
    gsap.to(cardRef.current, { backgroundColor: "#3a5444", y: -5, duration: 0.3 });
    gsap.to(iconRef.current, { scale: 1.2, rotate: 5, duration: 0.3 });
  };

  const onMouseLeave = () => {
    gsap.to(cardRef.current, { backgroundColor: "#31473A", y: 0, duration: 0.3 });
    gsap.to(iconRef.current, { scale: 1, rotate: 0, duration: 0.3 });
  };

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="contact-card w-full md:w-80 p-8 rounded-2xl bg-[#31473A] text-white flex flex-col items-center text-center transition-all shadow-xl"
    >
      <div ref={iconRef} className="mb-4 p-4 bg-white/10 rounded-full text-white">
        {icon}
      </div>
      
      <h3 className="text-sm uppercase tracking-widest opacity-60 mb-1">{title}</h3>
      <p className="text-lg font-medium break-all">{value}</p>
      
      {/* Decorative arrow that appears on hover could be added here */}
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-xs border border-white/30 px-3 py-1 rounded-full">Besuchen →</span>
      </div>
    </a>
  );
}