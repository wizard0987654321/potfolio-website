import AnimatedWord from "./AnimatedWord";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start space-y-10">
      <AnimatedWord text="Home" />

      <p className="text-white">
        Hi, Ich bin Givi, ein Entwickler mit Fokus auf moderne Web und Mobile
        Technologien. Willkommen auf meiner Portfolio-Seite!
      </p>
    </main>
  );
}