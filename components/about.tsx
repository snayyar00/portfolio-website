"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  After graduating with a degree in <span className="font-medium">Computer Science</span>, I embraced my passion for programming. My journey includes comprehensive learning in <span className="font-medium">full-stack web development</span> from a coding bootcamp. The <span className="italic">challenge of solving complex problems</span> in programming deeply fascinates me. I <span className="underline">thrive</span> on the thrill of finding solutions. My expertise lies in <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>, and I'm proficient with TypeScript and Prisma. Continuously seeking to expand my skillset, I'm actively looking for a <span className="font-medium">full-time role</span> as a software developer.
</p>

<p>
  <span className="italic">Outside of coding</span>, my interests include playing video games, watching movies, and spending quality time with my dog. I am passionate about <span className="font-medium">learning and exploring new technologies</span> in the ever-evolving field of software development.
</p>
    </motion.section>
  );
}
