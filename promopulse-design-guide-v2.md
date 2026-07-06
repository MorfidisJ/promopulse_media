# PromoPulse Media — Design & Implementation Guide (Revised)

This is a revision of the original guide. The strategic premise — a dark, precise, data-forward site that proves competence instead of claiming it — is sound and kept intact. Everything below fixes four categories of problem in the original: **the look was the generic default it claimed to avoid, two technical recommendations are out of date or broken, the flagship interactive tool carried real credibility risk, and several stated goals (lead qualification, accessibility, performance) were never actually built.**

## Summary of changes

| Area | Original | Problem | Revised |
| --- | --- | --- | --- |
| Hero background | Two blurred orange/purple orbs | This is the single most common AI-generated SaaS look right now — near-black + soft gradient blobs. Appears regardless of subject. | A signature "signal trace" motif tied literally to the brand name and to the "data-backed" positioning |
| Service labels | `01 / 02 / 03 / 04` | Decorative numbering on content that isn't a real sequence | Either commit to a genuine funnel order, or drop the numbers |
| Instagram feed | Instagram Basic Display API | **Shut down by Meta on Dec 4, 2024. It no longer works.** | Instagram API via Instagram Login (Graph API), Professional account |
| Tailwind setup | `tailwind.config.js` with `theme.extend` | Tailwind v4 (current since Jan 2025) replaced this with CSS-first `@theme` config | `@theme` block in the main CSS file |
| ROI tool | Raw `spend × ROAS` slider, single dollar output | Reads as an implied guaranteed return; doesn't qualify leads despite that being a stated goal | A "Growth Fit Assessment" — ranged, disclaimed, and branches the CTA by lead quality |
| Motion & focus | Animations always on, hover-only states | No `prefers-reduced-motion` handling, no visible keyboard focus anywhere | Reduced-motion variants and `focus-visible` on every interactive element throughout |

---

## 1. Strategic Vision: Authority Through Design

An SMMA operates in a saturated, low-trust market. Prospective clients are fatigued by generic claims of "increasing ROI." The site needs to bypass that skepticism — but it can only do that if the execution is actually distinctive. A site that *looks* like every other dark-mode agency template undercuts the "we're not like the others" message before a visitor reads a word.

* **The atmosphere:** a quiet, climate-controlled instrument room — frictionless, precise, focused. Dark is the right call here; the brief itself asks for it, and it fits a data/performance positioning. Keep it.
* **The trap to avoid:** dark background + blurred gradient orbs + bento grid + glassmorphism nav is not a distinctive choice anymore, it's the default one. If you searched "dark SaaS landing page 2025" you'd get this exact combination hundreds of times. The fix isn't to abandon dark mode — it's to earn the atmosphere with one real signature element instead of borrowing the generic decorative toolkit.
* **The signature move:** an animated signal/waveform trace — literally a "pulse" — used as the hero's spatial anchor and again as a quiet section divider. It's cheaper to render than layered blur, it's on-brand by name, and it reads as instrumentation rather than mood lighting.
* **The core directive stays:** show, don't tell. Interactive tools that produce a real, personalized read on the visitor's situation — not decoration, not a static claim.

---

## 2. Design System

### Color tokens

Deep zinc/obsidian tones instead of pure black, same reasoning as before — `#000000` flattens depth and reads cheap; a near-black with a hint of warmth or blue holds shadow detail.

