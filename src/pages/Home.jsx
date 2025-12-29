import AnimatedWord from "./AnimatedWord";
import RotatingText from "./RotatingText";
import GithubIcon from "../assets/githubIcon.svg";
import GitlabIcon from "../assets/gitlabIcon.svg";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start px-4">
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
          Willkommen auf meiner Portfolio-Webseite!
        </p>
      </div>

      {/* Social Links */}
      <div className="mt-10 flex justify-center space-x-6">
        <a
          href="https://github.com/wizard0987654321"
          target="_blank"
          rel="https://github.com/"
          className="inline-block w-1/12 hover:opacity-80 transition"
        >
          <img src={GithubIcon} alt="GitHub" />
        </a>
        <a
          href="https://git.thm.de/gsbs28"
          target="_blank"
          rel="https://git.thm.de/"
          className="inline-block w-1/12 hover:opacity-80 transition"
        >
          <img src={GitlabIcon} alt="GitLab" />
        </a>
      </div>
    </main>
  );
}