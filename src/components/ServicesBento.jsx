import { motion } from 'framer-motion';
import { Compass, Video, Share2, Repeat, ArrowUpRight, CheckCircle } from 'lucide-react';

const services = [
  {
    step: '01',
    title: 'Hook Engineering & Content Strategy',
    subtitle: 'First, we engineer the visual hook.',
    description: 'Before editing or posting, we audit your channels and extract the highest-retention psychological hooks and talking points from your long-form podcasts and videos that stop the scroll.',
    icon: Compass,
    features: ['Psychological Hook Extraction', 'Viral Pattern Interrupt Design', 'Content Calendar Architecture', 'Audience Retention Profiling'],
    colSpan: 'md:col-span-7',
    bgAccent: 'from-pulse/10 via-transparent to-transparent',
  },
  {
    step: '02',
    title: 'Dynamic Reel & Short Editing',
    subtitle: 'Then, we craft high-velocity cuts.',
    description: 'Fast-paced, high-retention video editing tailored for Instagram Reels, YouTube Shorts, and TikTok. Dynamic typography, sound design, custom B-roll, and visual zoom choreography.',
    icon: Video,
    features: ['Dynamic Animated Subtitles', 'Immersion Sound Design & SFX', 'Custom 3D & Visual B-roll', 'Multi-Camera Angle Choreography'],
    colSpan: 'md:col-span-5',
    bgAccent: 'from-zinc-800/40 via-transparent to-transparent',
  },
  {
    step: '03',
    title: 'Full Social Media Management',
    subtitle: 'Next, we manage daily publishing.',
    description: 'We take the keys and manage your publishing 100% on autopilot. Algorithm-optimized captions, hashtag matrices, daily prime-time scheduling, and active community comment engagement.',
    icon: Share2,
    features: ['Autopilot Daily Scheduling', 'Algorithm-Optimized Captions', 'Community Comment Engagement', 'Cross-Platform Syndication'],
    colSpan: 'md:col-span-5',
    bgAccent: 'from-zinc-800/40 via-transparent to-transparent',
  },
  {
    step: '04',
    title: 'Audience Monetization & Scale',
    subtitle: 'Finally, we convert views to revenue.',
    description: 'We do not just get you vanity views; we turn daily social media attention into loyal podcast subscribers, email newsletter opt-ins, community members, and high-ticket revenue.',
    icon: Repeat,
    features: ['Podcast Subscriber Conversion', 'Lead Magnet & Email Opt-ins', 'Community Growth Systems', 'Sponsorship & LTV Expansion'],
    colSpan: 'md:col-span-7',
    bgAccent: 'from-pulse/10 via-transparent to-transparent',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesBento({ onOpenAssessment }) {
  return (
    <section id="services" className="py-16 sm:py-24 bg-obsidian relative border-b border-edge overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
              Engineered <span className="text-pulse">Growth Pipeline</span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm md:text-base">
            We commit to a genuine sequence. Each phase builds upon the previous, turning 2-hour podcasts into a compounding daily short-form revenue engine managed on autopilot.
          </p>
        </div>

        {/* Bento Grid with Framer Motion Staggered in-view animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.step}
                variants={cardVariants}
                className={`group relative rounded-2xl sm:rounded-3xl bg-surface border border-edge p-5 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-zinc-600 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] focus-within:ring-2 focus-within:ring-pulse ${service.colSpan}`}
              >
                {/* Background gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgAccent} opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-2xl font-black text-pulse bg-obsidian border border-edge px-3 py-1 rounded-xl">
                        {service.step}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                        {service.subtitle}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-obsidian border border-edge flex items-center justify-center text-zinc-400 group-hover:text-pulse group-hover:border-pulse/40 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 relative z-10 group-hover:text-pulse transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-8 relative z-10">
                    {service.description}
                  </p>
                </div>

                {/* Features List & CTA */}
                <div className="relative z-10 pt-6 border-t border-edge/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400 font-medium">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-pulse shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onOpenAssessment()}
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white hover:text-pulse transition-colors px-4 py-2 rounded-lg bg-obsidian border border-edge hover:border-pulse/50 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
                  >
                    <span>Assess Fit</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-surface/50 border border-edge flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-pulse motion-safe:animate-pulse" />
            <span className="text-sm text-zinc-300">
              Need a dedicated team editing 30+ viral short-form clips and managing your daily publishing across all channels?
            </span>
          </div>
          <a
            href="#assessment"
            className="px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-obsidian text-xs font-mono font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
          >
            REQUEST EDITING & SMM REVIEW
          </a>
        </div>
      </div>
    </section>
  );
}
