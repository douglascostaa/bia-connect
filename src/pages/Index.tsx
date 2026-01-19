import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import HeroSection from "@/components/HeroSection";
import ChatPanel from "@/components/ChatPanel";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!showSplash) {
      setTimeout(() => setIsReady(true), 100);
    }
  }, [showSplash]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      <div
        className={`h-full w-full flex transition-opacity duration-500 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <HeroSection onOpenChat={() => setIsChatOpen(true)} isChatOpen={isChatOpen} />
        <ChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </div>
  );
};

export default Index;
