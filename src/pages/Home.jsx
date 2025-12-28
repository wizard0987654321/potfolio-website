import AnimatedWord from "./AnimatedWord";
import RotatingText from "./RotatingText";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Top Header Section */}
      <div className="mb-8">
        <AnimatedWord text="Home" />
      </div>

      {/* Hero Content */}
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
          Hi, ich bin <span className="font-semibold">Givi</span>! <br />
          Ich baue <RotatingText />
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-white/70 font-light tracking-wide">
          Willkommen auf meiner Portfolio-Seite!
        </p>
      </div>

      {/* Decorative Detail */}
      <div className="mt-12 w-1 h-20 bg-gradient-to-b from-[#31473A] to-transparent rounded-full opacity-50" />
    </main>
  );
}