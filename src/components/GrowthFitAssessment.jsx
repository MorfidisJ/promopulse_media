import { useState } from 'react';
import { Calculator, CheckCircle2, AlertCircle, ArrowRight, Video, Share2 } from 'lucide-react';

const VIEW_BANDS = [
  { label: 'Consistent Growth / Foundation', range: [250000, 750000], desc: 'Daily Reel editing, prime-time scheduling, & core profile optimization' },
  { label: 'High-Velocity Virality & Management', range: [750000, 3500000], desc: 'Full multi-platform editing, daily posting, caption copywriting & community management' },
  { label: 'Show Dominance & Omnipresence', range: [3500000, 10000000], desc: 'Full-stack VIP editing, daily syndication, engagement management, & monetization funnels' },
];

export default function GrowthFitAssessment({ onSelectAction }) {
  const [spend, setSpend] = useState(3500);
  const [industry, setIndustry] = useState('podcast');
  const [bottleneck, setBottleneck] = useState('clipping');
  const [timeline, setTimeline] = useState('immediate');

  const band = spend < 2500 ? VIEW_BANDS[0] : spend < 6000 ? VIEW_BANDS[1] : VIEW_BANDS[2];
  const [low, high] = band.range;

  // Real qualification logic: editing budget >= $2000, valid creator niche, and actionable timeline
  const qualifies = spend >= 2000 && industry !== 'other' && timeline !== 'exploratory';

  const formatViews = (val) => {
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M+`;
    return `${(val / 1000).toFixed(0)}k`;
  };

  return (
    <section id="assessment" className="py-16 sm:py-24 bg-obsidian relative border-b border-edge">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            Growth Fit <span className="text-pulse">Assessment</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            We don't publish fake viral guarantees. Answer a few questions to get a realistic 90-day short-form view range grounded in creator channels and podcasts we actively edit and manage.
          </p>
        </div>

        <div className="p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-surface border border-edge w-full max-w-3xl mx-auto shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Left Column: Sliders and Selects */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="spend" className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block">
                    Monthly Editing & Social Management Budget
                  </label>
                  <span className="text-base font-mono font-bold text-pulse">${spend.toLocaleString()}/mo</span>
                </div>
                <input
                  id="spend"
                  type="range"
                  min="1000"
                  max="15000"
                  step="500"
                  value={spend}
                  onChange={(e) => setSpend(Number(e.target.value))}
                  className="w-full accent-pulse bg-edge h-2.5 rounded-lg appearance-none cursor-pointer
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 mt-1">
                  <span>$1,000</span>
                  <span>$7,500</span>
                  <span>$15,000+</span>
                </div>
              </div>

              <div>
                <label htmlFor="industry" className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">
                  Content Type / Creator Niche
                </label>
                <select
                  id="industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-obsidian border border-edge rounded-xl p-3.5 text-white text-sm
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse transition-colors"
                >
                  <option value="podcast">Video Podcast / Long-Form Show</option>
                  <option value="business">Educational / Business Creator</option>
                  <option value="lifestyle">Lifestyle / Entertainment Creator</option>
                  <option value="other">Other / Early Concept</option>
                </select>
              </div>

              <div>
                <label htmlFor="bottleneck" className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">
                  Biggest Current Bottleneck
                </label>
                <select
                  id="bottleneck"
                  value={bottleneck}
                  onChange={(e) => setBottleneck(e.target.value)}
                  className="w-full bg-obsidian border border-edge rounded-xl p-3.5 text-white text-sm
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse transition-colors"
                >
                  <option value="clipping">Long-form isn't getting clipped & repurposed</option>
                  <option value="management">No time to post daily, manage engagement & schedule</option>
                  <option value="retention">Low viewer retention, views & stagnant follower growth</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">
                  Scale Timeline
                </label>
                <select
                  id="timeline"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-obsidian border border-edge rounded-xl p-3.5 text-white text-sm
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse transition-colors"
                >
                  <option value="immediate">Ready to start editing & management within 30 days</option>
                  <option value="quarter">Planning for next quarter</option>
                  <option value="exploratory">Just researching editing agencies</option>
                </select>
              </div>
            </div>

            {/* Right Column: Ranged Output & Qualification Feedback */}
            <div className="flex flex-col justify-between bg-obsidian/80 border border-edge rounded-2xl p-6">
              <div>
                <div className="flex items-center justify-between border-b border-edge/80 pb-4 mb-4">
                  <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                    Expected Band
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-surface text-zinc-300 border border-edge">
                    {band.label}
                  </span>
                </div>

                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                  Realistic 90-day monthly short-form views
                </p>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-white mb-2 tracking-tight">
                  {formatViews(low)} – {formatViews(high)}
                </div>
                <p className="text-xs text-zinc-400 mb-6 font-mono">
                  Projected Follower Lift: +{(low / 25).toLocaleString()} – +{(high / 25).toLocaleString()}/mo
                </p>

                <div className="p-3.5 rounded-xl bg-surface border border-edge/60 text-xs text-zinc-300 mb-6">
                  <p className="font-semibold text-white mb-1">{band.desc}</p>
                  <p className="text-zinc-400 leading-relaxed">
                    Based on typical retention and engagement metrics for {industry.replace('-', ' ')} channels with similar editing velocity.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-edge/80">
                <div className="flex items-start gap-2 text-[11px] text-zinc-500 mb-4">
                  <AlertCircle className="w-4 h-4 text-pulse shrink-0 mt-0.5" />
                  <span>
                    Illustrative only, drawn from view ranges we see across active managed creators. Not a guaranteed algorithm promise.
                  </span>
                </div>

                <button
                  onClick={() => onSelectAction && onSelectAction({ qualifies, spend, industry, bottleneck, timeline, lowReturn: low, highReturn: high })}
                  className={`w-full px-6 py-4 font-semibold rounded-full transition-all flex items-center justify-center gap-2
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse focus-visible:ring-offset-2 focus-visible:ring-offset-surface text-sm group ${
                               qualifies
                                 ? 'bg-pulse text-white hover:bg-pulse/90 shadow-[0_0_20px_rgba(223,177,91,0.3)] hover:-translate-y-0.5'
                                 : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white'
                             }`}
                >
                  {qualifies ? (
                    <>
                      <span>Book Your Strategy Call</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  ) : (
                    <>
                      <span>See What We'd Recommend First</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {/* Bottom qualification status banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-edge/60 text-xs text-zinc-400 gap-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className={`w-4 h-4 ${qualifies ? 'text-emerald-500' : 'text-zinc-500'}`} />
              <span>
                {qualifies
                  ? 'Status: Prime Creator Fit — Direct Editing & Social Management Onboarding Available'
                  : 'Status: Foundation Fit — Repurposing Blueprint Recommended'}
              </span>
            </div>
            <span className="hidden sm:inline font-mono text-zinc-500">PROPRIETARY RANGING MODEL V2.4</span>
          </div>
        </div>
      </div>
    </section>
  );
}
