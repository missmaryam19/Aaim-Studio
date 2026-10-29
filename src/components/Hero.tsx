import { useState, useEffect } from 'react';
import { MessageSquare, ArrowRight, CheckCircle2, Sparkles, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData';

interface HeroProps {
  darkMode: boolean;
  onSelectProject: (item: PortfolioItem) => void;
  onOpenEstimator: () => void;
}

export function Hero({ darkMode, onSelectProject, onOpenEstimator }: HeroProps) {
  // Rotate through 4 signature spotlight pieces in hero showcase
  const spotlightIds = ['wedding-gold', 'restaurant-deal', 'thumb-billion', 'ugc-skincare', 'logo-tech'];
  const spotlightItems = PORTFOLIO_ITEMS.filter(it => spotlightIds.includes(it.id));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % spotlightItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [spotlightItems.length]);

  const activeSpotlight = spotlightItems[currentIndex] || spotlightItems[0];
  const waLink = "https://wa.me/923072390291?text=Assalam-o-Alaikum%20Maryam!%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20my%20design%20project.";

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[120px]" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-48 -left-20 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy & Call-to-Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Quiet unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-purple-400">
              <span>Aaim Studio</span>
              <span aria-hidden="true">·</span>
              <span>Graphic Design</span>
              <span aria-hidden="true">·</span>
              <span>AI Video & UGC</span>
              <span aria-hidden="true">·</span>
              <span>WhatsApp Automation</span>
            </div>

            {/* Dominant Headline with text-wrap: balance */}
            <h1 
              style={{ textWrap: 'balance' }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.12] ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Eye-Catching Designs That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-500">
                Turn Viewers Into Customers
              </span>
            </h1>

            {/* Lead Narrative */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Assalam-o-Alaikum! I'm <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Maryam Afzal</strong>, 
              delivering professional graphic design, high-CTR YouTube thumbnails, luxury wedding stationery, 
              social media ad campaigns, and intelligent 24/7 WhatsApp automation for businesses in Pakistan and worldwide.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-all duration-150 shadow-lg shadow-emerald-950/20"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#portfolio"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-medium border transition-all duration-150 ${
                  darkMode
                    ? 'border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>View Portfolio (33+ Works)</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenEstimator}
                className={`inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium border transition-all ${
                  darkMode
                    ? 'border-purple-800/60 bg-purple-950/20 text-purple-300 hover:bg-purple-900/40'
                    : 'border-purple-200 bg-purple-50 text-purple-700 hover:bg-purple-100'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Instant Quote Estimator</span>
              </button>
            </div>

            {/* Micro Trust Bullets */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Unlimited Revisions</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Same-Day & 24h Delivery</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Print-Ready & Source Files</span>
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Featured Showcase Card */}
          <div className="lg:col-span-5">
            <div className={`relative rounded-2xl border p-4 sm:p-5 transition-all shadow-2xl ${
              darkMode 
                ? 'bg-[#181324] border-[#312547] shadow-purple-950/30' 
                : 'bg-white border-slate-200 shadow-slate-200/60'
            }`}>
              
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/40 text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-purple-400">Featured Showcase</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-400">{activeSpotlight.categoryLabel}</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">
                  0{currentIndex + 1} / 0{spotlightItems.length}
                </span>
              </div>

              {/* Main Media Preview */}
              <div 
                onClick={() => onSelectProject(activeSpotlight)}
                className="relative mt-3 group cursor-pointer overflow-hidden rounded-xl bg-black/40 aspect-[4/3] flex items-center justify-center"
              >
                <img
                  src={activeSpotlight.image}
                  alt={activeSpotlight.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
                  <span className="text-xs font-semibold text-purple-300">Click to view full specs & zoom</span>
                  <p className="text-sm font-bold text-white line-clamp-1">{activeSpotlight.title}</p>
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white opacity-90 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Thumbnail Switcher */}
              <div className="mt-3 grid grid-cols-5 gap-2 pt-1">
                {spotlightItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative rounded-lg overflow-hidden border-2 aspect-square transition-all ${
                      idx === currentIndex 
                        ? 'border-purple-500 scale-105 shadow-md shadow-purple-500/20' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover" 
                    />
                  </button>
                ))}
              </div>

              {/* Card Meta Footer */}
              <div className="mt-3 pt-2 text-xs flex items-center justify-between text-slate-400">
                <span className="truncate max-w-[220px] font-medium text-slate-200">{activeSpotlight.title}</span>
                <span className="text-purple-400 font-medium shrink-0">{activeSpotlight.industry}</span>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width KPI Strip strictly below hero split */}
        <div className={`mt-14 pt-8 pb-4 border-t grid grid-cols-2 md:grid-cols-4 gap-6 text-center ${
          darkMode ? 'border-[#281f38]' : 'border-slate-200'
        }`}>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold font-display tabular-nums text-purple-400">Since 2020</p>
            <p className="text-xs sm:text-sm text-slate-400">5+ Years Professional Experience</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold font-display tabular-nums text-indigo-400">450+ Projects</p>
            <p className="text-xs sm:text-sm text-slate-400">Delivered Across 8 Categories</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold font-display tabular-nums text-emerald-400">12h - 24h</p>
            <p className="text-xs sm:text-sm text-slate-400">Fast Turnaround Available</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-extrabold font-display tabular-nums text-amber-400">Pakistan & Global</p>
            <p className="text-xs sm:text-sm text-slate-400">Clients in PK, UAE, UK & USA</p>
          </div>
        </div>

      </div>
    </section>
  );
}
