import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
//import heroImage from '../images/header-background.webp';
import heroImage from '../images/header-background-blue.webp';
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
  description: "Software Developer and Architect",
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
        I'm a Charlotte, NC based <strong className="text-stone-100">Software Developer</strong>, with extensive
        experience designing building <strong>enterprise</strong> scale and <strong>cloud</strong> based systems from
        the <strong>data</strong> to the <strong>UI</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm also an avid <strong>book</strong> reader, an aspiring <strong>guitar</strong> player, and I love to
        watch and play <strong>sports</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
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
  description: `I'm a technology generalist who believes in finding the right solution to fit the needs to the business.
  
  I've built microservices and monoliths, coded in Java, .NET, Python, and JavaScript. I've designed databases in Oracle, Postgres, MySQL, Mongo, and BigTable. I've deployed custom-built solutions and vendor apps. I've built REST services and GraphQL endpoints.
  
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
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  */
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'JavaScript/Typescript',
        level: 7,
      },
      {
        name: 'HTML',
        level: 6,
      },
      {
        name: 'CSS',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Java',
        level: 5,
      },
      {
        name: '.NET',
        level: 4,
      },
      {
        name: 'Python',
        level: 4,
      },
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'SQL',
        level: 9,
      },
      {
        name: 'Oracle',
        level: 4,
      },
      {
        name: 'Postgres',
        level: 3,
      },
    ],
  },
  {
    name: 'Other',
    skills: [
      {
        name: 'REST',
        level: 9,
      },
      {
        name: 'Microservices',
        level: 4,
      },
      {
        name: 'Architectural Patterns',
        level: 3,
      },
      {
        name: 'Cloud (AWS, GCP)',
        level: 3,
      },
      {
        name: 'Docker & Kubernetes',
        level: 3,
      },
    ],
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
    date: 'January 2022 - Present',
    location: 'BetterCloud',
    title: 'Principal Engineer - Platform and IAM',
    content: (
      <ul className="ml-3 list-disc list-inside">
        <li>Responsible for technical design and architecture of multiple products deployed across Google Cloud Platform</li>
        <li>Supported teams dedicated to authentication, authorization, process automation, and workflows.</li>
        <li>Mentor and coach for multiple teams, including highest performing team at BetterCloud</li>
        <li>Worked with product owners and UX teams to define solutions for both internal and external customers.</li>
        <li>Designed and delivered distributed deletion process across dozens of data sources and over 100 microservices to comply with GDPR, CCPA, and contractual obligations</li>
        <li>Overhauled existing system to maintain authentication tokens using distributed locking to provide a more stable and consistent product</li>
        <li>Designed (both technical and product) generic webhook consumer to power automations and workflows</li>
        <li>POC, design, and delivery of cloud DLP process for sanitizing and protecting customer data</li>
        <li>Design and delivery of shared authentication integrations for SharePoint, BambooHR, and Slack EG APIs</li>
        <li>Responsible for design of company-wide effort to integrate IDP custom data into existing ingestion system</li>
      </ul>
    ),
  },
  {
    date: 'July 2010 - December 2021',
    location: 'Bank of America',
    title: 'Solutions Architect, Lead Developer',
    content: (
      <ul>
        <li className="font-semibold">Solutions Architect – CreditSync</li>
        <ul className="ml-3 list-disc list-inside">
          <li>Responsible for overall technical design of project, including UI, API, and database tiers. Tech stack: Angular / Spring Boot / Oracle</li>
          <li>Defined and led integration with enterprise services, including authentication, authorization, and secrets management such as OAuth2+PKCE, HashiCorp Secrets Vault</li>
          <li>Mentored teammates, negotiated with Product Owners, taught REST API design, prototyped and introduced new technologies to team</li>
          <li>Performed code reviews, provided Agile development consulting, DevOps integration, acted as developer of last resort for exceptional technical problems</li>
        </ul>
        <li className="font-semibold">Solutions Architect / Lead Developer - SecureDocs</li>
        <ul className="ml-3 list-disc list-inside">
          <li>Lead development resource for implementation of new vendor product</li>
          <li>Designed APIs and developed multiple utilities for integrating with external systems and processes</li>
          <li>Worked with vendor to define new functionality</li>
          <li>UI/UX Development Lead on Banking CRM</li>
          <li>Responsible for UI development on a heavily customized Microsoft Dynamics based application</li>
          <li>Worked with UX team and interviewed potential users and experts for UI requirements</li>
          <li>Implemented and directed numerous performance enhancements</li>
        </ul>
        <li className="font-semibold">Development Lead and Application Manager for BBS and Client Profitability apps</li>
        <ul className="ml-3 list-disc list-inside">
          <li>Led development on legacy J2EE application on a Spring / Weblogic / Oracle + Netezza stack</li>
          <li>Designed and developed new features, coordinated releases, oversaw testing</li>
        </ul>
      </ul>
    ),
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
      text: 'You great at supporting and mentoring and inspiring your team. You are always the first to applaud them, to lift the people around you and let them shine.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg',
    },
    {
      name: 'Daniel Breitigan',
      text: 'Clay has done a great job assisting in the growth of [his teams]. ' +
          'Clay has been a rock through all the changes the team' +
          'has gone through in the past year. He\'s created stability and a' +
          'consistent environment for the team to thrive in. Clay\'s mentorship &' +
          'Advocacy has helped the team become more performant - they have gone' +
          'from an average performance to top tier performance team.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/0.jpg',
    },
    {
      name: 'Lorinda Brandon',
      text: 'You know how to tackle a hard problem that is put in front of you and find solutions that meet the business needs but are efficient to deliver',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg',
    },
    {
      name: 'Diego Piexoto',
      text: '[Clay\'s] great technical abilities both hands on and from the mentoring\n' +
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
  description: 'Feel free to reach out. Let\'s chat!',
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
