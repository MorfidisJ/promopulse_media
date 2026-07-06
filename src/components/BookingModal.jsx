import { useState, useEffect, useRef } from 'react';
import { X, Calendar, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import StudioMicLogo from './StudioMicLogo';

export default function BookingModal({ isOpen, onClose, assessmentData }) {
  const [step, setStep] = useState('form'); // 'form' or 'confirmed'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    url: '',
    notes: '',
  });
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll(
          'button:not([disabled]), input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Auto-focus first input when modal opens
    setTimeout(() => {
      const firstInput = modalRef.current?.querySelector('input, button');
      firstInput?.focus();
    }, 50);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isQualified = assessmentData ? assessmentData.qualifies : true;
  const ctaLabel = isQualified ? 'Book Your Strategy Call' : "See What We'd Recommend First";

  const formatViews = (val) => {
    if (!val) return '500k+';
    if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M+`;
    return `${(val / 1000).toFixed(0)}k`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('confirmed');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Strategy Booking Modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/85 backdrop-blur-md motion-safe:animate-fadeIn"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl bg-surface border border-edge p-5 sm:p-6 md:p-10 shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-edge mb-6">
          <div className="flex items-center gap-2.5 text-white font-display font-bold text-base sm:text-lg">
            <div className="w-7 h-7 rounded-lg bg-pulse border border-[#E5C158] flex items-center justify-center text-obsidian shadow-[0_0_15px_rgba(223,177,91,0.3)] shrink-0">
              <StudioMicLogo className="w-4 h-4" />
            </div>
            <span>{isQualified ? 'Direct Editing & SMM Onboarding' : 'Repurposing Blueprint Recommendation'}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-zinc-400 hover:text-white bg-obsidian border border-edge rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Qualification context pill */}
            {assessmentData && (
              <div className="p-3.5 sm:p-4 rounded-2xl bg-obsidian border border-edge/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 text-xs font-mono">
                <div>
                  <span className="text-zinc-500 block">MONTHLY BUDGET:</span>
                  <span className="text-white font-bold text-sm">${assessmentData.spend.toLocaleString()}/mo</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">PROJECTED MONTHLY VIEWS:</span>
                  <span className="text-pulse font-bold text-sm">{formatViews(assessmentData.lowReturn)} – {formatViews(assessmentData.highReturn)}</span>
                </div>
                <div className="bg-surface px-3 py-1 rounded border border-edge text-zinc-300 uppercase">
                  {assessmentData.industry.replace('-', ' ')}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Alex Mercer"
                  className="w-full bg-obsidian border border-edge rounded-xl p-3.5 text-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                  Creator / Work Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@podcastshow.com"
                  className="w-full bg-obsidian border border-edge rounded-xl p-3.5 text-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                  Podcast / Channel Name *
                </label>
                <input
                  id="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="The Founders Synapse"
                  className="w-full bg-obsidian border border-edge rounded-xl p-3.5 text-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
                />
              </div>

              <div>
                <label htmlFor="url" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                  YouTube / Instagram URL *
                </label>
                <input
                  id="url"
                  type="url"
                  required
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  placeholder="https://instagram.com/founderssynapse"
                  className="w-full bg-obsidian border border-edge rounded-xl p-3.5 text-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
                />
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
                Publishing Volume & SMM Notes (Optional)
              </label>
              <textarea
                id="notes"
                rows="3"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="We release 4 monthly podcast episodes and need daily Reel editing plus full Instagram & TikTok account management."
                className="w-full bg-obsidian border border-edge rounded-xl p-3.5 text-white text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse resize-none"
              />
            </div>

            <div className="pt-4 border-t border-edge flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                <ShieldCheck className="w-4 h-4 text-pulse" />
                <span>NDA PROTECTED // FOOTAGE & CHANNEL PRIVACY GUARANTEED</span>
              </div>
              
              {/* Button label remains exact consistent with initial CTA */}
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-pulse text-white font-semibold rounded-full transition-all hover:-translate-y-0.5 shadow-[0_0_25px_rgba(223,177,91,0.4)] flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse focus-visible:ring-offset-2 focus-visible:ring-offset-surface text-sm"
              >
                <span>{ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Screen: Retains consistent CTA terminology as per Guide Section 5 */
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-obsidian border border-edge flex items-center justify-center text-pulse mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {isQualified ? 'Creative & SMM Call Confirmed.' : 'Repurposing Blueprint Dispatched.'}
            </h3>

            <p className="text-zinc-300 max-w-md mx-auto text-sm leading-relaxed">
              {isQualified ? (
                <>
                  We have logged your channel catalog for <strong className="text-white">{formData.company || 'your show'}</strong>. Our senior editing engineer will perform an audience retention audit and channel review before we speak on your strategy call.
                </>
              ) : (
                <>
                  We have generated your custom short-form repurposing and management blueprint for <strong className="text-white">{formData.company || 'your show'}</strong>. Check <strong className="text-white">{formData.email}</strong> to review our preliminary editing recommendations first.
                </>
              )}
            </p>

            <div className="p-4 sm:p-6 rounded-2xl bg-obsidian border border-edge/80 max-w-lg mx-auto text-left text-xs font-mono space-y-2 text-zinc-400">
              <div className="flex justify-between">
                <span>STATUS:</span>
                <span className="text-emerald-400 font-bold">CHANNEL AUDIT QUEUED</span>
              </div>
              <div className="flex justify-between">
                <span>CREATOR RECORD:</span>
                <span className="text-white">{formData.name} ({formData.email})</span>
              </div>
              <div className="flex justify-between">
                <span>NEXT STEP:</span>
                <span className="text-pulse">{isQualified ? 'CALENDAR INVITE SENT' : 'BLUEPRINT DOCUMENT SENT'}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3.5 bg-surface hover:bg-edge text-white text-sm font-semibold rounded-full border border-edge transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
              >
                Return to Instrument Room
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
