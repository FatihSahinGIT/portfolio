export const workWrapperFadeInAnimation = {
  targets: ['work-information', 'work-images', 'work-text', 'work-collage', 'work-details'],
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
    start: 'top 75%',
    toggleActions: 'play none none none',
    once: true,
  },
};
