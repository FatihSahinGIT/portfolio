export const navbarLinkAnimation = {
  targets: ['.navbar-logo', '.navbar-link'],
  from: {
    y: -5,
    autoAlpha: 0,
  },
  to: {
    y: 0,
    autoAlpha: 1,
    duration: 1.5,
    ease: 'power3.out',
    stagger: 0.125,
  },
};
