import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioGrid } from './components/PortfolioGrid';
import { ServicesSection } from './components/ServicesSection';
import { WhatsAppBotSimulator } from './components/WhatsAppBotSimulator';
import { QuoteEstimator } from './components/QuoteEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SuggestionsSection } from './components/SuggestionsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PortfolioItem } from './data/portfolioData';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState<boolean>(false);

  // Sync dark mode class on document body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0f0d14';
      document.body.style.color = '#f1f5f9';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#0f172a';
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
      darkMode ? 'bg-[#0f0d14] text-slate-100' : 'bg-white text-slate-900'
    }`}>
      
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          darkMode={darkMode}
          onSelectProject={(item) => setSelectedProject(item)}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        {/* Portfolio Gallery with All 33+ Samples & Category Filters */}
        <PortfolioGrid
          darkMode={darkMode}
          onSelectProject={(item) => setSelectedProject(item)}
        />

        {/* Services & Capabilities Breakdown */}
        <ServicesSection
          darkMode={darkMode}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        {/* WhatsApp Automation Simulator */}
        <WhatsAppBotSimulator
          darkMode={darkMode}
        />

        {/* Verified Client Reviews */}
        <TestimonialsSection
          darkMode={darkMode}
        />

        {/* Strategic Suggestions to make the portfolio succeed */}
        <SuggestionsSection
          darkMode={darkMode}
        />

        {/* FAQ Section */}
        <FaqSection
          darkMode={darkMode}
          onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        darkMode={darkMode}
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Lightbox / Project Details Modal */}
      <ProjectModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigate={(newItem) => setSelectedProject(newItem)}
        darkMode={darkMode}
      />

      {/* Interactive Quote Calculator Modal */}
      <QuoteEstimator
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        darkMode={darkMode}
      />

      {/* GitHub Deployment Guide Modal */}
      {/* We import dynamically from component */}
      <GitHubDeployModalWrapper
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
        darkMode={darkMode}
      />

      {/* Floating Bottom Quick Action on Mobile & Desktop */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href="https://wa.me/923072390291?text=Assalam-o-Alaikum%20Maryam!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20design%20project."
          target="_blank"
          rel="noopener noreferrer"
          title="Direct WhatsApp Chat"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-emerald-950/40 transition-all duration-200 hover:scale-105"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp Direct</span>
        </a>
      </div>

    </div>
  );
}

// Inline wrapper for GitHubDeployModal
import { GitHubDeployModal } from './components/GitHubDeployModal';
function GitHubDeployModalWrapper(props: { isOpen: boolean; onClose: () => void; darkMode: boolean }) {
  return <GitHubDeployModal {...props} />;
}
