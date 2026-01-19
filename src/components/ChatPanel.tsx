import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2, Sparkles, Bot } from "lucide-react";
import biaAvatar from "@/assets/bia-avatar.png";

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
      content: "Olá! 👋 Sou a BIA, sua assistente virtual inteligente. Estou aqui para ajudar você a descobrir como posso transformar o atendimento da sua empresa. O que gostaria de saber?",
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
        content: "Que ótima pergunta! A BIA pode automatizar até 80% do atendimento da sua empresa, respondendo instantaneamente 24 horas por dia. Isso significa mais vendas, clientes satisfeitos e sua equipe focada no que realmente importa. Quer saber mais sobre como funciona? 🚀",
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

  const suggestedQuestions = [
    "Como a BIA pode ajudar minha empresa?",
    "Quanto custa implementar?",
    "Em quanto tempo fica pronto?",
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-full md:w-[45%] lg:w-[40%] xl:w-[35%] z-40 animate-slide-in-right">
      <div className="h-full flex flex-col chat-panel-bg overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Header */}
        <div className="relative flex items-center justify-between px-5 md:px-6 py-4 md:py-5 border-b border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/50 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
              <img src={biaAvatar} alt="BIA" className="relative w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-primary/50" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-[hsl(220,20%,8%)] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-base md:text-lg text-white">BIA</h2>
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <p className="text-xs md:text-sm text-white/50">Assistente IA • Online</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 hover:rotate-90"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="relative flex-1 overflow-y-auto px-4 md:px-6 py-4 md:py-6 space-y-4 chat-scrollbar">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-up`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {message.role === "assistant" && (
                <div className="flex-shrink-0 mr-2 md:mr-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                </div>
              )}
              <div
                className={`max-w-[80%] px-4 md:px-5 py-2.5 md:py-3 ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl rounded-br-md shadow-lg shadow-primary/20"
                    : "chat-message-glass text-white rounded-2xl rounded-bl-md"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start animate-fade-up">
              <div className="flex-shrink-0 mr-2 md:mr-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="chat-message-glass px-4 md:px-5 py-2.5 md:py-3 rounded-2xl rounded-bl-md">
                <div className="flex items-center gap-2">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested questions */}
        {messages.length <= 1 && (
          <div className="px-4 md:px-6 py-3 md:py-4 border-t border-white/5">
            <p className="text-xs text-white/40 mb-2 md:mb-3">Perguntas sugeridas:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => setInput(question)}
                  className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 hover:border-primary/50 transition-all duration-200"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="relative px-4 md:px-6 py-4 md:py-5 border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-2 md:gap-3 chat-input-glass rounded-full px-4 md:px-5 py-2.5 md:py-3">
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
              className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary text-white rounded-full transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-white/30 text-center mt-3 md:mt-4">
            Powered by <span className="text-primary font-medium">Flash AI</span> ⚡
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatPanel;
