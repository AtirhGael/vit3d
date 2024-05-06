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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database",
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
      title: "React.js Developer",
      company_name: "Smartech",
      icon: starbucks,
      iconBg: "#383E56",
      date: "july 2020 - Feb 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tech Labs",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "March 2021 - December 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "IUC Douala",
      icon: shopify,
      iconBg: "#383E56",
      date: "Dec 2022 - march 2023",
      points: [
        "Developing and maintaining web Api for the school management system using Django rest framework .",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Xenati AI",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "may 2023 - Present",
      points: [
        "Developing and maintaining web and mobile applications using react, react native and node js.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but you proved me wrong.",
      name: "Tamanji Courage",
      designation: "CEO",
      company: "TechLabs",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "dedication, hardworking and good communication is what i love most about you ",
      name: "Kweti Awa",
      designation: "senior dev",
      company: "TechLabs",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Our school management website is far more better than it used to be thanks to you and i enjoy working with you ",
      name: "Alain Emaga",
      designation: "Senior dev",
      company: "IUC Douala",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: " Crypto Community",
      description:
        "a mobile platform that allows users contact and trade their cypto currencies.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
       
      ],
      image: carrent,
      source_code_link: "https://play.google.com/store/apps/details?id=com.cryptcommunities",
    },
    {
      name: "Galio students",
      description:
        "Web application that enables students to upload couses, view their results,take quizes etc.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Django ",
          color: "green-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://mystudentinfos.myiuc.com/",
    },
    {
      name: "Galio admin",
      description:
        "An admin section for Galio students",
      tags: [
        {
          name: "React and typscript",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://galio.myiuc.com/",
    },
    {
      name: "TradPoint Exchange",
      description:
        "A mobile aplication where users can place a trade on thier favourite players from the top 5 football leagues in the world",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://expo.dev/artifacts/eas/gSaQKtc18ME97aE7AVfhKB.apk",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };