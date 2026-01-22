import { ArrowRight, Zap, Clock, MessageSquare, Shield } from "lucide-react";
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
        isChatOpen ? "w-0 md:w-[55%] lg:w-[60%]" : "w-full"
      } ${isChatOpen ? "opacity-0 md:opacity-100" : "opacity-100"}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Ambient orbs */}
      <div className="orb w-[600px] h-[600px] -top-48 -right-48" />
      <div className="orb w-[400px] h-[400px] bottom-0 left-1/4" />

      {/* Content */}
      <div className="relative z-10 flex w-full h-full">
        {/* Left content */}
        <div className={`flex flex-col justify-between py-8 lg:py-12 px-6 lg:px-16 w-full lg:w-1/2 transition-all duration-500 ${isChatOpen ? 'lg:w-full' : ''}`}>
          
          {/* Header */}
          <header className="flex items-center gap-4 animate-fade-up">
            <img 
              src={logoImage} 
              alt="BIA" 
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl" 
            />
            <span className="text-foreground/40">—</span>
            <span className="text-lg font-medium text-foreground/80">flash</span>
          </header>

          {/* Main content */}
          <div className="space-y-8 max-w-xl">
            {/* Badge */}
            <div className="animate-fade-up stagger-1">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary">
                <Zap className="w-4 h-4" />
                IA que transforma negócios
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-6xl font-semibold leading-[1.1] tracking-tight animate-fade-up stagger-2">
              <span className="text-foreground">Atendimento</span>
              <br />
              <span className="text-primary">inteligente</span>
              <br />
              <span className="text-foreground/70">24 horas por dia</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up stagger-3">
              Automatize até 80% do seu atendimento com nossa IA conversacional. 
              Respostas instantâneas, clientes satisfeitos.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 animate-fade-up stagger-4">
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <Clock className="w-4 h-4 text-primary" />
                <span>Sempre online</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span>Respostas em segundos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/60">
                <Shield className="w-4 h-4 text-primary" />
                <span>100% seguro</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-6 animate-fade-up stagger-5">
              <button
                onClick={onOpenChat}
                className="group inline-flex items-center gap-3 px-6 py-4 btn-primary text-white font-medium rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                Testar a BIA
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <div className="hidden sm:flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i} 
                      className="w-8 h-8 rounded-full bg-secondary border-2 border-background"
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  +500 empresas
                </span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="animate-fade-up stagger-5">
            <p className="text-sm text-muted-foreground">
              @bia • Inteligência artificial sob medida
            </p>
          </div>
        </div>

        {/* Right image */}
        <div className={`hidden lg:flex flex-1 items-end justify-center relative transition-all duration-500 ${isChatOpen ? 'lg:hidden' : ''}`}>
          {/* Image container */}
          <div className="relative h-full flex items-end">
            <img
              src={biaHero}
              alt="BIA"
              className="h-[90%] w-auto object-contain object-bottom animate-fade-up"
            />
            
            {/* Status card */}
            <div className="absolute top-24 right-8 glass-card glow-border rounded-2xl px-4 py-3 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-foreground">Online agora</span>
              </div>
            </div>

            {/* Stats card */}
            <div className="absolute bottom-48 left-0 glass-card glow-border rounded-2xl px-5 py-4 animate-float" style={{ animationDelay: '-2s' }}>
              <p className="text-2xl font-bold text-primary">98%</p>
              <p className="text-xs text-muted-foreground">Satisfação</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;