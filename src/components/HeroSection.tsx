import { ArrowRight, Sparkles, Zap, MessageCircle } from "lucide-react";
import logoImage from "@/assets/logo-bia.png";
import biaHero from "@/assets/bia-hero.png";

interface HeroSectionProps {
  onOpenChat: () => void;
  isChatOpen: boolean;
}

const HeroSection = ({ onOpenChat, isChatOpen }: HeroSectionProps) => {
  return (
    <div
      className={`relative h-full flex transition-all duration-700 ease-out ${
        isChatOpen ? "w-0 md:w-[55%] lg:w-[60%]" : "w-full"
      } ${isChatOpen ? "opacity-0 md:opacity-100" : "opacity-100"}`}
    >
      {/* Main gradient background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particle particle-1" />
        <div className="particle particle-2" />
        <div className="particle particle-3" />
        <div className="particle particle-4" />
        <div className="particle particle-5" />
      </div>

      {/* Right accent stripe */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 hero-stripe hidden lg:block" />
      
      {/* Geometric decorations */}
      <div className="floating-shape w-48 h-48 top-16 right-[15%] rotate-12 hidden xl:block animate-float" style={{ animationDelay: '-1s' }} />
      <div className="floating-shape w-32 h-32 bottom-24 right-[25%] -rotate-6 hidden xl:block animate-float" style={{ animationDelay: '-3s' }} />
      <div className="floating-shape w-24 h-24 top-1/3 right-[10%] rotate-45 hidden xl:block animate-float" style={{ animationDelay: '-5s' }} />

      {/* Large logo decoration in background */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center">
        <div className="relative animate-pulse-slow">
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
        <div className={`flex flex-col justify-between py-8 md:py-10 px-6 md:px-8 lg:px-12 xl:px-16 w-full lg:w-1/2 xl:w-[45%] transition-all duration-500 ${isChatOpen ? 'lg:w-full xl:w-full' : ''}`}>
          {/* Header with logo */}
          <div className="flex items-center gap-4 animate-fade-up">
            <img src={logoImage} alt="BIA" className="w-12 h-12 md:w-14 md:h-14 rounded-xl shadow-lg hover:scale-110 transition-transform duration-300" />
            <div className="flex items-center gap-3">
              <span className="text-xl md:text-2xl text-hero-dark font-light">—</span>
              <span className="text-xl md:text-2xl font-semibold text-hero-dark tracking-wide">flash</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="space-y-6 md:space-y-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {/* Commercial badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 animate-shimmer">
              <Sparkles className="w-4 h-4 text-hero-dark" />
              <span className="text-sm font-medium text-hero-dark">Tecnologia que transforma negócios</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-hero-dark">
              <span className="italic inline-block animate-text-reveal" style={{ animationDelay: '0.2s' }}>Atendimento com IA</span>
              <br />
              <span className="italic inline-block animate-text-reveal" style={{ animationDelay: '0.4s' }}>na velocidade que</span>
              <br />
              <span className="italic inline-block animate-text-reveal" style={{ animationDelay: '0.6s' }}>seu cliente</span>
              <br />
              <span className="inline-flex items-center gap-3 animate-text-reveal" style={{ animationDelay: '0.8s' }}>
                <span className="italic">merece</span>
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-hero-dark animate-pulse" />
              </span>
            </h1>

            {/* Value propositions */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs md:text-sm font-medium text-hero-dark">24/7 Disponível</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm">
                <span className="text-xs md:text-sm font-medium text-hero-dark">⚡ Respostas em segundos</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm">
                <span className="text-xs md:text-sm font-medium text-hero-dark">🎯 100% Personalizada</span>
              </div>
            </div>

            {/* BIA tagline */}
            <div className="space-y-1">
              <p className="text-xl md:text-2xl font-bold text-hero-dark">@bia</p>
              <p className="text-base md:text-lg text-hero-medium">Inteligência artificial feita sob medida para seu negócio</p>
            </div>

            {/* CTA Button */}
            <button
              onClick={onOpenChat}
              className="group inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white/95 hover:bg-white text-hero-dark font-semibold text-base md:text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] cta-glow"
            >
              <MessageCircle className="w-5 h-5" />
              Testar a BIA agora
              <span className="flex items-center justify-center w-8 h-8 bg-primary rounded-full transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>

            {/* Social proof */}
            <p className="text-sm text-hero-medium flex items-center gap-2">
              <span className="flex -space-x-2">
                <span className="w-6 h-6 rounded-full bg-white/40 border-2 border-white/60" />
                <span className="w-6 h-6 rounded-full bg-white/40 border-2 border-white/60" />
                <span className="w-6 h-6 rounded-full bg-white/40 border-2 border-white/60" />
              </span>
              +500 empresas já transformaram seu atendimento
            </p>
          </div>

          {/* Bottom spacer */}
          <div />
        </div>

        {/* Right image area */}
        <div className={`hidden lg:flex flex-1 items-end justify-center relative transition-all duration-500 ${isChatOpen ? 'lg:hidden' : ''}`}>
          <img
            src={biaHero}
            alt="BIA - Assistente Virtual Inteligente"
            className="h-[85%] w-auto object-contain object-bottom relative z-10 drop-shadow-2xl animate-fade-up hover:scale-[1.02] transition-transform duration-500"
            style={{ animationDelay: '0.2s' }}
          />
          
          {/* Online status badge */}
          <div 
            className="absolute top-20 right-8 xl:right-16 glass-yellow rounded-2xl px-5 py-3 shadow-lg animate-float z-20"
            style={{ animationDelay: '-2s' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-hero-dark">Online agora</span>
            </div>
          </div>

          {/* Stats badge */}
          <div 
            className="absolute top-40 left-4 xl:left-8 glass-yellow rounded-2xl px-5 py-3 shadow-lg animate-float z-20"
            style={{ animationDelay: '-4s' }}
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-hero-dark">98%</p>
              <p className="text-xs text-hero-medium">Satisfação</p>
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
