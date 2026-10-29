import { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight, MessageSquare, Check, ShieldCheck, Clock, Layers } from 'lucide-react';
import { PortfolioItem, PORTFOLIO_ITEMS } from '../data/portfolioData';

interface ProjectModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onNavigate: (newItem: PortfolioItem) => void;
  darkMode: boolean;
}

export function ProjectModal({ item, onClose, onNavigate, darkMode }: ProjectModalProps) {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setZoomLevel(1);
  }, [item?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item]);

  if (!item) return null;

  const currentIndex = PORTFOLIO_ITEMS.findIndex(p => p.id === item.id);
  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % PORTFOLIO_ITEMS.length;
    onNavigate(PORTFOLIO_ITEMS[nextIdx]);
  };
  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
    onNavigate(PORTFOLIO_ITEMS[prevIdx]);
  };

  const waLink = `https://wa.me/923072390291?text=${encodeURIComponent(
    `Assalam-o-Alaikum Maryam! I saw "${item.title}" (${item.categoryLabel}) in your portfolio and want to discuss ordering a similar design for my business.`
  )}`;

  const handleCopyTitle = () => {
    navigator.clipboard.writeText(`Aaim Studio Portfolio - ${item.title}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Container */}
      <div className={`relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-2xl border ${
        darkMode ? 'bg-[#15111f] border-[#2e2340] text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Top Control Bar for Mobile */}
        <div className="lg:hidden flex items-center justify-between p-3 border-b border-slate-700/50">
          <span className="text-xs font-semibold text-purple-400 truncate max-w-[200px]">{item.title}</span>
          <button 
            onClick={onClose} 
            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Left Side: High-Resolution Visual Inspection & Zoom Canvas */}
        <div className="relative flex-1 bg-black/90 flex items-center justify-center min-h-[320px] lg:min-h-[560px] overflow-hidden select-none">
          
          {/* Zoom controls floating */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1 p-1 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white">
            <button
              onClick={() => setZoomLevel(prev => Math.min(prev + 0.5, 2.5))}
              title="Zoom In"
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(prev => Math.max(prev - 0.5, 1))}
              title="Zoom Out"
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            {zoomLevel !== 1 && (
              <button
                onClick={() => setZoomLevel(1)}
                title="Reset Zoom"
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
            <span className="px-2 text-[11px] font-mono text-purple-300">{Math.round(zoomLevel * 100)}%</span>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            title="Previous Design (Left Arrow)"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-purple-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            title="Next Design (Right Arrow)"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-purple-600 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image Canvas */}
          <div className="p-4 flex items-center justify-center w-full h-full max-h-[80vh] overflow-auto">
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              style={{ transform: `scale(${zoomLevel})`, transition: 'transform 0.2s ease-out' }}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Index Counter */}
          <div className="absolute bottom-4 left-4 z-20 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-white/10">
            {currentIndex + 1} of {PORTFOLIO_ITEMS.length}
          </div>
        </div>

        {/* Right Side: Specification, Rationale & Direct Order Options */}
        <div className="w-full lg:w-[420px] flex flex-col justify-between p-6 sm:p-7 overflow-y-auto max-h-[85vh]">
          
          <div className="space-y-5">
            
            {/* Top Close Button for Desktop */}
            <div className="hidden lg:flex items-center justify-between pb-3 border-b border-slate-700/40">
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                Design Specifications
              </span>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Unboxed Metadata */}
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="font-semibold text-purple-400">{item.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{item.industry}</span>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-extrabold leading-tight">
              {item.title}
            </h2>

            {/* Description / Strategy */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Concept & Strategy</p>
              <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {item.description}
              </p>
            </div>

            {/* Visual Highlights */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Design Highlights</p>
              <ul className="space-y-1.5">
                {item.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Production Specifications Grid */}
            <div className={`p-4 rounded-xl border space-y-3 text-xs ${
              darkMode ? 'bg-[#1d1729] border-[#312547]' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Turnaround:</span>
                </span>
                <span className="font-semibold text-emerald-400">{item.turnaround}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Layers className="w-3.5 h-3.5 text-purple-400" />
                  <span>Tools:</span>
                </span>
                <span className="font-medium text-slate-200">{item.software.join(', ')}</span>
              </div>
              <div className="pt-2 border-t border-slate-700/40">
                <p className="text-[11px] font-semibold text-slate-400 mb-1">Deliverables Included:</p>
                <div className="flex flex-wrap gap-1">
                  {item.deliverables.map((d, i) => (
                    <span 
                      key={i} 
                      className={`text-[10px] px-2 py-0.5 rounded ${
                        darkMode ? 'bg-black/40 text-purple-300 border border-purple-900/40' : 'bg-white text-slate-800 border border-slate-200'
                      }`}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Action Call to Action */}
          <div className="pt-6 mt-6 border-t border-slate-700/40 space-y-2">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-950/20 transition-all duration-150"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order a Design Like This</span>
            </a>

            <div className="flex items-center justify-between pt-1">
              <button
                onClick={handleCopyTitle}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                {copiedLink ? '✓ Copied to clipboard!' : 'Copy project name'}
              </button>
              <span className="text-[11px] text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Unlimited Revisions</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
