import { PhoneCall, FileSearch, Film, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Creative Diagnostic & Hook Audit',
    timeframe: 'Day 1 // 30 Minutes',
    desc: 'We analyze your current Reels/Shorts, inspect audience drop-off graphs, and evaluate your long-form podcast catalog. If we cannot increase your average watch time by at least 25%, we tell you immediately.',
    icon: PhoneCall,
    deliverable: 'Audience Retention & Hook Feasibility Audit',
  },
  {
    number: '02',
    title: 'Asset Pipeline & Brand Setup',
    timeframe: 'Days 2–3 // Workflow Setup',
    desc: 'Our editing team connects to your raw podcast video drives, builds custom animated subtitle templates, and establishes your unique brand sound design and color profile.',
    icon: FileSearch,
    deliverable: 'Custom Visual Brand Bible & Motion Preset Kit',
  },
  {
    number: '03',
    title: 'First Batch & Hook Split-Testing',
    timeframe: 'Day 5 // First Batch Delivery',
    desc: 'We deliver your first batch of viral short-form clips featuring 3 distinct hook variations per episode, engineered to test which visual pattern interrupts trigger algorithm velocity.',
    icon: Film,
    deliverable: 'Initial Batch of 10–15 Viral Shorts with Hook A/B Variants',
  },
  {
    number: '04',
    title: 'Daily Management & Autopilot Syndication',
    timeframe: 'Day 7+ // Continuous Pipeline',
    desc: 'We take over daily publishing across Instagram, TikTok, LinkedIn, and YouTube Shorts, manage community comment engagement, and give your team 24/7 access to our growth dashboard.',
    icon: Rocket,
    deliverable: 'Daily Published Shorts, Community SMM & Growth Dashboard',
  },
];

export default function ProcessSection({ onOpenAssessment }) {
  return (
    <section id="process" className="py-16 sm:py-24 bg-obsidian relative border-b border-edge">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
            How Editing & SMM <span className="text-pulse">Works</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg px-1">
            We don't do mystery editing timelines or chaotic Google Drive folders. Here is our exact 4-step sequence from raw footage to daily autopilot social media management.
          </p>
        </div>

        {/* 4-Step Grid with Connecting Line */}
        <div className="relative">
          {/* Horizontal connecting signal line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-edge -translate-y-12 z-0">
            <div className="w-full h-full bg-gradient-to-r from-pulse/0 via-pulse/80 to-pulse/0 motion-safe:animate-[pulse_3s_ease-in-out_infinite]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.number}
                  className="rounded-2xl sm:rounded-3xl bg-surface border border-edge p-5 sm:p-8 flex flex-col justify-between relative group hover:border-pulse/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1"
                >
                  <div>
                    {/* Number & Icon header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-3xl font-black text-pulse bg-obsidian border border-edge w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner group-hover:bg-pulse group-hover:text-white transition-colors">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-obsidian border border-edge flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider mb-2">
                      {step.timeframe}
                    </div>

                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-pulse transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-edge/80 text-xs font-mono">
                    <span className="text-zinc-500 block mb-1">KEY DELIVERABLE:</span>
                    <span className="text-white font-medium bg-obsidian/80 border border-edge/60 px-2.5 py-1.5 rounded-lg block text-[11px] sm:text-xs leading-snug">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenAssessment()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-pulse text-white font-semibold rounded-full shadow-[0_0_20px_rgba(223,177,91,0.3)] hover:shadow-[0_0_30px_rgba(223,177,91,0.5)] hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
          >
            <span>Start Step 01: Get Your Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
