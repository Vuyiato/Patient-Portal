import React, { useState, useRef, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase-config";
import { IconUser, IconRobot } from "../components/Icons";

interface FAQ {
  question: string;
  answer: string;
  keywords: string[];
}

interface Message {
  sender: "user" | "bot";
  text: string;
}

const fallbackMessage =
  "I'm sorry, I can only answer frequently asked questions. For anything else, please kindly refer to our staff or your doctor.";

const ChatbotPage: React.FC = () => {
  const [faqSuggestions, setFaqSuggestions] = useState<FAQ[]>([]);
  // Fetch top FAQs for suggestions
  useEffect(() => {
    // Recursively fetch all FAQ docs from nested structure
    const fetchAllFAQs = async () => {
      try {
        const categoriesSnap = await getDocs(
          collection(db, "chatbot_knowledge/categories/list")
        );
        let allFAQs: FAQ[] = [];
        for (const catDoc of categoriesSnap.docs) {
          const questionsSnap = await getDocs(
            collection(
              db,
              `chatbot_knowledge/categories/list/${catDoc.id}/questions`
            )
          );
          for (const qDoc of questionsSnap.docs) {
            const data = qDoc.data();
            // Use 'name' or 'question' as the question field
            allFAQs.push({
              question: data.question || data.name || "",
              answer: data.answer || "",
              keywords: data.keywords || [],
            });
          }
        }
        setFaqSuggestions(allFAQs.slice(0, 6)); // Show top 6 for suggestions
        // Store all for answer matching
        setAllFAQs(allFAQs);
      } catch (err) {
        setFaqSuggestions([]);
      }
    };
    fetchAllFAQs();
  }, []);

  // Store all FAQs for answer matching
  const [allFAQs, setAllFAQs] = useState<FAQ[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I'm your virtual assistant. Ask me any question about the clinic, appointments, billing, or services!",
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [botThinking, setBotThinking] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to bottom on new message
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  // Auto-focus input after sending
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages]);

  const sendMessage = async (e?: React.FormEvent, overrideInput?: string) => {
    if (e) e.preventDefault();
    const text = overrideInput !== undefined ? overrideInput : input;
    if (!text.trim()) return;
    const userMessage = { sender: "user" as const, text };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput("");
    setBotThinking(true);
    setLoading(true);
    setTimeout(() => {
      // Try to match by question text (case-insensitive)
      const match =
        allFAQs.find(
          (faq) =>
            faq.question &&
            faq.question.trim().toLowerCase() === text.trim().toLowerCase()
        ) ||
        // Fallback: match by keywords
        allFAQs.find((faq) => {
          const words = text.toLowerCase().split(" ");
          return (
            faq.keywords &&
            faq.keywords.some((k) => words.includes(k.toLowerCase()))
          );
        });
      if (match) {
        setMessages((msgs) => [
          ...msgs,
          { sender: "bot", text: match.answer || fallbackMessage },
        ]);
      } else {
        setMessages((msgs) => [
          ...msgs,
          { sender: "bot", text: fallbackMessage },
        ]);
      }
      setBotThinking(false);
      setLoading(false);
    }, 900 + Math.random() * 800);
  };

  // Keyboard shortcut: Enter to send, Shift+Enter for newline
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="relative w-full h-screen min-h-screen flex flex-col bg-gradient-to-br from-brand-light/80 to-brand-yellow/30 rounded-none shadow-none border-0">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-[28rem] h-[28rem] opacity-30 animate-float-slow"
          viewBox="0 0 400 400"
        >
          <circle cx="200" cy="200" r="180" fill="#14b8a6" fillOpacity="0.10" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-[22rem] h-[22rem] opacity-20 animate-float-slower"
          viewBox="0 0 300 300"
        >
          <rect
            x="0"
            y="0"
            width="300"
            height="300"
            rx="80"
            fill="#f4e48e"
            fillOpacity="0.10"
          />
        </svg>
      </div>
      <h2 className="text-4xl font-extrabold mb-6 text-brand-dark tracking-tight drop-shadow-lg flex items-center gap-3 justify-center">
        <span className="animate-wave inline-block text-5xl">🤖</span> Clinic
        Chatbot
      </h2>
      <div className="flex-1 overflow-y-auto glassmorphic border border-brand-teal/20 p-10 mb-6 shadow-2xl backdrop-blur-2xl relative transition-all duration-700 min-h-[500px] h-full max-h-none">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-2xl text-brand-dark/60 font-semibold animate-fade-in">
            <span>
              Welcome! Ask me anything about the clinic, appointments, or
              billing.
            </span>
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex mb-4 items-end ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <span className="mr-2 animate-bounce-bot">
                <IconRobot className="w-8 h-8 text-brand-teal drop-shadow-glow" />
              </span>
            )}
            <div
              className={`relative px-6 py-4 rounded-2xl max-w-[80%] text-lg font-medium shadow-lg transition-all duration-700
                  ${
                    msg.sender === "user"
                      ? "bg-brand-teal text-white rounded-br-none animate-slide-in-right"
                      : "bg-white/90 text-brand-dark border border-brand-teal/10 rounded-bl-none animate-slide-in-left"
                  }
                `}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span
                style={{
                  whiteSpace: "pre-line",
                  wordBreak: "break-word",
                  display: "block",
                  lineHeight: "1.7",
                }}
                className="whitespace-pre-line break-words"
              >
                {msg.text}
              </span>
              {msg.sender === "bot" && (
                <span className="absolute -bottom-2 left-4 w-3 h-3 bg-brand-teal rounded-full opacity-30 animate-pulse-bubble" />
              )}
            </div>
            {msg.sender === "user" && (
              <span className="ml-2">
                <IconUser className="w-8 h-8 text-brand-dark" />
              </span>
            )}
          </div>
        ))}
        {botThinking && (
          <div className="flex items-end mb-4 animate-fade-in">
            <span className="mr-2 animate-bounce-bot">
              <IconRobot className="w-8 h-8 text-brand-teal drop-shadow-glow animate-pulse" />
            </span>
            <div className="px-5 py-3 rounded-2xl bg-white/80 text-brand-dark border border-brand-teal/10 max-w-[70%] text-base font-medium shadow-md flex items-center gap-2">
              <span className="flex gap-1">
                <span className="w-2 h-2 bg-brand-teal rounded-full animate-typing-bounce" />
                <span className="w-2 h-2 bg-brand-teal rounded-full animate-typing-bounce delay-150" />
                <span className="w-2 h-2 bg-brand-teal rounded-full animate-typing-bounce delay-300" />
              </span>
              <span className="ml-2 text-sm font-light">Typing...</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      {/* FAQ Suggestions */}
      {faqSuggestions.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-6 animate-fade-in-up justify-center">
          {faqSuggestions.map((faq, idx) => (
            <button
              key={faq.question}
              type="button"
              className="faq-chip px-5 py-3 rounded-full bg-gradient-to-r from-brand-teal/90 to-brand-yellow/80 text-brand-dark font-semibold shadow-lg hover:scale-110 hover:from-brand-yellow/90 hover:to-brand-teal/80 focus:ring-4 focus:ring-brand-teal/40 focus:outline-none active:scale-95 transition-all duration-300 border-2 border-brand-teal/20 animate-float"
              style={{ animationDelay: `${idx * 120}ms` }}
              onClick={() => sendMessage(undefined, faq.question)}
              disabled={loading}
              tabIndex={0}
            >
              {faq.question}
            </button>
          ))}
        </div>
      )}
      <form
        onSubmit={sendMessage}
        className="flex gap-4 relative z-10 justify-center w-full sticky bottom-0 bg-gradient-to-t from-white/80 to-transparent p-6 backdrop-blur-xl border-t border-brand-teal/10"
        style={{ boxShadow: "0 -8px 32px 0 rgba(31, 38, 135, 0.08)" }}
      >
        <input
          ref={inputRef}
          className="flex-1 border border-brand-teal/40 bg-white/90 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-brand-teal/30 text-xl shadow-lg transition-all duration-500 max-w-2xl"
          type="text"
          placeholder="Type your question... (Enter to send, Shift+Enter for new line)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
          disabled={loading}
          autoFocus
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-brand-teal to-brand-yellow text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-xl hover:from-brand-yellow hover:to-brand-teal transition-all duration-500 active:scale-95 focus:outline-none focus:ring-4 focus:ring-brand-teal relative overflow-hidden"
          disabled={loading || !input.trim()}
        >
          <span className="relative z-10">Send</span>
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all rounded-2xl" />
        </button>
      </form>
      {/* Animations CSS */}
      <style>{`
        .glassmorphic {
          background: rgba(255,255,255,0.8);
          box-shadow: 0 12px 48px 0 rgba(31, 38, 135, 0.14);
          backdrop-filter: blur(18px);
          border-radius: 32px;
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 12px #14b8a6cc);
        }
        .animate-float-slow {
          animation: float-slow 14s ease-in-out infinite alternate;
        }
        .animate-float-slower {
          animation: float-slower 20s ease-in-out infinite alternate;
        }
        .animate-float {
          animation: float 5s ease-in-out infinite alternate;
        }
        @keyframes float-slow {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-40px) scale(1.06); }
        }
        @keyframes float-slower {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(40px) scale(1.05); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-20px); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.9s cubic-bezier(.4,2,.6,1) both;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(60px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .faq-chip {
          cursor: pointer;
          will-change: transform, box-shadow;
        }
        .animate-wave {
          animation: wave 2.2s infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
        @keyframes wave {
          0%, 60%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
        }
        .animate-bounce-bot {
          animation: bounce-bot 1.2s infinite alternate;
        }
        @keyframes bounce-bot {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.7s cubic-bezier(.4,2,.6,1) both;
        }
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(80px) scale(0.95); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.7s cubic-bezier(.4,2,.6,1) both;
        }
        @keyframes slide-in-left {
          0% { opacity: 0; transform: translateX(-80px) scale(0.95); }
          100% { opacity: 1; transform: translateX(0) scale(1); }
        }
        .animate-pulse-bubble {
          animation: pulse-bubble 1.2s infinite alternate;
        }
        @keyframes pulse-bubble {
          0% { opacity: 0.2; transform: scale(1); }
          100% { opacity: 0.5; transform: scale(1.3); }
        }
        .animate-fade-in {
          animation: fade-in 0.7s ease-in;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-typing-bounce {
          animation: typing-bounce 1s infinite;
        }
        @keyframes typing-bounce {
          0%, 80%, 100% { transform: scale(1); opacity: 0.5; }
          40% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ChatbotPage;
