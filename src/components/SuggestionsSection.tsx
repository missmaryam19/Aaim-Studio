import { Sparkles, Globe, Target, Video, QrCode, TrendingUp, Check } from 'lucide-react';

export function SuggestionsSection({ darkMode }: { darkMode: boolean }) {
  const suggestions = [
    {
      icon: <Globe className="w-5 h-5 text-indigo-400" />,
      title: '1. Connect a Custom Domain (e.g. aaimstudio.pk or .com)',
      summary: 'Increase trust by 500% with premium corporate clients',
      points: [
        'GitHub Pages allows free custom domain binding via CNAME.',
        'A custom domain like www.aaimstudio.com looks 10x more legitimate than a free github.io URL.',
        'Cost is only ~Rs 2,500/year and can be connected directly in GitHub Repo Settings > Custom domain.'
      ]
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-purple-400" />,
      title: '2. Add Quantitative Case Studies (CTR & Sales Growth)',
      summary: 'Clients pay 3x higher rates when you prove business ROI',
      points: [
        'Instead of just showing the graphic, mention: "Increased YouTube click-through rate from 4.2% to 13.8%".',
        'For salons and restaurants, write: "Resulted in 42 WhatsApp orders on opening weekend".',
        'High-budget clients in UAE, UK, and USA look for conversion metrics, not just visuals.'
      ]
    },
    {
      icon: <QrCode className="w-5 h-5 text-emerald-400" />,
      title: '3. QR Code on Print Samples & WhatsApp Business Bio',
      summary: 'Turn every real-world interaction into an instant portfolio view',
      points: [
        'Print a clean QR code on the back of all printed wedding cards, flyers, and business cards.',
        'When relatives, guests, or customers scan it, they land directly on this portfolio.',
        'Set your WhatsApp Business catalog link directly to this portfolio URL.'
      ]
    },
    {
      icon: <Video className="w-5 h-5 text-amber-400" />,
      title: '4. Short 15-Second Time-Lapse Speed Art on Instagram',
      summary: 'Social proof that you craft real authentic designs',
      points: [
        'Record quick screen-recordings of your Photoshop/Illustrator pen tool & typography process.',
        'Post on Instagram Reels (@aaim72462) & TikTok with trending audio and design tips.',
        'Direct viewers: "Check full 33+ sample portfolio in bio link".'
      ]
    },
    {
      icon: <Target className="w-5 h-5 text-rose-400" />,
      title: '5. Retainer Packages for Consistent Monthly Income',
      summary: 'Move away from single low-rate gigs to monthly recurring retainers',
      points: [
        'Offer local salons, cafes, and academies a "Monthly Growth Retainer": 15 posts + 4 reels + WhatsApp support for Rs 25,000 - 45,000/mo.',
        'With just 4 retainer clients, you secure stable monthly freelance revenue.'
      ]
    },
    {
      icon: <Sparkles className="w-5 h-5 text-sky-400" />,
      title: '6. Free Lead-Magnet (Canva / PSD Starter Template)',
      summary: 'Capture client phone numbers and emails on your site',
      points: [
        'Offer a free downloadable Eid greeting card or YouTube thumbnail template.',
        'Users message on WhatsApp to receive the file link, giving you a warm client lead forever.'
      ]
    }
  ];

  return (
    <section className={`py-16 sm:py-24 border-t ${
      darkMode ? 'bg-[#0e0b14] border-[#221830]' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <p className="text-xs font-semibold tracking-wider uppercase text-purple-400">
            Growth Strategy & Pro Recommendations
          </p>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            How to Make Your Portfolio Stand Out & Attract High-Paying Clients
          </h2>
          <p className={`text-sm sm:text-base ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Here are actionable suggestions and industry best practices to turn your GitHub portfolio into a continuous client acquisition engine.
          </p>
        </div>

        {/* 6 Suggestions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestions.map((s, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                darkMode ? 'bg-[#181324] border-[#2c2240] hover:border-purple-600/50' : 'bg-white border-slate-200 hover:border-purple-300'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className={`p-2.5 rounded-xl border ${
                    darkMode ? 'bg-[#221a33] border-[#382b52]' : 'bg-slate-100 border-slate-200'
                  }`}>
                    {s.icon}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-400">
                    Pro Recommendation
                  </span>
                </div>

                <h3 className={`text-base font-bold leading-snug ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {s.title}
                </h3>

                <p className="text-xs font-medium text-emerald-400">
                  {s.summary}
                </p>

                <ul className="space-y-2 pt-2 border-t border-slate-700/30">
                  {s.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
