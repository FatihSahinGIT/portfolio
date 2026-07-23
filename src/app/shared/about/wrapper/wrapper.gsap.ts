
interface AboutWrapperAnimation {
  target: string;
  from: gsap.TweenVars;
  to: gsap.TweenVars;
  position?: gsap.Position;
  scrollTrigger?: boolean;
}

const defaultFrom: gsap.TweenVars = {
  y: 8,
  opacity: 0,
};

const defaultTo: gsap.TweenVars = {
  y: 0,
  opacity: 1,
  duration: 0.5,
  ease: 'power2.inOut',
};

export const aboutWrapperAnimations: AboutWrapperAnimation[] = [
  {
    target: '.about-headline__image-content',
    from: defaultFrom,
    to: {
      ...defaultTo,
      duration: 1,
    },
  },
  {
    target: '.about-location',
    from: defaultFrom,
    to: defaultTo,
    position: '-=0.45',
  },
  {
    target: '.about-intro',
    from: defaultFrom,
    to: defaultTo,
    position: '-=0.35',
  },
  {
    target: '.about-expertise__list',
    from: defaultFrom,
    to: defaultTo,
    position: '-=0.3',
  },
  {
    target: '.about-qualifications__content',
    from: defaultFrom,
    to: defaultTo,
    position: '-=0.3',
  },
  {
    target: '.card',
    from: defaultFrom,
    to: {
      ...defaultTo,
      stagger: 0.1,
    },
    scrollTrigger: true,
  },
];
