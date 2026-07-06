import { ArrowUpRight, Shield, Terminal } from 'lucide-react';
import StudioMicLogo from './StudioMicLogo';

// Clean inline SVG social icons
const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer({ onOpenAssessment }) {
  return (
    <footer className="bg-obsidian text-zinc-400 relative overflow-hidden border-t border-edge">
      {/* Signature move: animated signal/waveform trace used as a quiet section divider */}
      <div className="w-full py-8 border-b border-edge/60 flex items-center justify-center opacity-30 motion-reduce:opacity-10 overflow-hidden pointer-events-none">
        <svg className="w-full h-12" viewBox="0 0 1200 48" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0,24 L350,24 L370,8 L390,40 L410,24 L750,24 L770,12 L790,36 L810,24 L1200,24"
            fill="none"
            stroke="#DFB15B"
            strokeWidth="1.5"
            strokeDasharray="180"
            className="motion-safe:animate-[signal_8s_linear_infinite]"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 mb-10 sm:mb-16">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 text-white font-display font-bold text-xl tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse rounded-lg"
            >
              <div className="w-8 h-8 rounded-lg bg-pulse border border-[#E5C158] flex items-center justify-center text-obsidian shadow-[0_0_15px_rgba(223,177,91,0.3)]">
                <StudioMicLogo className="w-5 h-5" />
              </div>
              <span>Promo<span className="text-pulse font-mono">Pulse</span> Media</span>
            </a>
            
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Viral short-form content editing and full-stack social media management for podcasts and video creators who demand high-retention Reels, daily autopilot growth, and predictable reach.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Architecture
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#assessment" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse rounded">
                  Growth Assessment
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse rounded">
                  Sequential Funnel
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse rounded">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#results" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse rounded">
                  Verified Proof
                </a>
              </li>
              <li>
                <a href="#feed" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse rounded">
                  Graph API Feed
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Trust */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Compliance
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse rounded">
                  Privacy Protocol
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse rounded">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse rounded">
                  Footage & NDA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse rounded">
                  Security Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Direct CTA Box */}
          <div className="md:col-span-3 space-y-4 bg-surface/50 border border-edge rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold text-white mb-2">
                Ready to dominate social media?
              </h4>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Skip generic editing agencies and review your 90-day editing & management roadmap.
              </p>
            </div>
            <button
              onClick={() => onOpenAssessment()}
              className="w-full py-2.5 bg-pulse text-white text-xs font-mono font-bold rounded-full hover:bg-pulse/90 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse flex items-center justify-center gap-1.5"
            >
              <span>ASSESS YOUR FIT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 sm:pt-8 border-t border-edge/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Shield className="w-4 h-4 text-pulse shrink-0" />
            <span>&copy; {new Date().getFullYear()} PROMOPULSE MEDIA INC. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/promopulse_media/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-edge hover:border-pulse text-zinc-300 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
            >
              <InstagramIcon className="w-4 h-4 text-pulse" />
              <span className="font-semibold text-xs">@promopulse_media</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
