import { ArrowRight } from "lucide-react";
import logoImage from "@/assets/logo-bia.png";
import biaAvatar from "@/assets/bia-avatar.png";
import { Button } from "@/components/ui/button";

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
      {/* Background elements */}
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      <div className="floating-orb w-[600px] h-[600px] -top-40 -left-40" />
      <div className="floating-orb w-[400px] h-[400px] bottom-0 right-1/4 opacity-10" />

      {/* Geometric decorations */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-3xl rotate-12 hidden lg:block" />
      <div className="absolute bottom-32 right-40 w-20 h-20 border border-primary/10 rounded-2xl -rotate-6 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full h-full px-8 lg:px-16 xl:px-24 py-12">
        {/* Left content */}
        <div className="flex flex-col justify-center gap-8 max-w-xl lg:max-w-lg xl:max-w-xl">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img src={logoImage} alt="BIA" className="w-12 h-12 rounded-xl" />
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-foreground">—</span>
              <span className="text-xl font-medium text-foreground tracking-wide">flash</span>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-primary glow-text">Respostas</span>
              <br />
              <span className="text-foreground">na velocidade</span>
              <br />
              <span className="text-foreground">que o seu cliente</span>
              <br />
              <span className="text-foreground">espera</span>
            </h1>
          </div>

          {/* BIA info */}
          <div className="space-y-1">
            <p className="text-2xl font-bold text-primary">@bia</p>
            <p className="text-muted-foreground">feita para seu negócio</p>
          </div>

          {/* CTA Button */}
          <Button
            onClick={onOpenChat}
            size="lg"
            className="group w-fit px-8 py-6 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-button transition-all duration-300 hover:shadow-glow-lg hover:scale-105"
          >
            Falar com a BIA
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Right content - Avatar */}
        <div className="relative flex-shrink-0 hidden lg:block">
          {/* Glow effect behind avatar */}
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
          
          {/* Avatar image */}
          <div className="relative">
            <img
              src={biaAvatar}
              alt="BIA - Assistente Virtual"
              className="w-80 xl:w-96 h-auto object-contain relative z-10 drop-shadow-2xl"
            />
            
            {/* Decorative ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-primary/5 rounded-full" />
          </div>

          {/* Floating badge */}
          <div className="absolute -right-4 top-1/4 glass rounded-2xl px-4 py-3 animate-float">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-foreground">Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
