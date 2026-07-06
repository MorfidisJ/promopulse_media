import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import StudioMicLogo from './StudioMicLogo';

export default function Navbar({ onOpenAssessment }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  // Handle Escape key to close menu and trap focus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        setIsOpen(false);
        setTimeout(() => toggleRef.current?.focus(), 50);
      }

      // Focus trap within mobile menu
      if (e.key === 'Tab' && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        const firstBtn = menuRef.current?.querySelector('button');
        firstBtn?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Assessment', href: '#assessment' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Results', href: '#results' },
    { name: 'Feed', href: '#feed' },
  ];

  const mobileMenuOverlay = isOpen && typeof document !== 'undefined'
    ? createPortal(
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-[9999] bg-obsidian/98 backdrop-blur-3xl flex flex-col justify-between p-5 sm:p-6 md:hidden motion-safe:animate-fadeIn overflow-y-auto"
        >
          {/* Mobile Overlay Header */}
          <div className="flex items-center justify-between border-b border-edge pb-6">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5 text-white font-display font-bold text-xl tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse rounded-lg p-1"
            >
              <div className="w-8 h-8 rounded-lg bg-pulse border border-[#E5C158] flex items-center justify-center text-obsidian shadow-[0_0_15px_rgba(223,177,91,0.3)] shrink-0">
                <StudioMicLogo className="w-5 h-5" />
              </div>
              <span>Promo<span className="text-pulse font-mono">Pulse</span> Media</span>
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => toggleRef.current?.focus(), 50);
              }}
              aria-label="Close mobile menu"
              className="p-2.5 text-zinc-300 hover:text-white bg-surface border border-edge rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse shadow-md"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-5 py-8 my-auto">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono">Navigation</p>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-display font-bold text-zinc-200 hover:text-pulse transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse rounded-lg px-2 active:scale-98"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex flex-col gap-3 pt-6 border-t border-edge mt-auto">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenAssessment();
              }}
              className="w-full py-4 bg-surface text-white font-semibold rounded-full border border-edge hover:border-pulse transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse shadow-sm"
            >
              Take Growth Fit Assessment
            </button>
            <a
              href="#assessment"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 bg-pulse text-white font-semibold rounded-full shadow-[0_0_20px_rgba(223,177,91,0.3)] hover:bg-pulse/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
            >
              Book Strategy Call
            </a>
            <p className="text-center text-xs text-zinc-500 font-mono mt-2">
              ESC or tap X to close menu
            </p>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-obsidian/75 backdrop-blur-xl border-b border-edge transition-all">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between" aria-label="Main Navigation">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 sm:gap-2.5 text-white font-display font-bold text-lg sm:text-xl tracking-tight group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse rounded-lg p-1"
        >
          <div className="w-8 h-8 rounded-lg bg-pulse border border-[#E5C158] flex items-center justify-center text-obsidian shadow-[0_0_15px_rgba(223,177,91,0.3)] group-hover:scale-105 transition-all shrink-0">
            <StudioMicLogo className="w-5 h-5" />
          </div>
          <span>Promo<span className="text-pulse font-mono">Pulse</span> Media</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse rounded px-2"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onOpenAssessment()}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface hover:bg-edge text-white text-sm font-semibold rounded-full border border-edge hover:border-pulse/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian group"
          >
            <span>Growth Fit</span>
            <ArrowUpRight className="w-4 h-4 text-pulse group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <a
            href="#assessment"
            className="px-5 py-2.5 bg-pulse hover:bg-pulse/90 text-white text-sm font-semibold rounded-full transition-all shadow-[0_0_15px_rgba(223,177,91,0.25)] hover:shadow-[0_0_25px_rgba(223,177,91,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
          >
            Book Strategy Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          ref={toggleRef}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          className="md:hidden p-2.5 text-zinc-300 hover:text-white bg-surface border border-edge rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse active:scale-95 transition-all shadow-sm"
        >
          {isOpen ? <X className="w-6 h-6 text-pulse" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Render mobile overlay via portal into document.body to prevent containing-block clipping */}
      {mobileMenuOverlay}
    </header>
  );
}
