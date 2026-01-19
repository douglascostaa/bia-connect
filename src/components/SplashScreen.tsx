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
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background geometric pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-50" />
      
      {/* Floating orbs */}
      <div className="floating-orb w-96 h-96 -top-20 -left-20 animate-float" />
      <div className="floating-orb w-80 h-80 -bottom-10 -right-10 animate-float" style={{ animationDelay: '-3s' }} />

      {/* Logo container */}
      <div className="relative flex flex-col items-center gap-6">
        <div className="animate-pulse-glow rounded-2xl p-1">
          <img
            src={logoImage}
            alt="BIA Logo"
            className="w-24 h-24 rounded-2xl"
          />
        </div>
        
        {/* Loading indicator */}
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
