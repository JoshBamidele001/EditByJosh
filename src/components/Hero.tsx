import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic zoom background */}
      <div className="absolute inset-0 bg-[url('https://i.ibb.co/kVDKZqST/bg.jpg')] bg-cover bg-center opacity-20 animate-zoom-slow" />

      {/* Dark radial overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-black via-black/80 to-red-950/10" />

      {/* Floating red ember particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className={`particle particle-delay-${i}`}
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-cinematic">
        <h1 className="text-4xl md:text-8xl lg:text-9xl tracking-widest glitch-title mb-6">
          EditByJosh
        </h1>

        <div className="h-1 w-40 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mb-8 opacity-0 animate-line-expand"></div>

        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 font-light tracking-wide opacity-0 animate-slow-fade">
          Crafting Stories That Captivate, Inspire, and Move.
        </p>

        <p className="text-sm md:text-2xl lg:text-xl text-gray-300 mb-12 font-light tracking-wide opacity-0 animate-slow-fade delay-300">
          From cinematic documentaries and movie trailers to weddings and marketing videos, I turn footage into unforgettable experiences.

        </p>

        <p className="text-sm md:text-base text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 animate-slow-fade delay-500">
          Film Editing • Wedding Films • Compelling Documentaries • Marketing & Ad Videos • Movie Trailers
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-rise-delay">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="px-8 py-4 bg-transparent border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-black transition-all duration-300 uppercase tracking-wider text-sm font-semibold glow-button"
          >
            View Portfolio
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-red-500 text-black rounded-full hover:bg-red-600 transition-all duration-300 uppercase tracking-wider text-sm font-semibold shadow-lg shadow-red-500/40"
          >
            Hire Me
          </button>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-red-500 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
