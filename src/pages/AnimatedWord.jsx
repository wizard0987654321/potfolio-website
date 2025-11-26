
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function AnimatedWord({ text }) {
  const headingRef = useRef(null);

  useEffect(() => {
    const letters = headingRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.45,
        ease: "power2.out",
        stagger: 0.05,
      }
    );
  }, []);

  return (
    <h2
  ref={headingRef}
  style={{ fontFamily: "Montserrat, sans-serif" }}
  className="text-white text-5xl font-extrabold tracking-wide"
>
  {text.split("").map((char, i) => (
    <span key={i} className="letter inline-block">
      {char}
    </span>
  ))}
</h2>
  );
}
