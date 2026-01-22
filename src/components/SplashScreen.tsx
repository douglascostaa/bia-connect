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
      setTimeout(onComplete, 400);
    }, 1600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-400 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Ambient glow */}
      <div className="orb w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Logo */}
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative animate-glow-pulse rounded-2xl">
          <img
            src={logoImage}
            alt="BIA Logo"
            className="w-20 h-20 rounded-2xl"
          />
        </div>
        
        {/* Loading bar */}
        <div className="w-32 h-0.5 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full animate-[loading_1.5s_ease-in-out]"
            style={{ 
              animation: 'loading 1.5s ease-in-out forwards',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;