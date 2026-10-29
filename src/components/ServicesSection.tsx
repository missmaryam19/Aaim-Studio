import { Palette, Video, Share2, Bot, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesSectionProps {
  darkMode: boolean;
  onOpenEstimator: () => void;
}

export function ServicesSection({ darkMode, onOpenEstimator }: ServicesSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette': return <Palette className="w-6 h-6 text-purple-400" />;
      case 'Video': return <Video className="w-6 h-6 text-indigo-400" />;
      case 'Share2': return <Share2 className="w-6 h-6 text-emerald-400" />;
      case 'Bot': return <Bot className="w-6 h-6 text-amber-400" />;
      default: return <Palette className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section id="services" className={`py-16 sm:py-24 border-t ${
      darkMode ? 'bg-[#120f1a] border-[#251d33]' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs font-semibold tracking-wider uppercase text-purple-400">
            End-to-End Creative Services
          </p>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Everything Your Brand Needs Under One Roof
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            No rigid, generic templates. Every deliverable is custom-crafted to your target market, 
            optimized for high visual retention and immediate customer action.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((svc) => {
            const serviceWaLink = `https://wa.me/923072390291?text=${encodeURIComponent(
              `Assalam-o-Alaikum Maryam! I am inquiring about your "${svc.title}" service. Please share details and pricing.`
            )}`;

            return (
              <div
                key={svc.id}
                className={`group rounded-2xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                  darkMode 
                    ? 'bg-[#181324] border-[#2f2445] hover:border-purple-500/50 hover:shadow-purple-950/30' 
                    : 'bg-slate-50 border-slate-200 hover:border-purple-300 hover:shadow-slate-200'
                }`}
              >
                <div className="space-y-4">
                  
                  {/* Icon & Tagline */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl border ${
                      darkMode ? 'bg-[#221a33] border-[#382b52]' : 'bg-white border-slate-200'
                    }`}>
                      {getIcon(svc.icon)}
                    </div>
                    <span className="text-xs font-mono text-purple-400 font-medium">
                      Tailored Packages
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl sm:text-2xl font-bold ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {svc.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="pt-2 border-t border-slate-700/30 space-y-2">
                    <p className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                      Deliverables & Scope
                    </p>
                    <ul className="space-y-2">
                      {svc.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Service Card Footer CTA */}
                <div className="pt-6 mt-6 border-t border-slate-700/30 flex items-center justify-between gap-3">
                  <a
                    href={serviceWaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>Inquire via WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={onOpenEstimator}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      darkMode 
                        ? 'border-slate-700 bg-slate-800 text-slate-300 hover:text-white' 
                        : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    Estimate Cost
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
