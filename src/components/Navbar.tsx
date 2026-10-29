import { useState } from 'react';
import { MessageSquare, Github, Menu, X, Sun, Moon, Sparkles } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenDeployGuide: () => void;
  onOpenEstimator: () => void;
}

export function Navbar({ darkMode, setDarkMode, onOpenDeployGuide, onOpenEstimator }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoSrc = darkMode
    ? '/assets/aistudio/logo-dark-wide_ed18db9d.png'
    : '/assets/aistudio/logo-light-wide_d589cbda.png';

  const waLink = "https://wa.me/923072390291?text=Assalam-o-Alaikum%20Maryam!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20design%20project.";

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-200 border-b backdrop-blur-md ${
      darkMode 
        ? 'bg-[#120f1a]/90 border-[#2a2238] text-slate-100' 
        : 'bg-white/90 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Brand Wordmark / Logo */}
          <a href="#top" className="flex items-center gap-3 shrink-0 group">
            <img 
              src={logoSrc} 
              alt="Aaim Studio — Maryam Afzal" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />
          </a>

          {/* Zone 2: Clean 4–5 single-line navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a 
              href="#portfolio" 
              className={`whitespace-nowrap transition-colors ${
                darkMode ? 'text-slate-300 hover:text-purple-400' : 'text-slate-600 hover:text-purple-600'
              }`}
            >
              Portfolio
            </a>
            <a 
              href="#services" 
              className={`whitespace-nowrap transition-colors ${
                darkMode ? 'text-slate-300 hover:text-purple-400' : 'text-slate-600 hover:text-purple-600'
              }`}
            >
              Services
            </a>
            <a 
              href="#automation" 
              className={`whitespace-nowrap transition-colors ${
                darkMode ? 'text-slate-300 hover:text-purple-400' : 'text-slate-600 hover:text-purple-600'
              }`}
            >
              WhatsApp Bot Demo
            </a>
            <a 
              href="#reviews" 
              className={`whitespace-nowrap transition-colors ${
                darkMode ? 'text-slate-300 hover:text-purple-400' : 'text-slate-600 hover:text-purple-600'
              }`}
            >
              Reviews
            </a>
            <a 
              href="#faq" 
              className={`whitespace-nowrap transition-colors ${
                darkMode ? 'text-slate-300 hover:text-purple-400' : 'text-slate-600 hover:text-purple-600'
              }`}
            >
              FAQs
            </a>
          </nav>

          {/* Zone 3: Actions (Theme Toggle, GitHub Guide, Primary WhatsApp Action) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Deploy to GitHub guide button */}
            <button
              onClick={onOpenDeployGuide}
              title="GitHub Deployment Instructions & Setup"
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-all ${
                darkMode
                  ? 'border-purple-900/60 bg-purple-950/30 text-purple-300 hover:bg-purple-900/40 hover:text-white'
                  : 'border-purple-200 bg-purple-50 text-purple-800 hover:bg-purple-100'
              }`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>Deploy to GitHub</span>
            </button>

            {/* Quote calculator trigger */}
            <button
              onClick={onOpenEstimator}
              className={`hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-all ${
                darkMode
                  ? 'border-slate-700 bg-slate-800/60 text-slate-200 hover:bg-slate-700'
                  : 'border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Get Free Quote</span>
            </button>

            {/* Ambient Dark/Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg border transition-colors ${
                darkMode 
                  ? 'border-slate-800 bg-[#1b1626] text-amber-300 hover:bg-[#251f33]' 
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Primary Action Button */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-all duration-150 whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Start Project</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t space-y-2 ${
            darkMode ? 'border-[#2a2238] bg-[#120f1a]' : 'border-slate-200 bg-white'
          }`}>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-purple-600/10"
            >
              Portfolio Samples
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-purple-600/10"
            >
              Services & Capabilities
            </a>
            <a
              href="#automation"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-purple-600/10"
            >
              WhatsApp Automation Demo
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-purple-600/10"
            >
              Client Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-purple-600/10"
            >
              Frequently Asked Questions
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDeployGuide();
                }}
                className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg bg-purple-900/30 text-purple-300 border border-purple-800"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Deployment Guide</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg bg-slate-800 text-slate-200"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Calculate Project Quote</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
