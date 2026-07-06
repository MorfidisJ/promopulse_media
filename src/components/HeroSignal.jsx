import { ArrowRight, ShieldCheck, TrendingUp, Zap, Video, Share2 } from 'lucide-react';

export default function HeroSignal({ onOpenAssessment }) {
  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden bg-obsidian border-b border-edge">
      {/* Subtle ambient glow: hidden on mobile to protect frame rate on mid-range devices */}
      <div className="hidden md:block absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-pulse/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Signature element: a live signal trace, not a decorative gradient blob.
          Reads as instrumentation — echoes the "Pulse" name and the
          data-driven positioning, instead of generic ambient mood lighting. */}
      <svg
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-48 opacity-40 motion-reduce:opacity-20 pointer-events-none"
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* Secondary faded trace for depth */}
        <path
          d="M0,80 L180,80 L210,40 L240,120 L270,80 L600,80 L630,30 L660,130 L690,80 L1200,80"
          fill="none"
          stroke="#27272A"
          strokeWidth="1.5"
        />
        {/* Active animated pulse signal */}
        <path
          d="M0,80 L200,80 L230,20 L260,140 L290,80 L1200,80"
          fill="none"
          stroke="#DFB15B"
          strokeWidth="2.5"
          strokeDasharray="240"
          className="motion-safe:animate-[signal_4s_linear_infinite]"
        />
      </svg>

      <div className="relative z-10 text-center px-5 sm:px-6 max-w-4xl mx-auto py-10 sm:py-16">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black text-white tracking-tight leading-[1.08] mb-6 sm:mb-8">
          We Engineer <span className="text-pulse inline-block relative">
            Attention<span className="text-white font-mono">.</span>
          </span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-8 sm:mb-10 max-w-2xl mx-auto font-normal leading-relaxed px-1">
          PromoPulse Media turns long-form podcasts and videos into viral Instagram Reels, Shorts, and TikToks — paired with full-stack social media management to grow and monetize your channels on autopilot.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16">
          <button
            onClick={() => onOpenAssessment()}
            className="w-full sm:w-auto px-8 py-4 bg-pulse text-white font-semibold rounded-full transition-all
                       hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(223,177,91,0.5)] flex items-center justify-center gap-2
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse
                       focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian text-base group"
          >
            <span>Get a Growth Assessment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="#process"
            className="w-full sm:w-auto px-8 py-4 bg-surface hover:bg-edge text-white font-semibold rounded-full border border-edge hover:border-zinc-600 transition-all
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian text-base text-center"
          >
            Explore Methodology
          </a>
        </div>

        {/* Live Data Ticker Bar - strictly monospace for figures */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-edge/60 max-w-3xl mx-auto">
          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-surface/50 border border-edge/50">
            <TrendingUp className="w-5 h-5 text-pulse shrink-0" />
            <div className="text-left">
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Avg Reel Retention</div>
              <div className="font-mono text-lg font-bold text-white">78.4% <span className="text-xs text-emerald-400 font-normal">+42% vs avg</span></div>
            </div>
          </div>
          
          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-surface/50 border border-edge/50">
            <Share2 className="w-5 h-5 text-pulse shrink-0" />
            <div className="text-left">
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Daily Engagement Lift</div>
              <div className="font-mono text-lg font-bold text-white">+310% <span className="text-xs text-zinc-400 font-normal">managed community</span></div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-xl bg-surface/50 border border-edge/50">
            <Video className="w-5 h-5 text-pulse shrink-0" />
            <div className="text-left">
              <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Short Views Managed</div>
              <div className="font-mono text-lg font-bold text-white">85.4M+ <span className="text-xs text-zinc-400 font-normal">annually</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
