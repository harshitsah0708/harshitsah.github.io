import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tryshades,
  solvio,
  Iq,
  untitled,
  secureme_dashboard,
  weatherapp,
  instagram,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Product Designer",
    icon: mobile,
  },
  {
    title: "UI|UX Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI|UX Designer & Developer",
    company_name: "Solvio",
    icon: solvio,
    iconBg: "#383E56",
    date: "Oct 2021 - Feb 2022",
    points: [
      "Front-end Development - Contributed in creating the frontend of the tool.",
      "Product Designing - Created tons of smart worksheets as a lead designer.",
      "UI/UX Designing - Designed many types of User Interface for the tool.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Vice-Chairperson",
    company_name: "Innovator's Quest",
    icon: Iq,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Dec 2022",
    points: [
      "Managed more than 50 events successfully with an average participation thousands of students.",
      "Collaborated with resource-persons, sponsors, teams, businesses and start- ups, campus ambassadors and college management.",
      "Managed a core team of 100+ members.",
      "Participating in reviews and providing constructive feedback to whole team.",
    ],
  },
  {
    title: "Product Designer",
    company_name: "Try Shades",
    icon: tryshades,
    iconBg: "#383E56",
    date: "April 2022 - May 2023",
    points: [
      "Developed UI & Front-end of Y-Hills which is an ed-tech startup and one of the clients of our company.",
      "Prepared designs of current Try Shades website.",
      "Designed logo, business card, carrying bag, bill book, etc. for one of our client namely Purple which is an apparel startup.",
    ],
  },
  {
    title: "Product Designer",
    company_name: "The Untitled Tee",
    icon: untitled,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Apr 2023",
    points: [
      "Designed website, brochure, poster, t-shirts for our apparel company.",
      "Designed various kinds of apparels.",
      "Studied the choices of the people of various age group related to apparel design and worked accordingly.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SecureMe-Dashboard",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: secureme_dashboard,
    source_code_link: "https://www.figma.com/file/8YrwUqRm1uq8GrofPowBJZ/Untitled?type=design&node-id=0%3A1&t=UqJDSv4yI3vAqp8d-1",
  },
  {
    name: "Weather-App",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "canva",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://www.figma.com/file/sqhGeJl6AxuKzhxMZwcFyF/Weather-App?type=design&node-id=7%3A1231&t=C1t4l0E9FgATLKH4-1",
  },
  {
    name: "Instagram-Redesign",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "canva",
        color: "blue-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: instagram,
    source_code_link: "https://www.figma.com/file/896Gna71Q4wiJDFasgn2F4/Instagram?type=design&node-id=0%3A9&t=Hb8pUHpaUWtlv7Dx-1",
  },
];

export { services, technologies, experiences, testimonials, projects };
