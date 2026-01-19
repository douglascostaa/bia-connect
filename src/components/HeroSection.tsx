import { ArrowRight } from "lucide-react";
import logoImage from "@/assets/logo-bia.png";
import biaHero from "@/assets/bia-hero.png";

interface HeroSectionProps {
  onOpenChat: () => void;
  isChatOpen: boolean;
}

const HeroSection = ({ onOpenChat, isChatOpen }: HeroSectionProps) => {
  return (
    <div
      className={`relative h-full flex transition-all duration-500 ease-out ${
        isChatOpen ? "w-[55%]" : "w-full"
      }`}
    >
      {/* Main gradient background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Right accent stripe */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hero-stripe hidden lg:block" />
      
      {/* Geometric decorations */}
      <div className="floating-shape w-48 h-48 top-16 right-[15%] rotate-12 hidden xl:block" />
      <div className="floating-shape w-32 h-32 bottom-24 right-[25%] -rotate-6 hidden xl:block" />
      <div className="floating-shape w-24 h-24 top-1/3 right-[10%] rotate-45 hidden xl:block" />

      {/* Large logo decoration in background */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center">
        <div className="relative">
          <div className="w-72 h-72 logo-decoration" />
          <div className="absolute inset-4 logo-decoration" />
          <div className="absolute inset-8 logo-decoration" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-8xl font-bold opacity-10 text-hero-dark">b!</span>
          </div>
        </div>
      </div>

      {/* Content layout */}
      <div className="relative z-10 flex w-full h-full">
        {/* Left content area */}
        <div className="flex flex-col justify-between py-10 px-8 lg:px-12 xl:px-16 w-full lg:w-1/2 xl:w-[45%]">
          {/* Header with logo */}
          <div className="flex items-center gap-4 animate-fade-up">
            <img src={logoImage} alt="BIA" className="w-14 h-14 rounded-xl shadow-lg" />
            <div className="flex items-center gap-3">
              <span className="text-2xl text-hero-dark font-light">—</span>
              <span className="text-2xl font-semibold text-hero-dark tracking-wide">flash</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-hero-dark">
              <span className="italic">Respostas na</span>
              <br />
              <span className="italic">velocidade que o</span>
              <br />
              <span className="italic">seu cliente</span>
              <br />
              <span className="italic">espera</span>
            </h1>

            {/* BIA tagline */}
            <div className="space-y-1">
              <p className="text-2xl font-bold text-hero-dark">@bia</p>
              <p className="text-lg text-hero-medium">feita para seu negócio</p>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenChat}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white/95 hover:bg-white text-hero-dark font-semibold text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              Falar com a BIA
              <span className="flex items-center justify-center w-8 h-8 bg-primary rounded-full transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>
          </div>

          {/* Bottom spacer */}
          <div />
        </div>

        {/* Right image area */}
        <div className="hidden lg:flex flex-1 items-end justify-center relative">
          <img
            src={biaHero}
            alt="BIA - Assistente Virtual Inteligente"
            className="h-[90%] w-auto object-contain object-bottom relative z-10 drop-shadow-2xl animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          />
          
          {/* Online status badge */}
          <div 
            className="absolute top-24 right-8 xl:right-16 glass-yellow rounded-2xl px-5 py-3 shadow-lg animate-float z-20"
            style={{ animationDelay: '-2s' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-hero-dark">Online agora</span>
            </div>
          </div>

          {/* AI indicator badge */}
          <div 
            className="absolute bottom-32 right-4 xl:right-12 glass-yellow rounded-2xl px-5 py-3 shadow-lg animate-float z-20"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <div>
                <p className="text-sm font-semibold text-hero-dark">IA Conversacional</p>
                <p className="text-xs text-hero-medium">Respostas instantâneas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
