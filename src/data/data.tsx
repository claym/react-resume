import {
  //AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  //FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
//import heroImage from '../images/header-background-blue.webp';
import portfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import portfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import portfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import portfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import portfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import portfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import portfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import portfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import portfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import portfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import portfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilePic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Clay Mitchell',
  description: 'Software Architect and full-stack engineer in Charlotte NC',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hello! I'm Clay Mitchell.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Charlotte, NC based <strong className="text-stone-100">Software Architect</strong> and full-stack engineer
        with 20+ years of experience building end-to-end systems in <strong>finance</strong>,{' '}
        <strong>healthcare</strong> and <strong>SaaS</strong>, from the <strong>data</strong> to the <strong>UI</strong>
        .
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm also an avid <strong>book</strong> reader, an aspiring <strong>guitarist</strong>, and I love to watch and
        play <strong>sports</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://docs.google.com/document/d/1Po16JolX3B_ROyW_BDGcexEZH7MVOzWLgy3NrqdkM1k/export?format=pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilePic,
  description: `I'm a software architect and full-stack engineer with 20+ years of experience building end-to-end systems for startups and large enterprises. I design and build cloud-native distributed systems, SaaS integrations and high-scale platforms, with security and compliance (HIPAA, SOC 2, GDPR) built in from the start.
  
  I'm known for leading cross-team design, mentoring engineers and bridging the gap between product and engineering. I've worked in Finance, Healthcare, and SaaS, and I've led a team's shift to AI-native development with Claude and Cursor.
  
  I get things done, be it at the world biggest banks, small cloud startups, and even on the NFL sidelines.
  
  I also love to learn new technologies, and to mentor other developers and see them go on to create great things of their own.`,
  aboutItems: [
    {label: 'Location', text: 'Charlotte, NC', Icon: MapIcon},
    {label: 'Experience', text: '20+', Icon: CalendarIcon},
    //{label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Tech, Books, Guitar, Sports', Icon: SparklesIcon},
    //{label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Ready for new opportunities!', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  /*{
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
      },
      {
        name: 'French',
      },
      {
        name: 'Spanish',
      },
    ],
  },
  */
  {
    name: 'AI-Native Development',
    skills: [
      {name: 'Claude'},
      {name: 'Codex'},
      {name: 'Cursor'},
      {name: 'Gemini'},
      {name: 'Warp'},
      {name: 'agentic workflows'},
      {name: 'context engineering'},
      {name: 'custom agent skills'},
      {name: 'AI guardrails'},
      {name: 'skill and plugin evaluation'},
      {name: 'team standards and adoption'},
    ],
  },
  {
    name: 'Architecture',
    skills: [
      {name: 'Microservices'},
      {name: 'REST'},
      {name: 'GraphQL'},
      {name: 'distributed systems'},
      {name: 'technical roadmaps'},
    ],
  },
  {
    name: 'Identity & Security',
    skills: [
      {name: 'OAuth2'},
      {name: 'OIDC'},
      {name: 'SAML'},
      {name: 'PKCE'},
      {name: 'Ory Kratos'},
      {name: 'HashiCorp Vault'},
      {name: 'HIPAA/SOC 2/GDPR compliance'},
    ],
  },
  {
    name: 'Languages',
    skills: [
      {name: 'Java (Spring, Spring Boot, JPA)'},
      {name: 'Go'},
      {name: 'JavaScript/TypeScript (Node.js, ReactJS)'},
      {name: 'Python'},
      {name: 'C#/.NET'},
      {name: 'PowerShell'},
    ],
  },
  {
    name: 'Cloud, DevOps & Reliability',
    skills: [
      {name: 'AWS'},
      {name: 'GCP'},
      {name: 'Docker'},
      {name: 'Kubernetes'},
      {name: 'Terraform'},
      {name: 'GitHub Actions'},
      {name: 'CircleCI'},
      {name: 'Jenkins'},
      {name: 'Ansible'},
      {name: 'Grafana'},
      {name: 'PagerDuty'},
      {name: 'Jira Service Management'},
      {name: 'Linux'},
    ],
  },
  {
    name: 'Data & Integration',
    skills: [{name: 'Oracle'}, {name: 'PostgreSQL'}, {name: 'SQL Server'}, {name: 'DynamoDB'}, {name: 'Kafka'}],
  },
  {
    name: 'Testing',
    skills: [{name: 'unit testing with mocks'}, {name: 'integration testing in test environments'}],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: portfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Feb 2024 - Nov 2026',
    location: 'Included Health',
    title: 'Senior Software Engineer',
    content: (
      <ul className="ml-3 list-disc list-outside">
        <li>
          Led the incremental migration of 6 million users from Auth0 to in-house authentication system, designing and
          personally coding a Python based migration process that had no password resets and no downtime
        </li>
        <li>
          Led the IAM team's shift to AI-native development with Claude and Cursor: set the standards and tooling,
          evaluated agent skills and plugins, wrote the context and guardrail documents agents used to write features
          and tests, built custom skills that walk engineers from design to tests, and mentored engineers on the new
          workflow
        </li>
        <li>
          Built HIPAA rules for handling PHI into the team's AI guardrails, so agent-written code followed the logging
          and audit requirements by default
        </li>
        <li>
          Drove cross-team design for the OTP, signup and login systems, aligning mobile, web and backend teams on one
          approach
        </li>
        <li>
          Architected and built a one-time passcode (OTP) system in Go, covering code request, delivery by email and
          SMS, and redemption
        </li>
        <li>
          Drove security hardening across the platform, designing and building rate limiting and brute-force protection
          for signup, login and OTP redemption
        </li>
        <li>
          Built Grafana dashboards and alerts for the OTP and rate-limiting systems, giving the team visibility into
          auth traffic, abuse patterns and delivery failures
        </li>
        <li>
          Served in the on-call rotation for authentication services and drove incident response through PagerDuty and
          Jira Service Management
        </li>
        <li>
          Delivered an internal identity provider built on Ory Kratos for patient and member login on a HIPAA-governed
          platform handling thousands of signups and hundreds of thousands of logins a day, keeping members connected to
          their medical care
        </li>
        <li>Built federation services for OAuth2, OIDC and SAML, plus social sign-in with Google and Apple</li>
        <li>Spearheaded a ReactJS-based UI for managing inbound SSO connections, from design through implementation</li>
      </ul>
    ),
  },
  {
    date: 'Jan 2022 - Jan 2024',
    location: 'BetterCloud',
    title: 'Principal Engineer',
    content: (
      <ul className="ml-3 list-disc list-outside">
        <li>
          Designed a generic webhook consumer, covering both the technical and product design, that runs 400K workflows
          a month and delivers automation to customers representing $23.7M ARR
        </li>
        <li>
          Designed and delivered a distributed deletion process across dozens of data sources and 100+ microservices to
          meet GDPR, CCPA and contractual obligations, contributing to a perfect SOC/ISO audit score
        </li>
        <li>
          Built shared authentication integrations for SharePoint ($145K added ARR in 90 days), BambooHR (hit its 90-day
          adoption goal in 30 days; $1.7M ARR in 2023) and the Slack Enterprise Grid APIs
        </li>
        <li>
          Rebuilt authentication-token management with distributed locking, which made the product more stable and
          removed a step customers previously had to take
        </li>
        <li>
          Led the design of a company-wide effort to integrate custom IdP data into the ingestion system, delivered 30
          days ahead of schedule
        </li>
        <li>
          Led the proof of concept, design and delivery of a cloud DLP process to sanitize and protect customer data
        </li>
        <li>
          Mentored several teams, including BetterCloud's highest-performing team, which delivered 20% ahead of schedule
          and became the model for design and planning
        </li>
      </ul>
    ),
  },
  {
    date: 'Sep 2009 - Dec 2021',
    location: 'Bank of America',
    title: 'Tech Lead / Solutions Architect',
    content: (
      <ul>
        <li className="font-semibold">Solutions Architect / Tech Lead – CreditSync</li>
        <ul className="ml-3 list-disc list-outside">
          <li>Owned the technical design across the UI, API and database tiers (Angular, Java, Spring Boot, Oracle)</li>
          <li>
            Designed and led integration with enterprise authentication, authorization and secrets management (OAuth2
            with PKCE, HashiCorp Vault)
          </li>
          <li>
            Taught REST API design, mentored teammates, worked with product owners on scope, and prototyped and
            introduced new technologies
          </li>
          <li>
            Ran code reviews, consulted on Agile practices and DevOps integration, and served as escalation engineer for
            the hardest technical problems
          </li>
        </ul>
        <li className="font-semibold">Solutions Architect / Tech Lead – SecureDocs</li>
        <ul className="ml-3 list-disc list-outside">
          <li>Lead developer for the implementation of a new vendor product, defining new features with the vendor</li>
          <li>Designed APIs and built utilities to integrate the product with external systems and processes</li>
          <li>Built a ReactJS/TypeScript UI for the organization's knowledge base</li>
        </ul>
        <li className="font-semibold">UI/UX Development Tech Lead on Banking CRM</li>
        <ul className="ml-3 list-disc list-outside">
          <li>
            Led UI development on a heavily customized Microsoft Dynamics application, focusing on usability and
            performance
          </li>
          <li>Worked with the UX team and interviewed users and subject-matter experts to define UI requirements</li>
        </ul>
      </ul>
    ),
  },
  {
    date: 'Jan 2008 - Sep 2009',
    location: 'Wells Fargo',
    title: 'Senior Software Engineer',
    content: (
      <ul className="ml-3 list-disc list-outside">
        <li>Built a JBPM-based Java web application for General Ledger reconciliation workflows</li>
      </ul>
    ),
  },
  {
    date: 'Jul 2000 - Dec 2007',
    location: 'Bank of America, Xpient Solutions',
    title: 'Earlier Experience',
    content: (
      <ul className="ml-3 list-disc list-outside">
        <li>
          Bank of America, Senior Software Engineer (2007): designed and led development of a Java customer onboarding
          application
        </li>
        <li>
          Xpient Solutions, Software Engineer (2006–2007): added Oracle support to a Java database product and built a
          C# reporting application
        </li>
        <li>
          Bank of America, Software Engineer (2000–2006): built Java/J2EE CRM systems and drove early adoption of
          Spring, Hibernate and Ajax
        </li>
      </ul>
    ),
  },
  {
    date: 'Other projects',
    location: 'Exigentic LLC',
    title: 'Founder',
    content: (
      <p>
        Builds sports software, including{' '}
        <a className="underline" href="https://clutchrefs.com" rel="noopener noreferrer" target="_blank">
          clutchrefs.com
        </a>{' '}
        and{' '}
        <a className="underline" href="https://oldmanhoops.net" rel="noopener noreferrer" target="_blank">
          oldmanhoops.net
        </a>
      </p>
    ),
  },
  {
    date: '2017',
    location: 'NFL',
    title: 'NFL Sideline Wi-Fi Technician',
    content: <p>Kept coaching devices connected on game days</p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Lorinda Brandon',
      text:
        'You great at supporting and mentoring and inspiring your team. You are always the first to applaud them, to lift the people around you and let them shine ' +
        '...You know how to tackle a hard problem that is put in front of you and find solutions that meet the business needs but are efficient to deliver',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg',
    },
    {
      name: 'Daniel Breitigan',
      text:
        'Clay has done a great job assisting in the growth of [his teams]. ' +
        'Clay has been a rock through all the changes the team' +
        "has gone through in the past year. He's created stability and a" +
        "consistent environment for the team to thrive in. Clay's mentorship &" +
        'Advocacy has helped the team become more performant - they have gone' +
        'from an average performance to top tier performance team.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/0.jpg',
    },
    {
      name: 'Diego Piexoto',
      text:
        "[Clay's] great technical abilities both hands on and from the mentoring\n" +
        'aspect will continue to help him pave the way to the next chapter...',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "Feel free to reach out. Let's chat!",
  items: [
    {
      type: ContactType.Email,
      text: 'clay@pfd.net',
      href: 'mailto:clay@pfd.net',
    },
    {
      type: ContactType.Location,
      text: 'Charlotte NC, USA',
      href: 'https://maps.app.goo.gl/FkMt8y4Q1Ub6Wkb87',
    },
    /*
    {
      type: ContactType.Instagram,
      text: '@clay_mitchell',
      href: 'https://www.instagram.com/clay_mitchell/',
    },
    */
    {
      type: ContactType.Github,
      text: 'claym',
      href: 'https://github.com/claym',
    },
    {
      type: ContactType.Twitter,
      text: '@clay_mitchell',
      href: 'https://twitter.com/clay_mitchell',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/claym'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/claymitchell/'},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/clay_mitchell'},
];
