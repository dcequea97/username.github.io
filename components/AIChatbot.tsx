import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { UI_LABELS } from '../constants';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const labels = UI_LABELS[language];
  
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize greeting based on current language when opened or mounted, but don't clear history
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'model', text: labels.aiGreeting }]);
    }
  }, [language, labels.aiGreeting]); // eslint-disable-line react-hooks/exhaustive-deps

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await sendMessageToGemini(userMsg, language);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-[#112240] border border-slate-700 w-80 md:w-96 h-96 rounded-xl shadow-2xl flex flex-col mb-4 overflow-hidden animate-fade-in-up">
          <div className="bg-[#1e293b] p-4 border-b border-slate-700 flex justify-between items-center">
            <h3 className="text-emerald-400 font-semibold flex items-center">
              <i className="fa-solid fa-robot mr-2"></i> AI Assistant
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <i className="fa-solid fa-times"></i>
            </button>
          </div>
          
          <div className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-thin">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    msg.role === 'user' 
                    ? 'bg-emerald-500 text-[#0B1120] rounded-br-none' 
                    : 'bg-slate-700 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-slate-700 text-slate-200 p-3 rounded-lg rounded-bl-none flex items-center space-x-2">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 bg-[#0B1120] border-t border-slate-800 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={labels.aiInputPlaceholder}
              className="flex-grow bg-[#1e293b] text-slate-200 text-sm rounded-l px-3 py-2 outline-none focus:ring-1 focus:ring-emerald-500"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-emerald-500 text-[#0B1120] px-4 rounded-r hover:bg-emerald-400 transition-colors disabled:opacity-50"
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-500 hover:bg-emerald-400 text-[#0B1120] w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      >
        <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-message'} text-xl`}></i>
      </button>
    </div>
  );
};

export default AIChatbot;