| Token | Value | Purpose |
| --- | --- | --- |
| `obsidian` | `#09090B` | Base background |
| `surface` | `#18181B` | Cards, interactive modules |
| `edge` | `#27272A` | 1px structural borders |
| `pulse` | `#FF4500` (swap to the client's actual brand color) | The one accent. Used for CTAs, active states, and the signal trace. Nothing else competes with it. |

**Change from the original:** drop the secondary "Quantum Purple" ambient-glow accent. Two competing blurred-glow colors is exactly the decorative pattern to avoid — one disciplined accent color reads more expensive than two soft ones fighting for attention.

**Text contrast, checked, not assumed:** `zinc-300` (`#D4D4D8`) on `#09090B` gives comfortable body-text contrast; reserve `zinc-500` for large decorative labels only, not for anything a visitor needs to actually read. Run any final palette through a contrast checker before shipping — don't eyeball it.

### Typography

The original paired Inter (body) with "Cabinet Grotesk" (display). Inter as a body face is a fine, neutral workhorse — no note needed there. But "Cabinet Grotesk," "General Sans," and "Switzer" have become their own cliché: the default display-face trio every AI-assisted Webflow/agency build reaches for. If distinctiveness is the goal, swap the display face for something with more friction — a face with an unusual detail (a cut terminal, an odd ink-trap, a narrower default tracking) that a visitor would actually notice. A few real options: **PP Neue Montreal**, **Neue Machina**, or a licensed face the client already owns.

Add a third role the original was missing: a **monospace/data face** (e.g. **JetBrains Mono** or **IBM Plex Mono**) reserved strictly for numbers — the ROI figures, the budget slider value, stats in case studies. A dedicated numeric face is a small, cheap signal that "data" isn't just a marketing word here; it's an actual typographic decision.

### Tailwind v4 setup (corrected)

Tailwind v4 (shipped January 2025) replaced the JS config file with CSS-first configuration. `tailwind.config.js` with `theme.extend.colors` is the old v3 pattern — if you paste that into a fresh v4 project, it silently does nothing, because v4 no longer reads it by default.

```css
/* src/index.css */
@import "tailwindcss";

@theme {
  --color-obsidian: #09090B;
  --color-surface: #18181B;
  --color-edge: #27272A;
  --color-pulse: #FF4500;

  --font-display: "PP Neue Montreal", "Inter", sans-serif;
  --font-sans: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}

/* Custom keyframes for the signal trace, gated behind reduced-motion below */
@keyframes signal {
  0%   { stroke-dashoffset: 240; }
  100% { stroke-dashoffset: 0; }
}
```

With the Vite plugin (`@tailwindcss/vite`), that's the entire setup — no content array, no plugins array, no separate config file to keep in sync. Verify the exact `@theme` namespace syntax against the current Tailwind docs before shipping, since this moves fast.

### Motion & accessibility floor

Two rules that apply to every animated element in this guide, not called out at all in the original:

1. **Respect `prefers-reduced-motion`.** Wrap continuous/ambient animation in Tailwind's `motion-safe:` / `motion-reduce:` variants so anyone with the OS setting enabled gets a static (or near-static) version. This is a one-line fix per element and it's a real accessibility requirement, not a nicety.
2. **Every interactive element needs a visible keyboard focus state.** The original showed `hover:` states only. Add `focus-visible:ring-2 focus-visible:ring-pulse` (or equivalent) to every button, input, and link.

---

## 3. Structural Mechanics & Custom SMMA Features

### Kinetic hero, revised

Same scale and confidence as the original — massive centered typography, dark field — but the background element is now the brand's signature signal trace instead of two blurred color blobs.

```jsx
// src/components/HeroSignal.jsx
export default function HeroSignal() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Signature element: a live signal trace, not a decorative gradient blob.
          Reads as instrumentation — echoes the "Pulse" name and the
          data-driven positioning, instead of generic ambient mood lighting. */}
      <svg
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-40 opacity-40 motion-reduce:opacity-20 pointer-events-none"
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,80 L200,80 L230,20 L260,140 L290,80 L1200,80"
          fill="none"
          stroke="#FF4500"
          strokeWidth="2"
          strokeDasharray="240"
          className="motion-safe:animate-[signal_6s_linear_infinite]"
        />
      </svg>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight mb-6">
          We Engineer <span className="text-pulse">Attention</span>.
        </h1>
        <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
          PromoPulse Media turns audience traffic into quantifiable revenue —
          performance marketing for brands that are ready to scale.
        </p>
        <button
          className="px-8 py-4 bg-pulse text-white font-semibold rounded-full transition-all
                     hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,69,0,0.4)]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse
                     focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
        >
          Get a Growth Assessment
        </button>
      </div>
    </section>
  );
}
```

On mobile, disable or drastically simplify any remaining blur/glow elements elsewhere on the page (`hidden md:block`, or a much smaller blur radius) — a 120–160px blur filter is expensive to paint and will visibly cost frame rate on mid-range phones, which is exactly the audience an SMMA can't afford to lose to a janky scroll.

### Growth Fit Assessment (replaces the ROI calculator)

The original ROI calculator was `spend × ROAS = dollar figure`, presented as a firm "Net Revenue Growth" number. Two problems: first, a marketing agency publishing an uncapped dollar projection off a slider drifts close to an implied earnings guarantee — genuinely risky territory, and the kind of claim that erodes trust the moment a sophisticated prospect notices it's one multiplication. Second, the brief explicitly wants the site to **"aggressively qualify inbound leads,"** and a calculator alone doesn't qualify anyone — it just calculates.

This version does both jobs: gives a *ranged*, disclaimed projection grounded in bands instead of a raw multiplication, and uses the inputs to route the visitor toward the right next step.

```jsx
// src/components/GrowthFitAssessment.jsx
import { useState } from 'react';

const ROAS_BANDS = [
  { label: 'Early / Testing', range: [1.5, 2.5] },
  { label: 'Solid Performer', range: [2.5, 4.5] },
  { label: 'Top-Tier', range: [4.5, 7] },
];

export default function GrowthFitAssessment() {
  const [spend, setSpend] = useState(5000);
  const [industry, setIndustry] = useState('ecommerce');
  const [bottleneck, setBottleneck] = useState('traffic');

  const band = spend < 3000 ? ROAS_BANDS[0] : spend < 15000 ? ROAS_BANDS[1] : ROAS_BANDS[2];
  const [low, high] = band.range;
  const lowReturn = Math.round(spend * low);
  const highReturn = Math.round(spend * high);

  // Placeholder scoring — replace with real qualification logic
  // (budget threshold, industry fit, timeline, etc.)
  const qualifies = spend >= 3000;

  return (
    <div className="p-8 rounded-3xl bg-surface border border-edge w-full max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-2">Growth Fit Assessment</h3>
      <p className="text-zinc-300 text-sm mb-8">
        A few questions, then a realistic range based on accounts we've actually run — not a guarantee.
      </p>

      <div className="space-y-6 mb-8">
        <div>
          <label htmlFor="spend" className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">
            Monthly Ad Budget
          </label>
          <input
            id="spend" type="range" min="1000" max="50000" step="500" value={spend}
            onChange={(e) => setSpend(Number(e.target.value))}
            className="w-full accent-pulse bg-edge h-2 rounded-lg appearance-none cursor-pointer
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
          />
          <span className="text-sm font-mono text-white">${spend.toLocaleString()}/mo</span>
        </div>

        <div>
          <label htmlFor="industry" className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">
            Industry
          </label>
          <select
            id="industry" value={industry} onChange={(e) => setIndustry(e.target.value)}
            className="w-full bg-obsidian border border-edge rounded-lg p-3 text-white
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
          >
            <option value="ecommerce">E-commerce</option>
            <option value="local-service">Local Service Business</option>
            <option value="saas">SaaS / Digital Product</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="bottleneck" className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">
            Biggest Current Bottleneck
          </label>
          <select
            id="bottleneck" value={bottleneck} onChange={(e) => setBottleneck(e.target.value)}
            className="w-full bg-obsidian border border-edge rounded-lg p-3 text-white
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
          >
            <option value="traffic">Not enough traffic</option>
            <option value="conversion">Traffic isn't converting</option>
            <option value="retention">One-time buyers, no repeat revenue</option>
          </select>
        </div>
      </div>

      <div className="pt-6 border-t border-edge">
        <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
          Realistic 90-day range, {band.label.toLowerCase()} accounts
        </p>
        <p className="text-3xl font-black font-mono text-white mb-2">
          ${lowReturn.toLocaleString()} – ${highReturn.toLocaleString()}
        </p>
        <p className="text-xs text-zinc-500 mb-6">
          Illustrative only, drawn from ranges we've seen at similar budgets. Not a guarantee of results.
        </p>

        <button
          className="w-full px-6 py-3 bg-pulse text-white font-semibold rounded-full transition-all
                     hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2
                     focus-visible:ring-pulse focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
        >
          {qualifies ? 'Book Your Strategy Call' : "See What We'd Recommend First"}
        </button>
      </div>
    </div>
  );
}
```

Swap the placeholder `qualifies` logic for whatever actually reflects a good-fit client (minimum budget, industry match, timeline) — the point is that the branching itself is the qualification mechanism, not a separate step bolted on later.

### Services Bento Grid — numbering, reconsidered

The original used `01 / 02 / 03 / 04` as decorative eyebrow labels on four services (Acquisition, Brand Identity, Conversion Pipelines, Content Lifecycle). Numbering implies order, and order implies meaning — but nothing in the copy told the reader why Acquisition is "01" and Content is "04." Two honest fixes, pick one:

- **Commit to the sequence.** If the real client engagement genuinely runs foundation → traffic → conversion → retention, reorder the cards to match that logic (Identity first, since brand foundation typically precedes paid acquisition) and let the copy say so explicitly ("first we…", "then…"). Now the numbers carry real information.
- **Drop the numbers.** If the four services are actually delivered in parallel with no fixed order, use a plain category label instead (an icon, or just the eyebrow word "Acquisition" with no digit). Don't imply a sequence that doesn't exist.

The grid layout, card sizing, and hover treatment from the original are otherwise fine and don't need to change — this is a copy/labeling fix, not a layout one.

### A section the original never delivered: Process

The brief promises the site will "aggressively qualify inbound leads" and "demonstrate competence," but nothing in the original structural plan actually walks a visitor through what happens after they submit an inquiry. A short, real 3–4 step "how engagement works" section (Discovery call → Audit → Proposal → Kickoff, or whatever the agency's actual process is) does more trust-building work than another glowing card, and it's the one place numbered steps are unambiguously earned — this genuinely is a sequence.

---

## 4. Advanced Implementation Notes

1. **Lenis smooth scrolling — with an opt-out.** Keep the easing curve for the polish it adds, but check `prefers-reduced-motion` before initializing it, and don't let it swallow native keyboard scroll (Page Down, spacebar, arrow keys) or screen-reader scroll behavior. A smooth-scroll library that silently breaks keyboard navigation is a common, avoidable accessibility regression.

2. **Framer Motion, staggered.** Same guidance as the original — trigger on `whileInView`, not on page load, and stagger multiple cards slightly. Add: gate the animation itself behind `motion-safe` so `prefers-reduced-motion` users get the content immediately rather than waiting on a fade-in.

3. **The "live" agency feed — corrected.** The original recommends the Instagram Basic Display API. **Meta shut this down permanently on December 4, 2024; it no longer returns data under any circumstances.** The current path:
   - Convert the agency's Instagram account to a Professional account (Creator or Business — free, done in Instagram's own settings).
   - Use **Instagram API with Instagram Login** (the direct successor for accounts not connected to a Facebook Page) or the **Instagram Graph API** if the account is already tied to a Facebook Page.
   - Fetch and cache posts at build time or on a server-side schedule (e.g. revalidate every 30–60 minutes) rather than calling the API client-side on every page load — this respects rate limits and avoids exposing the access token in the browser.
   - Confirm token refresh is actually running on a schedule; long-lived tokens still expire and need periodic renewal.

4. **Glassmorphism header, with contrast checked.** `bg-obsidian/60` + `backdrop-blur-xl` still works well for a fixed nav. Just confirm nav link text keeps sufficient contrast against whatever happens to scroll behind it (the signal trace, images, video), and give every nav link and the mobile menu toggle a visible focus state — this is the first thing a keyboard user touches on the page.

5. **Mobile navigation** — not addressed in the original at all. Specify it explicitly: a standard slide-in or full-screen overlay menu, trapping focus while open, closable with `Escape`, and returning focus to the toggle button on close.

---

## 5. Content & Copy

Words are part of the design, not decoration on top of it — every microcopy choice here should help the visitor understand what happens next, not just sound impressive.

- Write from the visitor's side of the screen: "See your growth range," not "Leverage our proprietary methodology."
- Buttons say exactly what they do, and keep the same label through the flow — if the CTA says "Book Your Strategy Call," the confirmation screen should reference booking a call, not switch to "Thank you for your interest."
- Avoid the temptation to let interactive tools overstate certainty (see the Growth Fit Assessment disclaimer above) — confident copy and honest copy aren't in tension here; specificity reads as more credible than a bigger number would.

---

## 6. Quality Floor Checklist

Before calling this shipped:

- [ ] Every animated/ambient element has a `motion-reduce` fallback
- [ ] Every button, input, select, and link has a visible `focus-visible` state
- [ ] Body text meets WCAG AA contrast against `obsidian`/`surface` (checked with a tool, not by eye)
- [ ] No more than one active blurred ambient element on screen at a time; heavy blur hidden or reduced on mobile
- [ ] Instagram feed runs on the current Graph API path with server-side caching, not client-side Basic Display calls
- [ ] Tailwind config uses the current `@theme` CSS-first setup, not a `tailwind.config.js` left over from v3
- [ ] Growth Fit Assessment output includes a disclaimer and routes to different CTAs based on lead quality
- [ ] Mobile nav traps focus, closes on `Escape`, and returns focus to the toggle on close
- [ ] One `<h1>` per page, semantic `<header>`/`<main>`/`<nav>`, meta description and Open Graph tags set
