import {
web,mobile,backend,creator,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  java,
  aws,
  next,
  nest,
  postgre,
  mysql,
  dynamo,
  avonet,
  eb,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];



const technologies = [

  {
    name: "Java",
    icon: java,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "nest",
    icon: nest,
  },
  {
    name: "AWS",
    icon: aws,
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
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "Postgresql",
    icon: postgre,
  },
  {
    name: "DynamoDb",
    icon: dynamo,
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
    name: "git",
    icon: git,
  },
  
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate Software Engineer",
    company_name: "Avonet Technologies",
    icon: avonet,
    iconBg: "#383E56",
    date: "February 2025 -Present",
    points: [
      "Working on maintenance tasks and developing new features for Rail Europe, Oshua, Webbeds, and Basecode projects, ensuring seamless functionality and continuous improvement.",
      "Developed and integrated Distribusion's APIs into the backend and built the frontend UI to create a fully functional ticket booking system, ensuring seamless operations and an enhanced user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Tech Stack - Nest Js , Next Js , DynamoDB ,Tailwind CSS , AWS Opensearch , AWS Lambda , Cloudwatch, Typescript",
    
    ],
  },
  {
    title: "Intern Software Engineer",
    company_name: "Avonet Technologies",
    icon: avonet,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Working on maintenance tasks and developing new features for Rail Europe, Oshua, Webbeds, and Basecode projects, ensuring seamless functionality and continuous improvement.",
      "Developed and integrated Distribusion's APIs into the backend and built the frontend UI to create a fully functional ticket booking system, ensuring seamless operations and an enhanced user experience.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Tech Stack - Nest Js , Next Js , DynamoDB ,Tailwind CSS , AWS Opensearch , AWS Lambda , Cloudwatch, Typescript",
    ],
  },
  {
    title: "Intern Software Engineer",
    company_name: "Ebeyonds ebusiness & Digital Solutions",
    icon: eb,
    iconBg: "#383E56",
    date: "November 2023 - May 2024",
    points: [
      "Developed and maintained a scalable, e-commerce platform named shop on cloud designed to facilitate seamless online shopping experiences with Agile development method",
      "Researched and implemented a Redis queue for fast product access in the 'Shop on Cloud' e-commerce application, optimizing performance and reducing database load.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Tech Stack - Laravel , React Js , Mysql ,Tailwind CSS , Redis , Javascript",
    
    ],
  }

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
    name: "Kalindu Auto POS system",
    description:
      "A tailored Point of Sales solution for a spare part shop based in Yakkala",
    tags: [
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Hotel management System",
    description:
      "Developed a Hotel Management System focused on Room Bookings Management and User Authentication to streamline hotel operations",
    tags: [
      {
        name: "spring-boot",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Next-Tier",
    description:
      "Next Tier is a mobile-responsive web application that streamlines the management of the institutes while providing a quality learning experience to the students",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSql",
        color: "pink-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "ChakraUI",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "blue-text-gradient",
      },
      {
        name: "JWT",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "PETRO",
    description:
      "The need for a comprehensive solution that streamlines the internal processes of a filling station while enabling customers to pre-order fuel and oil products has never been greater.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Php",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI mock Interview application",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Project Management  App",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "NestJs",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
