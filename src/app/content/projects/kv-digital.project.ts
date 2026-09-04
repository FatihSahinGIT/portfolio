import { findProjectSummary } from './project-catalog';
import { responsiveProjectImage } from './project-image';
import { Project } from './project.types';

const summary = findProjectSummary('kv.digital');

if (!summary) {
  throw new Error('Missing catalog entry for kv.digital');
}

export const kvDigitalProject = {
  ...summary,
  images: {
    ...summary.images,
    overview: {
      ...summary.images.overview,
      figcaption: 'kv.digital Website Overview',
    },
    smartphone: responsiveProjectImage({
      url: '/project-images/wp/smartphone/wps-2354.webp',
      srcsetBaseUrl: '/project-images/wp/smartphone/wps.webp',
      originalWidth: 4000,
      widths: [480, 780, 1024, 1280, 1600, 1920, 2354, 3200],
      width: 4000,
      height: 2667,
      sizes: '(min-width: 768px) calc(50vw - 2rem), calc(100vw - 3rem)',
      figcaption: 'eTerminservice',
    }),
    tablet: responsiveProjectImage({
      url: '/project-images/wp/tablet/wpt-2354.webp',
      srcsetBaseUrl: '/project-images/wp/tablet/wpt.webp',
      originalWidth: 4000,
      widths: [480, 780, 1024, 1280, 1600, 1920, 2354, 3200],
      width: 4000,
      height: 2667,
      sizes: '(min-width: 768px) calc(50vw - 2rem), calc(100vw - 3rem)',
      figcaption: 'Map Search',
    }),
    others: [],
  },
  role: 'Frontend Developer',
  url: 'https://116117-termine.de',
  alttext: 'kv.digital website screenshots',
  timeframe: 'Present',
  year: '2023 - present',
  texts: {
    introduction: `The appointment booking service by kv.digital is a central digital solution designed to simplify and improve access to medical appointments within Germany’s statutory healthcare system. Its main purpose is to connect patients, medical practices, and the regional Associations of Statutory Health Insurance Physicians through a secure and easy-to-use platform.

Through the well-known 116117 appointment service, patients can search for and book available appointments with doctors or psychotherapists online, via app, or by phone.

This reduces long waiting times, eliminates the need for repeated phone calls, and makes healthcare access more transparent and convenient. Patients can also manage their appointments digitally by viewing, rescheduling, or canceling them when needed.

For medical practices, the service acts as a digital appointment management tool that helps organize available time slots and reduce administrative workload. By centralizing appointment allocation and offering real-time availability, the system improves efficiency, supports fair distribution of appointments, and strengthens the overall digital infrastructure of outpatient healthcare in Germany`,
    task: `As a frontend developer working on digital appointment booking services at kv.digital, my role focuses on building stable, accessible, and user-friendly web applications that support critical healthcare workflows. Using Angular as the main framework, I develop and maintain complex, component-based user interfaces for appointment search, booking, and management, ensuring that the applications are performant, scalable, and easy to use for a wide range of users. I translate design concepts and interaction flows from Figma into clean, reusable Angular components while closely following accessibility guidelines and design system standards.

To ensure long-term quality and reliability, I write and maintain automated tests with Jest, covering core user interactions and business logic, and document UI components in Storybook to enable isolated development, visual testing, and better collaboration with designers and stakeholders.

The development workflow is tightly integrated into CI/CD pipelines powered by Jenkins, where builds, tests, and quality checks run automatically on every change. Code quality, security, and maintainability are continuously monitored with SonarQube, helping identify potential issues early and reduce technical debt. Task planning, implementation, and cross-functional collaboration are organized through JIRA, allowing me to work efficiently with product owners, backend developers, QA, and design teams. Overall, my work combines technical implementation, quality assurance, and close collaboration to deliver robust frontend solutions that make medical appointment booking more efficient, reliable, and accessible within the German healthcare system.`,
    outcome: `The outcome of my work in this role is the delivery of robust, scalable, and consistently high-quality frontend solutions across multiple applications provided by kv.digital. Working within an Nx-based monorepo, one of the key challenges is building and maintaining shared, well-tested components that function reliably across all applications while still supporting different product requirements. By contributing to a unified codebase, I help ensure consistency, reusability, and long-term maintainability throughout the frontend landscape.

A key part of this outcome is close collaboration with designers, including deep discussions around user flows, visual details, and accessibility. This ensures that design decisions translate into implementations that are not only technically robust but also user-friendly, visually appealing, and accessible, resulting in applications that meet both high usability standards and the reliability demands of digital healthcare services.`,
  },
} satisfies Project;
