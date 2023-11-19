import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    python,
    Java,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    hangman,
    caesar,
    figma,
    docker,
    meta,
    elecon,
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
      title: "Backend Engineer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
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
      name: "Java",
      icon: Java,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Elecon",
      icon: elecon,
      iconBg: "#383E56",
      date: "August 2023",
      points: [
        "Worked on a Project which involved extracting and analyzing race statistics to gain insights, enabling data driven decisions for racing teams.",
        "Worked on compelling charts and graphs visually represent key insights, making complex race statistics and trends accessible for quick and informed decision.",
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
      name: "Hangman Game",
      description:
        "Built a program that allows user to guess individual letters while avoiding a series of incorrect guesses, ultimately aiming to reveal the complete word",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      ],
      image: hangman,
      source_code_link: "https://github.com/Rudra2122/hangman",
    },
    {
      name: "Caesar Cipher",
      description:
        " Built a program that allows user to shift characters in text by fixed number of positions,providing basic data security through letter substitution",
      tags: [
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: caesar,
      source_code_link: "https://github.com/Rudra2122/Caesar-Cipher",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };