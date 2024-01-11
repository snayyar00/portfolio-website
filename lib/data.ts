import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import adleyImg from "@/public/adley.webp";
import makecvImg from "@/public/makecv.webp";
import vistabotsImg from "@/public/vistabots.webp";
import webabilityImg from "@/public/webAbility.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Blogs",
    hash: "#blogs",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science @ SFU",
    location: "Vancouver, BC",
    description: "Completed a BSc in Computer Science at SFU, gaining in-depth knowledge in data structures, algorithms, databases, operating systems, and software engineering. Achieved a GPA of 3.5+, demonstrating strong academic performance.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2021",
  },
  {
    title: "Web Developer @ Pivot2020",
    location: "Toronto, ON",
    description: "Held a pivotal role in designing and developing user-friendly, responsive websites using HTML, CSS, and JavaScript. Managed full software development lifecycle for 9 websites, delivering projects on time and under budget. Enhanced UX scores and performance of existing websites significantly.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Full-Stack Developer @ Remitbee",
    location: "Toronto, ON",
    description: "Improved system performance and user experience at Remitbee. Replaced legacy systems with ReactJS and GraphQL, reducing loading times by 50%. Automated invoicing processes, enhancing efficiency and accuracy. Engaged in cross-functional teamwork for developing customer service systems.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "FrontEnd Developer @ Plug Exchange",
    location: "Dubai, UAE",
    description: "Transitioned to a full-stack role, specializing in technologies like React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. Focused on freelance projects, demonstrating adaptability and skill in developing advanced web applications. Open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Full-Stack Developer @ Blaise Transit",
    location: "Quebec, QC",
    description: "Contributed to full-stack web application development using React.js, Node.js, Express.js, and MongoDB. Assisted in designing scalable systems and infrastructures, working collaboratively with diverse engineering teams. Focused on responsive UIs and effective data integration from back-end APIs.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  }
] as const;

export const projectsData = [
  {
    title: "WebAbility.io",
    description: "A comprehensive solution focused on web accessibility compliance, ensuring adherence to WCAG and ADA standards. My role spanned across full-stack development, utilizing MongoDB, Node.js, and React.",
    tags: ["MongoDB", "Node.js", "React"],
    imageUrl: webabilityImg, // Replace with actual image URL
  },
  {
    title: "Vistabots.ai",
    description: "Involved in creating a GPT-powered live chat for online customer support, enabling rapid AI training and deployment. My contribution covered backend, frontend, and full-stack engineering skills.",
    tags: ["MongoDB", "Node.js", "React"],
    imageUrl: vistabotsImg, // Replace with actual image URL
  },
  {
    title: "Adley.ai",
    description: "An AI content generator built with Reactjs, MongoDB, Nodejs, and JavaScript, deployed on AWS. Focused on incorporating AI features to enhance efficiency and user experience.",
    tags: ["Reactjs", "MongoDB", "Nodejs", "JavaScript", "AWS"],
    imageUrl: adleyImg, // Replace with actual image URL
  },
  {
    title: "Make-CV",
    description: "A drag and drop resume and cover letter builder using PHP, Laravel, and MySQL. Aimed at providing a seamless user experience and helping users present their qualifications effectively to employers.",
    tags: ["PHP", "Laravel", "MySQL"],
    imageUrl: makecvImg, // Replace with actual image URL
  }
] as const;

export const blogsData = [
  {
    title: "Discover the Future: The Top 9 AI APIs of 2024 - A Deep Dive",
    description: "An insightful exploration into the most influential AI APIs of 2024, detailing their capabilities, innovations, and impact on the tech landscape.",
    tags: ["AI", "Technology", "Innovation"],
   
  },
  {
    title: "Goodbye Cookies, Hello Privacy? Google's New Approach to Online Tracking",
    description: "A critical analysis of Google's shift from cookies to a more privacy-centric approach for online tracking, examining its implications for users and marketers.",
    tags: ["Privacy", "Google", "Online Tracking"],
   
  },
  {
    title: "Cracking the Code: Mastering JavaScript Functions for Your Technical Interview (Part 2 Functions)",
    description: "Part 2 of a comprehensive guide to mastering JavaScript functions, aimed at helping developers ace their technical interviews with in-depth knowledge and practice.",
    tags: ["JavaScript", "Coding Interview", "Functions"],
   
  },
  {
    title: "Cracking the Code: One Night of Intense Preparation for Your Technical Interview in JavaScript (Part 1 Arrays)",
    description: "Part 1 of an intense, last-minute preparation guide for JavaScript technical interviews, focusing on array manipulations and problem-solving strategies.",
    tags: ["JavaScript", "Coding Interview", "Arrays"],
   
  },
  {
    title: "Launching My New SaaS, WebAbility.ca",
    description: "A personal narrative on the journey of launching WebAbility.ca, a SaaS platform dedicated to enhancing web accessibility, detailing challenges and achievements.",
    tags: ["SaaS", "WebAbility", "Startup Journey"],
    
  }
] as const;



export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
 