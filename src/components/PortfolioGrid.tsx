import { useState, useMemo } from 'react';
import { Search, Eye, MessageSquare, LayoutGrid, Rows3 } from 'lucide-react';
import { CATEGORIES, PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData';

interface PortfolioGridProps {
  darkMode: boolean;
  onSelectProject: (item: PortfolioItem) => void;
}

export function PortfolioGrid({ darkMode, onSelectProject }: PortfolioGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'fluid'>('grid');

  // Filter items based on active category & search query
  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q) ||
        item.industry.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.highlights.some(h => h.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Compute item count per category for tabs
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PORTFOLIO_ITEMS.length };
    PORTFOLIO_ITEMS.forEach(it => {
      counts[it.category] = (counts[it.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <section id="portfolio" className={`py-16 sm:py-24 border-t ${
      darkMode ? 'bg-[#0f0d14] border-[#221a30]' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <p className="text-xs font-semibold tracking-wider uppercase text-purple-400">
            Selected Work & Design Archive
          </p>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Explore Our Comprehensive Portfolio
          </h2>
          <p className={`text-sm sm:text-base ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Every project is tailored specifically to the client’s industry, color palette, and conversion goals. 
            Click any piece to inspect high-resolution details, turnaround times, and source deliverables.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Filter Tabs (Interactive segmented buttons) */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center p-1 rounded-xl border max-w-full overflow-x-auto scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    active
                      ? 'bg-purple-600 text-white shadow-sm'
                      : darkMode
                        ? 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[11px] font-mono px-1.5 py-0.2 rounded ${
                    active ? 'bg-purple-800 text-purple-200' : darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Layout Toggle Controls */}
          <div className="flex items-center gap-2 w-full md:w-auto shrink-0 justify-end">
            
            {/* Search Input */}
            <div className={`relative flex items-center rounded-xl border px-3 py-1.5 w-full md:w-64 transition-all ${
              darkMode 
                ? 'bg-[#181324] border-slate-700/80 text-white focus-within:border-purple-500' 
                : 'bg-white border-slate-300 text-slate-900 focus-within:border-purple-500'
            }`}>
              <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search designs..."
                className="bg-transparent text-xs sm:text-sm w-full outline-none placeholder:text-slate-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-400 hover:text-white px-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className={`hidden sm:flex items-center p-1 rounded-xl border ${
              darkMode ? 'bg-[#181324] border-slate-700' : 'bg-white border-slate-200'
            }`}>
              <button
                onClick={() => setViewMode('grid')}
                title="Structured Grid View"
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('fluid')}
                title="Fluid Aspect View"
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'fluid' 
                    ? 'bg-purple-600 text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Rows3 className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Results Meta Info */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
          <span>
            Showing <strong className="text-purple-400 tabular-nums">{filteredItems.length}</strong> design samples
            {selectedCategory !== 'all' && ` in ${CATEGORIES.find(c => c.id === selectedCategory)?.label}`}
          </span>
          <span className="hidden sm:inline">
            Click any image to view details, software, & custom order options
          </span>
        </div>

        {/* Portfolio Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className={`text-center py-16 px-4 rounded-2xl border ${
            darkMode ? 'bg-[#181324] border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <p className="text-base font-semibold text-slate-300">No design samples match your search</p>
            <p className="text-xs text-slate-500 mt-1">Try another keyword like "wedding", "food", "tech", or reset filters.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-medium rounded-lg bg-purple-600 text-white hover:bg-purple-500"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className={
            viewMode === 'grid'
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
              : "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          }>
            {filteredItems.map((item) => {
              const waOrderLink = `https://wa.me/923072390291?text=${encodeURIComponent(
                `Assalam-o-Alaikum Maryam! I saw your "${item.title}" (${item.categoryLabel}) in your portfolio and want to get a similar design made.`
              )}`;

              return (
                <div
                  key={item.id}
                  className={`group relative rounded-2xl overflow-hidden border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                    darkMode
                      ? 'bg-[#181423] border-[#2e2440] hover:border-purple-600/50 hover:shadow-purple-950/40'
                      : 'bg-white border-slate-200 hover:border-purple-300 hover:shadow-slate-300/60'
                  }`}
                >
                  {/* Image Presentation */}
                  <div 
                    onClick={() => onSelectProject(item)}
                    className={`relative cursor-pointer overflow-hidden bg-black/40 ${
                      viewMode === 'grid' 
                        ? item.aspect === 'wide' 
                          ? 'aspect-[16/9]' 
                          : item.aspect === 'vertical' 
                            ? 'aspect-[4/5]' 
                            : 'aspect-square'
                        : 'w-full'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Scrim with Quick Actions */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold text-purple-300 mb-1">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Details & Zoom</span>
                      </div>
                      <p className="text-sm font-bold text-white line-clamp-1">{item.title}</p>
                    </div>

                    {/* Category Label Overlay */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-black/70 backdrop-blur-md text-purple-300 border border-purple-800/40">
                      {item.categoryLabel}
                    </div>

                    {/* Turnaround Badge */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-md text-[10px] font-mono bg-black/70 backdrop-blur-md text-emerald-400 border border-emerald-900/40">
                      {item.turnaround}
                    </div>
                  </div>

                  {/* Card Content & Metadata */}
                  <div className="p-4 sm:p-5 space-y-3">
                    
                    {/* Unboxed Metadata with Typographic Separator */}
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="font-medium text-purple-400">{item.industry}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.software.join(', ')}</span>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => onSelectProject(item)}
                      className={`text-base font-bold line-clamp-1 cursor-pointer transition-colors ${
                        darkMode ? 'text-white hover:text-purple-300' : 'text-slate-900 hover:text-purple-700'
                      }`}
                    >
                      {item.title}
                    </h3>

                    {/* Brief description */}
                    <p className={`text-xs sm:text-[13px] line-clamp-2 leading-relaxed ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="pt-1 flex flex-wrap gap-1.5 text-[11px]">
                      {item.highlights.slice(0, 2).map((h, i) => (
                        <span 
                          key={i} 
                          className={`px-2 py-0.5 rounded ${
                            darkMode ? 'bg-purple-950/40 text-purple-300 border border-purple-900/40' : 'bg-purple-50 text-purple-800 border border-purple-100'
                          }`}
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-3 border-t border-slate-700/30 flex items-center justify-between gap-2">
                      <button
                        onClick={() => onSelectProject(item)}
                        className={`text-xs font-semibold inline-flex items-center gap-1.5 transition-colors ${
                          darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-700 hover:text-purple-900'
                        }`}
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Details</span>
                      </button>

                      <a
                        href={waOrderLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>Order Similar</span>
                      </a>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Instagram Full Collection Callout */}
        <div className={`mt-14 p-6 sm:p-8 rounded-2xl border text-center max-w-3xl mx-auto space-y-4 ${
          darkMode ? 'bg-[#181324] border-[#312547]' : 'bg-white border-slate-200'
        }`}>
          <h3 className={`text-lg sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Looking for something specific or custom?
          </h3>
          <p className={`text-xs sm:text-sm max-w-xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            We create designs in any aesthetic imaginable — from vintage Eastern art to ultra-modern Silicon Valley tech branding. 
            Send us your reference image or moodboard on WhatsApp and get a tailored draft.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href="https://wa.me/923072390291?text=Assalam-o-Alaikum%20Maryam!%20I%20have%20a%20custom%20design%20reference%20to%20share."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Share Reference on WhatsApp</span>
            </a>
            <a
              href="https://www.instagram.com/aaim72462/"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-colors ${
                darkMode
                  ? 'border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800'
                  : 'border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}
            >
              <span>See Daily Instagram Work (@aaim72462)</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
