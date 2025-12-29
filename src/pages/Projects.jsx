import { useEffect, useRef } from "react";
import gsap from "gsap";
import AnimatedWord from "./AnimatedWord";

// 1. Dynamic Project Data
const myProjects = [
  {
    id: 1,
    title: "Eco-Tracker App",
    description: "Eine mobile Anwendung zur Verfolgung des CO2-Fußabdrucks.",
    tech: ["Kotlin", "Firebase"],
    github: "https://github.com/givi/eco-tracker",
    live: null, // Not web-based
  },
  {
    id: 2,
    title: "Premium E-Commerce",
    description: "Ein minimalistischer Shop mit GSAP Animationen.",
    tech: ["React", "Tailwind", "GSAP"],
    github: "https://github.com/givi/shop",
    live: "https://givi-shop.demo",
  },
  {
    id: 3,
    title: "Retro Space Game",
    description: "Ein 2D Shooter Spiel entwickelt mit JavaScript Canvas.",
    tech: ["JavaScript", "HTML5"],
    github: "https://github.com/givi/space-game",
    live: "https://givi-games.demo",
  }
];

export default function Projects() {
  const mainRef = useRef(null);

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // fromTo ensures the animation starts at 0 and DEFINITELY ends at 1
      gsap.fromTo(".project-card", 
        { 
          opacity: 0, 
          y: 40 
        }, 
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.2, 
          duration: 0.8, 
          ease: "power3.out" 
        }
      );
    }, mainRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={mainRef}
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      className="min-h-screen flex flex-col items-center justify-start pt-20 px-6"
    >
      <AnimatedWord text="Projects" />

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-16">
        {myProjects.map((project) => (
          <div
            key={project.id}
            className="project-card group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl flex flex-col justify-between border border-transparent hover:border-[#31473A]/10"          >
            <div>
              <div className="flex gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-[#31473A]/10 text-[#31473A] rounded-md font-bold">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-extrabold text-[#31473A] mb-3">{project.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">{project.description}</p>
            </div>

            <div className="flex flex-col gap-3">
              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-[#31473A] text-[#31473A] font-bold hover:bg-[#31473A] hover:text-white transition-colors duration-300"
              >
                GitHub Repo
              </a>

              {/* Live Demo Logic */}
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#31473A] text-white font-bold hover:bg-[#26382e] transition-colors shadow-lg shadow-[#31473A]/20"
                >
                  Live Demo
                </a>
              ) : (
                <span className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gray-100 text-gray-400 font-bold cursor-not-allowed italic">
                  Live Demo not available
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-20 text-[#31473A]/30 text-xs tracking-[0.2em] uppercase mb-10">
        © 2025 Givi — Portfolio
      </p>
    </main>
  );
}