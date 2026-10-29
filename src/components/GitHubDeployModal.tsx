import { useState } from 'react';
import { X, Github, Copy, Check, Terminal, Globe, ExternalLink, Sparkles } from 'lucide-react';

interface GitHubDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export function GitHubDeployModal({ isOpen, onClose, darkMode }: GitHubDeployModalProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyCode = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const gitCommands = `# 1. Initialize Git in your folder (if not done)
git init

# 2. Add all your portfolio code and assets
git add .
git commit -m "feat: complete Aaim Studio design portfolio"

# 3. Rename branch to main
git branch -M main

# 4. Link to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/aaim-studio-portfolio.git

# 5. Push code to GitHub
git push -u origin main`;

  const ghActionYml = `name: Deploy Portfolio to GitHub Pages

on:
  push:
    branches: ['main']
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build static site
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="fixed inset-0" onClick={onClose} />

      <div className={`relative z-10 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border ${
        darkMode ? 'bg-[#15111f] border-[#2e2340] text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700/40">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400">
              <Github className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold">GitHub Pages Deployment Guide</h2>
              <p className="text-xs text-slate-400">Host your portfolio for 100% free with custom domain support</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Quick Summary Banner */}
          <div className="p-4 rounded-xl border border-purple-800/40 bg-purple-950/20 text-xs sm:text-sm text-purple-200 space-y-2">
            <p className="font-semibold flex items-center gap-1.5 text-white">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Free Hosting Forever on GitHub Pages</span>
            </p>
            <p className="text-slate-300 leading-relaxed text-xs">
              GitHub Pages hosts your Vite React portfolio for free at <code className="bg-black/50 px-1.5 py-0.5 rounded text-purple-300">https://yourusername.github.io/portfolio</code> (or you can connect a custom domain like <code className="bg-black/50 px-1.5 py-0.5 rounded text-purple-300">aaimstudio.com</code> anytime).
            </p>
          </div>

          {/* Step 1: Push Code to GitHub */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span>Step 1: Push Code to your GitHub Repository</span>
              </h3>
              <button
                onClick={() => copyCode(gitCommands, 1)}
                className="flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 font-medium"
              >
                {copiedIndex === 1 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedIndex === 1 ? 'Copied!' : 'Copy Commands'}</span>
              </button>
            </div>
            <pre className="p-3.5 rounded-xl bg-black/60 border border-slate-800 text-[11px] sm:text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
              {gitCommands}
            </pre>
          </div>

          {/* Step 2: Automated Deployment via GitHub Actions */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold flex items-center gap-2">
                <Globe className="w-4 h-4 text-indigo-400" />
                <span>Step 2: Enable GitHub Pages in Repo Settings</span>
              </h3>
              <button
                onClick={() => copyCode(ghActionYml, 2)}
                className="flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 font-medium"
              >
                {copiedIndex === 2 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedIndex === 2 ? 'Copied YAML!' : 'Copy Workflow'}</span>
              </button>
            </div>
            <div className={`p-4 rounded-xl border text-xs space-y-2.5 ${
              darkMode ? 'bg-[#181324] border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                <li>Go to your GitHub repository: <strong>Settings &gt; Pages</strong></li>
                <li>Under <strong>Build and deployment &gt; Source</strong>, select <strong>"GitHub Actions"</strong></li>
                <li>Add the file below as <code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded">.github/workflows/deploy.yml</code> in your repository</li>
                <li>Every time you push or update your portfolio, GitHub will build and publish it automatically in ~45 seconds!</li>
              </ol>
            </div>
          </div>

          {/* Step 3: Base Path in vite.config.ts (if repo subpath) */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Step 3: Vite Base Path Configuration</span>
            </h3>
            <p className="text-xs text-slate-400">
              If your site is hosted at <code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded">https://yourusername.github.io/my-portfolio/</code>, ensure your <code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded">vite.config.ts</code> has <code className="text-purple-300 bg-black/40 px-1 py-0.5 rounded">base: './'</code> so all images and scripts load properly.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className={`p-4 sm:p-5 border-t flex items-center justify-between ${
          darkMode ? 'border-slate-800 bg-[#120f1a]' : 'border-slate-200 bg-slate-50'
        }`}>
          <span className="text-xs text-slate-400">
            Need help deploying? Maryam can assist you anytime.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-colors"
          >
            Got it, thanks!
          </button>
        </div>

      </div>
    </div>
  );
}
