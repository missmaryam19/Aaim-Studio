import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export function TestimonialsSection({ darkMode }: { darkMode: boolean }) {
  return (
    <section id="reviews" className={`py-16 sm:py-24 border-t ${
      darkMode ? 'bg-[#120f1a] border-[#251d33]' : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs font-semibold tracking-wider uppercase text-purple-400">
            Client Success & Trust
          </p>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Trusted by Brands & Creators Worldwide
          </h2>
          <p className={`text-sm sm:text-base ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            From local restaurants and bridal stationery to global YouTube channels, 
            here is what working with Maryam at Aaim Studio feels like.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {TESTIMONIALS.map((rev) => (
            <div
              key={rev.id}
              className={`rounded-2xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                darkMode 
                  ? 'bg-[#181324] border-[#2f2445] shadow-lg shadow-purple-950/20' 
                  : 'bg-slate-50 border-slate-200 shadow-slate-100'
              }`}
            >
              <div className="space-y-4">
                
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-purple-500/30" />
                </div>

                {/* Review Narrative */}
                <p className={`text-xs sm:text-sm leading-relaxed italic ${
                  darkMode ? 'text-slate-200' : 'text-slate-700'
                }`}>
                  "{rev.text}"
                </p>

              </div>

              {/* Author & Context Meta */}
              <div className="pt-5 mt-5 border-t border-slate-700/30 flex items-center justify-between">
                <div>
                  <p className={`text-sm font-bold flex items-center gap-1.5 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    <span>{rev.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  </p>
                  <p className="text-xs text-purple-400 font-medium">{rev.role}</p>
                  <p className="text-[11px] text-slate-400">{rev.company} · {rev.location}</p>
                </div>
                <span className="text-[10px] font-mono text-slate-500 shrink-0">{rev.date}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
