import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const isReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Hook to animate elements on initial page load / route change
 */
export const usePageEntrance = (containerRef: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate elements marked with [data-animate="hero"]
      const heroItems = containerRef.current?.querySelectorAll('[data-animate="hero"]');
      if (heroItems && heroItems.length > 0) {
        gsap.fromTo(
          heroItems,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power2.out',
          }
        );
      }

      // Animate elements with [data-animate="section-reveal"]
      const sections = containerRef.current?.querySelectorAll('[data-animate="section-reveal"]');
      sections?.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      });

      // Animate staggered cards with [data-animate="cards-stagger"]
      const cardContainers = containerRef.current?.querySelectorAll('[data-animate="cards-stagger"]');
      cardContainers?.forEach((cardGroup) => {
        const cards = cardGroup.children;
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
              stagger: 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: cardGroup,
                start: 'top 88%',
                toggleActions: 'play none none none',
                once: true,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => {
      ctx.revert(); // Comprehensive GSAP and ScrollTrigger cleanup
    };
  }, [containerRef]);
};
