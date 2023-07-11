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
    logo,
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
      title: "Dot Net Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Android Developer",
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
      name: "React JS",
      icon: reactjs,
    },
    /*{
      name: "Redux Toolkit",
      icon: redux,
    },*/
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
      title: "Software Developer",
      company_name: "Bitmapper Integration Technologies",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Feb 2023 - Present",
      points: [
        "Deployed Full Stack applications(GUI) using the C#.NET framework and QT-6 to create robust and scalable software solutions.",
        "Implemented TCP/IP and Socket programming for efficient communication between network devices and applications.",
        "Utilised UART protocols for data transmission to ensure secure and error-free data transfer.",
        "Practised Object Oriented Programming (OOPS) concepts for better code organization and maintainability.",
      ],
    },
    {
      title: "Co-Founder",
      company_name: "Moto Memories",
      icon: logo,
      iconBg: "#383E56",
      date: "Aug 2022 - Present",
      points: [
        "Track Designing: Specializing in professional track designing services for both on-road and off-road events, ensuring optimal performance and safety for participants.",
        "Corporate Team ing: Creating engaging and adrenaline-pumping experiences for corporate team building activities, including car and motorcycle rallies, fostering teamwork and camaraderie.",
        "Off-Site Events: Offering unique and thrilling off-site corporate event experiences that go beyond traditional venues, providing memorable moments for clients and their teams.",
        "Customized Engagements: Tailoring packages to meet specific client needs, delivering exceptional automotive event services, and ensuring customer satisfaction every step of the way.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as this, but Neil proved me wrong.",
      name: "Saket Sabane",
      designation: "Software Developer",
      company: "TCS",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Neil does.",
      name: "Sairohit Choudhary",
      designation: "Business Analyst",
      company: "Avis Budget Grp.",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Neil optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Rahul Sancheti",
      designation: "Founder",
      company: "Moto Dreamz",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "MyHealthPal",
      description:
        "Web-based platform that allows users to customise and plan, AI-backed workout and diet plans.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "OpenAI API",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/neilsancheti/MyHealthPal",
    },
    /*
    {
      name: "Portfolio Neil Sancheti",
      description:
        "Developed an intuitive website to showcase my projects, and work, and a brief about me",
      tags: [
        {
          name: "Three JS",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Three Fibre",
          color: "pink-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/neilsancheti/neil_portfolio.github.io",
    },
    */
    {
      name: "Weather App",
      description:
        "An Android application that displays the weather forecast of specified location.",
      tags: [
        {
          name: "Android",
          color: "blue-text-gradient",
        },
        {
          name: "Material Design 2",
          color: "green-text-gradient",
        },
        {
          name: "Open Weather API",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/neilsancheti",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };