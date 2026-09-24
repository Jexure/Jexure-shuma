import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  HelpCircle,
  Lightbulb,
  Check
} from 'lucide-react';
import { SideHustle, ChatMessage } from '../types';
import { askSideHustleAssistant } from '../services/aiAssistant';

interface AIAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  hustle: SideHustle | null;
  initialPrompt?: string;
}

export const AIAssistantDrawer: React.FC<AIAssistantDrawerProps> = ({
  isOpen,
  onClose,
  hustle,
  initialPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize or reset when hustle changes
  useEffect(() => {
    if (hustle) {
      setMessages([
        {
          id: 'welcome',
          sender: 'assistant',
          text: `Hi! I'm your dedicated AI Solopreneur Coach for **${hustle.name}**.\n\nAsk me anything: how to price your packages, draft cold outreach DMs, pick the best free tools, or structure your daily time sprints!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          suggestions: [
            'How should I price my packages?',
            'Draft my first customer cold outreach message',
            'What are the best free tools to use?',
            'How can I balance this with a full-time job?'
          ]
        }
      ]);
    }
  }, [hustle?.id]);

  // Handle initial prompt injection (e.g. from Tracker "Ask about Day X")
  useEffect(() => {
    if (initialPrompt && hustle && isOpen) {
      handleSend(initialPrompt);
    }
  }, [initialPrompt]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  if (!isOpen || !hustle) return null;

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || inputValue;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        text: m.text,
      }));

      const reply = await askSideHustleAssistant(hustle, textToSend, history);

      const aiMsg: ChatMessage = {
        id: String(Date.now() + 1),
        sender: 'assistant',
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      <div className="relative flex h-full w-full max-w-md flex-col border-l border-slate-800 bg-[#0B0F19] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/60 p-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-white">AI Coach</span>
                <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <p className="text-xs text-indigo-300 font-medium truncate max-w-[200px]">
                {hustle.name}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className="flex items-center gap-1.5 mb-1 px-1">
                {msg.sender === 'assistant' ? (
                  <span className="text-[10px] font-semibold text-indigo-400">AI Mentor</span>
                ) : (
                  <span className="text-[10px] font-semibold text-slate-400">You</span>
                )}
                <span className="text-[10px] text-slate-500">{msg.timestamp}</span>
              </div>

              <div
                className={`max-w-[90%] rounded-2xl p-3.5 leading-relaxed whitespace-pre-wrap ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-tr-none shadow-md'
                    : 'border border-slate-800 bg-slate-900/90 text-slate-200 rounded-tl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>

              {/* Suggestion Chips */}
              {msg.suggestions && msg.suggestions.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {msg.suggestions.map((sugg, sidx) => (
                    <button
                      key={sidx}
                      onClick={() => handleSend(sugg)}
                      className="rounded-lg border border-slate-800 bg-slate-900/80 px-2.5 py-1 text-[11px] text-indigo-300 hover:border-indigo-500/40 hover:bg-slate-800 transition-colors text-left"
                    >
                      {sugg}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/40 p-3 rounded-xl border border-slate-800 max-w-[200px]">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400 animate-spin" />
              <span>Drafting strategy...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="border-t border-slate-800/80 bg-slate-950/80 p-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about launching this hustle..."
              className="flex-1 rounded-xl border border-slate-800 bg-slate-900/90 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white disabled:opacity-40 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-500/20"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
