import { TrendingUp, ArrowUpRight, Award, Video, BarChart2 } from 'lucide-react';

const caseStudies = [
  {
    client: 'THE FOUNDERS SYNAPSE PODCAST',
    industry: 'B2B Tech & Startup Podcast // Weekly Show',
    headline: 'Turned 2-hour technical interviews into a daily viral Reel machine with complete hands-off social media management, scaling retention to 82%.',
    description: 'We engineered a high-velocity clipping pipeline and took over daily channel publishing, extracting high-intent founder takes and managing community comment engagement on autopilot.',
    stats: [
      { label: 'Avg Reel Views', value: '340,000', change: '+420% vs prior editor' },
      { label: 'New IG Followers', value: '+64,500', change: 'Within first 90 days' },
      { label: 'Podcast Downloads', value: '+185%', change: 'Spotify & Apple lift' },
    ],
    tag: 'EDITING & SMM SCALE',
  },
  {
    client: 'ELENA ROSTOVA // WEALTH CREATOR',
    industry: 'Educational Video Creator // Investing & Finance',
    headline: 'Took over daily Instagram & TikTok channel management, pairing visual pattern interrupts with daily community engagement and lead magnet CTAs.',
    description: 'Replaced static talking-head footage with multi-angle zoom choreography, managed daily publishing schedules, and turned comment discussions into newsletter leads.',
    stats: [
      { label: '3-Sec Hook Rate', value: '74.2%', change: 'Industry avg is 28%' },
      { label: 'Monthly Views', value: '4.8M', change: '+310% organic reach' },
      { label: 'Newsletter Leads', value: '+12,400', change: 'Directly from Reels' },
    ],
    tag: 'FULL MANAGEMENT',
  },
  {
    client: 'MINDSET & MASTERY WITH DR. VANCE',
    industry: 'Health & Biohacking Show // Multi-Platform Syndication',
    headline: 'Managed multi-platform syndication across IG, YouTube, and TikTok, handling editing, daily prime-time posting, and subscriber conversion.',
    description: 'Deployed our full syndication matrix across Instagram, TikTok, and YouTube Shorts, pairing scientific concepts with hyper-engaging visual B-roll and automated comment replies.',
    stats: [
      { label: 'Total Short Views', value: '14.2M', change: 'Across IG, YT & TikTok' },
      { label: 'Avg Watch Time', value: '104.5%', change: 'Loop completion rate' },
      { label: 'Course Revenue', value: '$180k', change: 'Attributed to short clips' },
    ],
    tag: 'SHOW DOMINANCE',
  },
];

export default function CaseStudies({ onOpenAssessment }) {
  return (
    <section id="results" className="py-16 sm:py-24 bg-obsidian relative border-b border-edge">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Proof Over <span className="text-pulse">Promises</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm md:text-base">
            We don't deal in vanity editing or chaotic social media schedules. Here are verified retention rates and audience growth figures from channels we actively edit and manage.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-5 sm:space-y-8">
          {caseStudies.map((cs, idx) => (
            <div
              key={cs.client}
              className="rounded-2xl sm:rounded-3xl bg-surface border border-edge p-5 sm:p-8 md:p-10 transition-all duration-300 hover:border-zinc-600 hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)] group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Info Column */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-obsidian border border-edge text-pulse">
                      {cs.tag}
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400">
                      {cs.industry}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white group-hover:text-pulse transition-colors">
                    {cs.client}
                  </h3>

                  <p className="text-base text-zinc-300 font-medium leading-snug">
                    "{cs.headline}"
                  </p>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {cs.description}
                  </p>
                </div>

                {/* Right Stats Column - Strict Monospace Typography */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {cs.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-5 rounded-2xl bg-obsidian/90 border border-edge flex flex-col justify-between"
                    >
                      <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-2">
                        {stat.label}
                      </div>
                      <div className="text-2xl sm:text-3xl font-black font-mono text-white mb-1 tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-[11px] font-mono text-emerald-400">
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 sm:mt-8 pt-4 sm:pt-6 border-t border-edge/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 text-xs text-zinc-400">
                <span className="font-mono">VERIFIED BY PROMOPULSE SMM ENGINE // LIVE MANAGED CHANNEL</span>
                <button
                  onClick={() => onOpenAssessment()}
                  className="inline-flex items-center gap-1.5 font-mono font-bold text-white hover:text-pulse transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse rounded"
                >
                  <span>SEE IF YOUR CHANNEL QUALIFIES</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
