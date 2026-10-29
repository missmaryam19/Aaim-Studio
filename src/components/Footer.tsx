import { MessageSquare, Mail, Instagram, Github, ArrowUp, Sparkles } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  onOpenDeployGuide: () => void;
  onOpenEstimator: () => void;
}

export function Footer({ darkMode, onOpenDeployGuide, onOpenEstimator }: FooterProps) {
  const logoSrc = darkMode
    ? '/assets/aistudio/logo-dark-wide_ed18db9d.png'
    : '/assets/aistudio/logo-light-wide_d589cbda.png';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t pt-16 pb-12 transition-colors ${
      darkMode ? 'bg-[#0b0910] border-[#221830] text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Studio Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <img 
              src={logoSrc} 
              alt="Aaim Studio" 
              className="h-11 w-auto object-contain" 
            />
            <p className="text-xs sm:text-sm leading-relaxed max-w-sm">
              <strong>Aaim Studio by Maryam Afzal</strong> — Providing end-to-end graphic design, 
              high-CTR YouTube thumbnails, luxury wedding stationery, AI video reels, and 24/7 WhatsApp automation since 2020.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs">
              <span className="font-semibold text-purple-400">Lahore, Pakistan</span>
              <span aria-hidden="true">·</span>
              <span>Worldwide Client Delivery</span>
            </div>
          </div>

          {/* Col 2: Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Direct Contact & Inquiries
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href="https://wa.me/923072390291?text=Assalam-o-Alaikum%20Maryam!%20I%20would%20like%20to%20discuss%20a%20design%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span>WhatsApp: 0307 2390291 (+92 307 2390291)</span>
              </a>
              <a
                href="mailto:contact.aaimstudio@gmail.com"
                className="flex items-center gap-2.5 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-slate-400" />
                <span>contact.aaimstudio@gmail.com</span>
              </a>
              <a
                href="mailto:01.maryam.afzal@gmail.com"
                className="flex items-center gap-2.5 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0 text-slate-400" />
                <span>01.maryam.afzal@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/aaim72462/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4 shrink-0 text-pink-400" />
                <span>Instagram: @aaim72462 (Aaim Arts)</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Navigation & Tools */}
          <div className="md:col-span-3 space-y-3">
            <h4 className={`text-xs font-bold uppercase tracking-wider ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Quick Tools & Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenEstimator}
                  className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Interactive Quote Calculator</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDeployGuide}
                  className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Deploy to GitHub Pages Guide</span>
                </button>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-purple-400 transition-colors">
                  All 33+ Design Samples
                </a>
              </li>
              <li>
                <a href="#automation" className="hover:text-purple-400 transition-colors">
                  WhatsApp Bot Live Simulator
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-purple-400 transition-colors">
                  Client Reviews & Testimonials
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 Aaim Studio — Maryam Afzal. All Rights Reserved. Graphic Design • AI Video • UGC Ads • WhatsApp Automation.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
