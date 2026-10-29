import { useState, useRef, useEffect } from 'react';
import { Send, Bot, CheckCheck, RefreshCw, MessageSquare } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
  options?: string[];
}

export function WhatsAppBotSimulator({ darkMode }: { darkMode: boolean }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Assalam-o-Alaikum! Welcome to Aaim Studio automated business assistant. How can I help you today?',
      time: 'Just now',
      options: ['View Design Packages', 'Salon / Clinic Booking Flow', 'Restaurant Order Flow', 'Talk to Maryam (Designer)']
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = '';
      let botOptions: string[] | undefined;

      const lower = text.toLowerCase();
      if (lower.includes('package') || lower.includes('price') || lower.includes('cost')) {
        botResponse = '🎨 Here is our standard service summary:\n• Social Media Creatives: starting at standard friendly rates\n• YouTube High-CTR Thumbnail: Same-day delivery (12h)\n• Luxury Wedding Cards Suite (Foil print + Video invitation)\n• Full Brand Identity & Mockups\n\nWould you like a direct quote for your business?';
        botOptions = ['Get Custom Quote', 'View Portfolio Samples', 'Talk to Maryam on WhatsApp'];
      } else if (lower.includes('salon') || lower.includes('clinic') || lower.includes('booking')) {
        botResponse = '💄 Salon Automation Demo:\n"Hello! We have appointments open today for:\n1. HydraFacial & Glow Care\n2. Hair Styling & Rebonding\n3. Bridal Makeup Trial\n\nPlease select your preferred slot or reply with your date!"';
        botOptions = ['Book 3:00 PM Slot', 'Check Service Prices', 'Get this bot for my Salon'];
      } else if (lower.includes('restaurant') || lower.includes('food') || lower.includes('menu')) {
        botResponse = '🍔 Restaurant Order Bot Demo:\n"Special Tonight: Family Platter (Mutton Karahi + Chicken Biryani + 4 Naan + Drinks) for Rs 1,999 with Free Home Delivery!\nReply 1 to Order Now, or Reply 2 to see the full menu PDF."';
        botOptions = ['Send Full Menu PDF', 'Order Family Platter', 'Build this for my Restaurant'];
      } else if (lower.includes('urgent') || lower.includes('same-day')) {
        botResponse = '⚡ Urgent Same-Day Design Service:\nYes! Maryam takes priority rush orders with 8 to 12 hours delivery for YouTube thumbnails, social event flyers, and breaking announcements.';
        botOptions = ['Chat on WhatsApp Now', 'View YouTube Thumbnails'];
      } else {
        botResponse = `Thanks for your message: "${text}".\nMaryam Afzal will review your custom requirements personally. In our live client setups, this bot can automatically log leads directly into Google Sheets or CRM 24/7!`;
        botOptions = ['View Design Packages', 'Connect on Real WhatsApp'];
      }

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: botResponse,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          options: botOptions
        }
      ]);
      setIsTyping(false);
    }, 700);
  };

  const handleReset = () => {
    setMessages([
      {
        id: '1',
        sender: 'bot',
        text: 'Assalam-o-Alaikum! Welcome to Aaim Studio automated business assistant. How can I help you today?',
        time: 'Just now',
        options: ['View Design Packages', 'Salon / Clinic Booking Flow', 'Restaurant Order Flow', 'Talk to Maryam (Designer)']
      }
    ]);
  };

  return (
    <section id="automation" className={`py-16 sm:py-24 border-t ${
      darkMode ? 'bg-[#0e0b14] border-[#221930]' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
            Interactive Live Feature
          </p>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Experience WhatsApp Automation in Action
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            We build smart WhatsApp bots that answer customers 24/7, send price lists, and take bookings automatically. 
            Test the live simulator below to see how it works for salons, restaurants, clinics, and brands!
          </p>
        </div>

        {/* Live Simulator Card */}
        <div className="max-w-xl mx-auto rounded-3xl overflow-hidden border shadow-2xl transition-all duration-200">
          
          {/* WhatsApp Header */}
          <div className="bg-[#128C7E] text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center font-bold text-lg border border-white/20">
                <Bot className="w-5 h-5 text-emerald-200" />
              </div>
              <div>
                <p className="text-sm font-bold flex items-center gap-1.5">
                  <span>Aaim Studio Assistant</span>
                  <span className="text-[10px] bg-emerald-900 px-1.5 py-0.2 rounded font-normal">24/7 Bot</span>
                </p>
                <p className="text-xs text-emerald-100 flex items-center gap-1">
                  <span>Online · Instant Replies</span>
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              title="Reset conversation"
              className="p-2 rounded-lg bg-emerald-700/60 hover:bg-emerald-700 text-white transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="bg-[#0b141a] p-4 sm:p-5 h-[360px] overflow-y-auto space-y-3.5 scrollbar-thin">
            
            {/* Timestamp Notice */}
            <div className="text-center">
              <span className="text-[10px] bg-[#182229] text-slate-400 px-2.5 py-1 rounded-md">
                End-to-End Encrypted Simulation
              </span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-xs sm:text-[13px] leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#005c4b] text-white rounded-tr-none'
                      : 'bg-[#202c33] text-slate-100 rounded-tl-none border border-slate-700/40'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-slate-400">
                    <span>{msg.time}</span>
                    {msg.sender === 'user' && <CheckCheck className="w-3.5 h-3.5 text-sky-400" />}
                  </div>
                </div>

                {/* Quick Action Buttons from bot */}
                {msg.options && msg.options.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(opt)}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-[#2a3942] hover:bg-[#374955] text-emerald-300 border border-emerald-500/30 transition-colors"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-2 rounded-xl bg-[#202c33] text-slate-400 text-xs w-28">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] ml-1">Typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="bg-[#202c33] p-3 flex items-center gap-2 border-t border-slate-700/50">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message or click suggested buttons above..."
              className="flex-1 bg-[#2a3942] text-xs sm:text-sm text-white rounded-xl px-3.5 py-2.5 outline-none placeholder:text-slate-500 focus:ring-1 focus:ring-emerald-500"
            />
            <button
              onClick={() => handleSend()}
              className="p-2.5 rounded-xl bg-[#00a884] hover:bg-[#008f6f] text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Card Footer Call to Action */}
          <div className="bg-[#111b21] p-3.5 text-center border-t border-slate-800">
            <a
              href="https://wa.me/923072390291?text=Assalam-o-Alaikum%20Maryam!%20I%20want%20to%20set%20up%20a%20WhatsApp%20Automation%20Bot%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Get WhatsApp Automation for Your Business (Chat with Maryam)</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
