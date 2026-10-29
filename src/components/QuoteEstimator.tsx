import { useState, useMemo } from 'react';
import { X, MessageSquare, Check, Sparkles } from 'lucide-react';

interface QuoteEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

interface ServiceOption {
  id: string;
  name: string;
  category: string;
  pricePKR: number;
  priceUSD: number;
  unit: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { id: 'single-social', name: 'Single Social Media Post / Ad', category: 'Social Media', pricePKR: 1200, priceUSD: 10, unit: 'per design' },
  { id: 'pack-5-social', name: 'Pack of 5 Social Media Posts', category: 'Social Media', pricePKR: 4500, priceUSD: 35, unit: '5 posts' },
  { id: 'monthly-smm', name: 'Monthly Social Media Package (20 Creatives + Management)', category: 'Social Media', pricePKR: 22000, priceUSD: 140, unit: 'monthly' },
  { id: 'single-thumb', name: 'High-CTR YouTube Thumbnail', category: 'Thumbnails', pricePKR: 1500, priceUSD: 12, unit: 'per thumbnail' },
  { id: 'pack-4-thumb', name: 'YouTube Creator Bundle (4 Thumbnails)', category: 'Thumbnails', pricePKR: 4800, priceUSD: 38, unit: '4 thumbnails' },
  { id: 'wedding-card', name: 'Luxury Wedding Card Suite (Digital + Foil Print PDF)', category: 'Stationery', pricePKR: 3500, priceUSD: 25, unit: 'complete set' },
  { id: 'flyer-poster', name: 'Event Poster / Business Flyer (Print Ready CMYK)', category: 'Print Design', pricePKR: 2500, priceUSD: 20, unit: 'per flyer' },
  { id: 'brand-identity', name: 'Complete Brand Identity & Logo Kit', category: 'Branding', pricePKR: 12000, priceUSD: 85, unit: 'full brand board' },
  { id: 'ai-video', name: 'YouTube AI Story / UGC Video (Script + Voice + Edit)', category: 'Video', pricePKR: 6500, priceUSD: 45, unit: 'per video' },
  { id: 'whatsapp-bot', name: 'WhatsApp Automation Bot Setup (24/7 AI Flow)', category: 'Automation', pricePKR: 15000, priceUSD: 95, unit: 'one-time setup' }
];

export function QuoteEstimator({ isOpen, onClose, darkMode }: QuoteEstimatorProps) {
  const [currency, setCurrency] = useState<'PKR' | 'USD'>('PKR');
  const [selectedIds, setSelectedIds] = useState<string[]>(['single-social', 'single-thumb']);
  const [turnaround, setTurnaround] = useState<'standard' | 'express'>('standard');
  const [notes, setNotes] = useState('');

  const toggleService = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const calculatedTotal = useMemo(() => {
    let sum = 0;
    selectedIds.forEach(id => {
      const s = SERVICE_OPTIONS.find(opt => opt.id === id);
      if (s) {
        sum += currency === 'PKR' ? s.pricePKR : s.priceUSD;
      }
    });

    if (turnaround === 'express') {
      sum = Math.round(sum * 1.25); // 25% urgent fee
    }

    return sum;
  }, [selectedIds, currency, turnaround]);

  if (!isOpen) return null;

  const selectedServicesList = selectedIds
    .map(id => SERVICE_OPTIONS.find(o => o.id === id)?.name)
    .filter(Boolean)
    .join('\n• ');

  const waMessage = encodeURIComponent(
    `Assalam-o-Alaikum Maryam! I used your portfolio Quote Calculator and want to request a project:
    
Selected Services:
• ${selectedServicesList}

Currency: ${currency}
Estimated Budget: ${currency === 'PKR' ? `Rs ${calculatedTotal.toLocaleString()}` : `$${calculatedTotal}`}
Turnaround: ${turnaround === 'express' ? '⚡ Rush Express (12 Hours)' : 'Standard (24 - 48 Hours)'}
${notes ? `Additional Notes: ${notes}` : ''}

Please confirm your availability and next steps!`
  );

  const waUrl = `https://wa.me/923072390291?text=${waMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className={`relative z-10 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border ${
        darkMode ? 'bg-[#15111f] border-[#2e2340] text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700/40">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Interactive Project Quote Calculator</h2>
              <p className="text-xs text-slate-400">Select required services & get instant transparent pricing</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Currency and Turnaround Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-3 rounded-xl border border-slate-700/30 bg-slate-900/30">
            <div>
              <p className="text-xs font-semibold text-slate-400 mb-1.5">Currency</p>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrency('PKR')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    currency === 'PKR' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  PKR (₨) — Pakistan
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    currency === 'USD' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  USD ($) — International
                </button>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-400 mb-1.5">Turnaround Speed</p>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setTurnaround('standard')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    turnaround === 'standard' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  Standard (24 - 48h)
                </button>
                <button
                  onClick={() => setTurnaround('express')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    turnaround === 'express' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  ⚡ Rush (12h)
                </button>
              </div>
            </div>
          </div>

          {/* Service Selector List */}
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-purple-400">
              Select Services Needed:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SERVICE_OPTIONS.map((opt) => {
                const selected = selectedIds.includes(opt.id);
                const price = currency === 'PKR' ? `Rs ${opt.pricePKR.toLocaleString()}` : `$${opt.priceUSD}`;
                return (
                  <div
                    key={opt.id}
                    onClick={() => toggleService(opt.id)}
                    className={`cursor-pointer p-3 rounded-xl border text-left transition-all ${
                      selected
                        ? 'bg-purple-950/40 border-purple-500 text-white shadow-sm'
                        : darkMode
                          ? 'bg-[#191424] border-slate-800 text-slate-300 hover:border-slate-700'
                          : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className="text-xs font-semibold leading-snug">{opt.name}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{opt.unit}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-xs font-bold font-mono text-purple-400">{price}</span>
                        <div className={`w-4 h-4 rounded-md border mt-1 flex items-center justify-center ${
                          selected ? 'bg-purple-600 border-purple-600' : 'border-slate-600'
                        }`}>
                          {selected && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Optional Notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">
              Project Description or Reference Links (Optional):
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Need 3 posts for an Eid lawn collection with gold color palette..."
              className={`w-full rounded-xl border p-3 text-xs outline-none transition-colors ${
                darkMode ? 'bg-[#191424] border-slate-700 text-white focus:border-purple-500' : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-purple-500'
              }`}
            />
          </div>

        </div>

        {/* Footer Calculation & WhatsApp Button */}
        <div className={`p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
          darkMode ? 'border-slate-800 bg-[#120f1a]' : 'border-slate-200 bg-slate-50'
        }`}>
          <div>
            <span className="text-xs text-slate-400">Estimated Total:</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold font-mono text-purple-400 tabular-nums">
                {currency === 'PKR' ? `Rs ${calculatedTotal.toLocaleString()}` : `$${calculatedTotal}`}
              </span>
              <span className="text-[11px] text-slate-400">
                ({selectedIds.length} service{selectedIds.length !== 1 ? 's' : ''})
              </span>
            </div>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-950/20 transition-all duration-150"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Quote to Maryam on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
