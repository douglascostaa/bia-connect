import { useEffect, useState } from "react";
import logoImage from "@/assets/logo-bia.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 500);
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center hero-gradient transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape w-64 h-64 -top-16 -left-16 opacity-10" />
        <div className="floating-shape w-48 h-48 bottom-20 -right-12 opacity-10" />
        <div className="floating-shape w-32 h-32 top-1/4 right-1/4 opacity-10" />
      </div>

      {/* Logo container */}
      <div className="relative flex flex-col items-center gap-8">
        <div className="animate-pulse-glow">
          <img
            src={logoImage}
            alt="BIA Logo"
            className="w-28 h-28 rounded-2xl shadow-2xl"
          />
        </div>
        
        {/* Brand text */}
        <div className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <span className="text-3xl font-light text-hero-dark">—</span>
          <span className="text-3xl font-semibold text-hero-dark tracking-wide">flash</span>
        </div>
        
        {/* Loading indicator */}
        <div className="flex gap-2 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-hero-dark/30 animate-pulse"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
