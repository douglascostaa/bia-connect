import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2 } from "lucide-react";
import logoImage from "@/assets/logo-bia.png";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatPanel = ({ isOpen, onClose }: ChatPanelProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Olá! Sou a BIA, sua assistente virtual inteligente. Como posso ajudar você hoje? 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 500);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulated response - will be connected to n8n
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Entendi sua mensagem! Em breve estarei conectada ao seu sistema para processar suas solicitações de forma inteligente. Por enquanto, estou aqui para demonstrar como será a experiência de conversa com a BIA. 🚀",
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-full md:w-[45%] lg:w-[40%] xl:w-[35%] z-40 animate-slide-in-right">
      <div className="h-full flex flex-col chat-dark">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src={logoImage} alt="BIA" className="w-12 h-12 rounded-xl" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[hsl(220,20%,8%)]" />
            </div>
            <div>
              <h2 className="font-semibold text-lg text-white">BIA</h2>
              <p className="text-sm text-white/50">Assistente Inteligente</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 chat-scrollbar">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-up`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                className={`max-w-[85%] px-5 py-3 rounded-2xl ${
                  message.role === "user"
                    ? "bg-primary text-white rounded-br-md"
                    : "glass-message text-white rounded-bl-md"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start animate-fade-up">
              <div className="glass-message px-5 py-3 rounded-2xl rounded-bl-md">
                <div className="flex items-center gap-3">
                  <Loader2 className="w-4 h-4 animate-spin text-primary" />
                  <span className="text-sm text-white/70">BIA está digitando...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-6 py-5 border-t border-white/10">
          <div className="flex items-center gap-3 glass-message rounded-full px-5 py-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none text-sm"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="flex items-center justify-center w-10 h-10 bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-white/30 text-center mt-4">
            Powered by <span className="text-primary font-medium">Flash AI</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
