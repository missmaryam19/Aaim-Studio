import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/portfolioData';

export function FaqSection({ darkMode, onOpenDeployGuide }: { darkMode: boolean; onOpenDeployGuide: () => void }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className={`py-16 sm:py-24 border-t ${
      darkMode ? 'bg-[#120f1a] border-[#251d33]' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-semibold tracking-wider uppercase text-purple-400">
            Frequently Asked Questions
          </p>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Everything You Need to Know
          </h2>
          <p className={`text-sm sm:text-base ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Have questions about ordering, deliverables, revisions, or hosting? Find quick answers below.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  darkMode ? 'bg-[#181324] border-[#2c2240]' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base transition-colors"
                >
                  <span className={`flex items-center gap-2.5 ${isOpen ? 'text-purple-400' : darkMode ? 'text-white' : 'text-slate-900'}`}>
                    <HelpCircle className="w-4 h-4 shrink-0 text-purple-400" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-purple-400' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-700/20">
                    <p>{faq.a}</p>
                    {idx === 4 && (
                      <button
                        onClick={onOpenDeployGuide}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 underline"
                      >
                        Open Step-by-Step GitHub Deployment Guide
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className={`mt-10 p-5 rounded-2xl border text-center flex flex-col sm:flex-row items-center justify-between gap-4 ${
          darkMode ? 'bg-[#181324] border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="text-left">
            <p className="text-sm font-bold text-white">Have a custom question?</p>
            <p className="text-xs text-slate-400">Ask Maryam directly on WhatsApp for an immediate response.</p>
          </div>
          <a
            href="https://wa.me/923072390291?text=Assalam-o-Alaikum%20Maryam!%20I%20have%20a%20question%20regarding%20your%20design%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
