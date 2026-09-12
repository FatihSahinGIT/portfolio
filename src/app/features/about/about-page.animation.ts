interface AboutStaggerAnimation {
  targets: string[];
  from: gsap.TweenVars;
  to: gsap.TweenVars;
}

export const aboutImageAnimation = {
  targets: ['.about-headline__image-content'],
  from: {
    y: 4,
    autoAlpha: 0,
  },
  to: {
    y: 0,
    autoAlpha: 1,
    duration: 1.6,
    ease: 'power3.out',
  },
};

const defaultFrom: gsap.TweenVars = {
  y: 12,
  autoAlpha: 0,
};

const defaultTo: gsap.TweenVars = {
  y: 0,
  autoAlpha: 1,
  duration: 1.15,
  ease: 'power3.out',
};

export const aboutIntroAnimation: AboutStaggerAnimation = {
  targets: [
    '.about-location',
    '.about-intro',
    '.about-expertise__list',
    '.about-qualifications__content',
  ],
  from: defaultFrom,
  to: {
    ...defaultTo,
    stagger: {
      each: 0.22,
      from: 'start',
    },
  },
};

export const aboutCardsAnimation: AboutStaggerAnimation = {
  targets: ['.card'],
  from: defaultFrom,
  to: {
    ...defaultTo,
    duration: 0.9,
    stagger: {
      each: 0.18,
      from: 'start',
    },
  },
};
