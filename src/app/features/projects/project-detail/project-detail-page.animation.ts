export const projectDetailPageAnimation = {
  targets: [
    'app-project-information',
    'app-project-gallery',
    'app-project-introduction',
    'app-project-collage',
    'app-project-section',
  ],
  from: {
    y: 20,
    autoAlpha: 0,
  } satisfies gsap.TweenVars,
  to: {
    y: 0,
    autoAlpha: 1,
    duration: 1.5,
    ease: 'power3.out',
  } satisfies gsap.TweenVars,
  scrollTrigger: {
    start: 'top 100%',
    toggleActions: 'play none none none',
    once: true,
  },
};
