import { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisScroll() {
  useEffect(() => {
    // 1. Check prefers-reduced-motion before initializing
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return; // Do not initialize smooth scroll if OS setting demands reduced motion
    }

    // 2. Initialize Lenis with keyboard navigation protection
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false, // Don't break native mobile touch scrolling
      touchMultiplier: 2,
      // Protect native keyboard scroll (Page Down, Spacebar, Arrow keys) and screen readers
      prevent: (node) => {
        const tagName = node.nodeName.toLowerCase();
        return (
          tagName === 'input' ||
          tagName === 'textarea' ||
          tagName === 'select' ||
          node.hasAttribute('data-lenis-prevent') ||
          node.getAttribute('role') === 'dialog' ||
          node.getAttribute('role') === 'menu'
        );
      },
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const requestID = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(requestID);
      lenis.destroy();
    };
  }, []);

  return null;
}
